"use client";

import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";
import PrescriptionHeader from "@/components/PrescriptionHeader";
import PatientInfoForm from "@/components/PatientInfoForm";
import RxSection from "@/components/RxSection";
import AdviceFollowUp from "@/components/AdviceFollowUp";
import DoctorSignature from "@/components/DoctorSignature";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 1.9 0 1.1.8 2.2 1 2.3.1.2 1.6 2.5 4 3.4.6.2 1 .4 1.3.5.6.2 1.1.1 1.5-.1.5-.2 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4C8.6 21.4 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5S20.5 7.3 20.5 12 16.7 20.2 12 20.2Z" />
    </svg>
  );
}

export default function PrescriptionPage() {
  const prescriptionRef = useRef<HTMLFormElement>(null);
  const [sharing, setSharing] = useState(false);

  const handlePrint = () => {
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const handleWhatsAppShare = async () => {
    if (!prescriptionRef.current) return;
    setSharing(true);

    try {
      const el = prescriptionRef.current;
      const A4_PX = 794; // 210mm at 96dpi

      // ── Offscreen clone approach ──────────────────────────────────
      // Create a hidden wrapper at exact A4 width, far off-screen.
      // This bypasses the mobile viewport constraint entirely.
      const wrapper = document.createElement("div");
      wrapper.style.cssText = [
        "position:fixed",
        "left:-9999px",
        "top:0",
        `width:${A4_PX}px`,
        "background:#fff",
        "z-index:-1",
        "overflow:visible",
      ].join(";");

      // Deep-clone the form (including computed styles via toPng clone)
      const clone = el.cloneNode(true) as HTMLElement;
      clone.style.cssText = [
        `width:${A4_PX}px`,
        `min-width:${A4_PX}px`,
        "box-shadow:none",
        "margin:0",
        "overflow:visible",
      ].join(";");

      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // Wait one frame so browser lays out the clone at full width
      await new Promise((r) => requestAnimationFrame(r));

      let dataUrl: string;
      try {
        dataUrl = await toPng(clone, {
          pixelRatio: 2,
          backgroundColor: "#ffffff",
          width: A4_PX,
          height: clone.scrollHeight,
          style: { overflow: "visible" },
        });
      } finally {
        // Always clean up the offscreen clone
        document.body.removeChild(wrapper);
      }


      // 2. Convert data URL to Blob
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], "prescription.png", { type: "image/png" });

      // 3. Detect mobile device (Android / iOS)
      const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);

      if (isMobile && navigator.canShare && navigator.canShare({ files: [file] })) {
        // Mobile: Web Share API → native share sheet (WhatsApp appears here)
        await navigator.share({
          files: [file],
          title: "ManyaCare Prescription",
          text: "Here is your prescription from ManyaCare HealthCity.",
        });
      } else {
        // Desktop fallback:
        // Step 1 — auto-download the prescription image
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "prescription.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Step 2 — open WhatsApp Web directly in new tab
        setTimeout(() => {
          window.open("https://web.whatsapp.com/", "_blank");
        }, 500);
      }
    } catch (err: unknown) {
      // User cancelled share — not an error
      if (err instanceof Error && err.name !== "AbortError") {
        console.error("WhatsApp share error:", err);
      }
    } finally {
      setSharing(false);
    }
  };


  return (
    <div className="min-h-screen bg-[#e8edf3] py-8 print:bg-white print:py-0">

      {/* Toolbar */}
      <div className="mx-auto mb-5 flex w-[210mm] items-center justify-between print:hidden">
        <span className="text-[13px] font-semibold tracking-wide text-slate-500">
          ManyaCare Prescription Pad
        </span>

        <div className="flex gap-2">
          <button
            onClick={handlePrint}
            className="rounded-md bg-[#12345c] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0e2a50]"
          >
            🖨 Print / Save PDF
          </button>

          <button
            onClick={handleWhatsAppShare}
            disabled={sharing}
            className="flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#20b858] disabled:opacity-60 disabled:cursor-wait"
          >
            {sharing ? (
              <>
                <svg className="animate-spin" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                Sharing…
              </>
            ) : (
              <>
                <WhatsAppIcon />
                Share
              </>
            )}
          </button>
        </div>
      </div>

      <form
        ref={prescriptionRef}
        onSubmit={(e) => e.preventDefault()}
        className="
          mx-auto
          w-[210mm]
          min-h-[297mm]
          bg-white
          px-[18mm]
          py-[16mm]
          shadow-[0_6px_30px_rgba(0,0,0,0.18)]

          print:w-[210mm]
          print:min-h-[297mm]
          print:px-[18mm]
          print:py-[16mm]
          print:shadow-none
          print:m-0
          print:mx-auto
        "
      >
        <PrescriptionHeader />

        <div className="break-inside-avoid">
          <PatientInfoForm />
        </div>

        <RxSection />

        <div className="break-inside-avoid">
          <AdviceFollowUp />
          <DoctorSignature />
        </div>
      </form>
    </div>
  );
}