import React from "react";

/**
 * ManyaCare logo mark — teal/green gradient cross with a white stylised
 * person (circle head + leaf-body) inside, matching the brand image.
 * Swap for <img src="/images/manyacare-logo.png" /> once the real file is
 * placed in /public/images/.
 */
function LogoMark() {
  return (
    <img
      src="/logo.png"
      alt="ManyaCare logo"
      width={160}
      height={160}
      className="shrink-0 object-contain"
    />
  );
}

/* ─── Icon helpers ─────────────────────────────────────────────── */

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none"
      stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.09 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none"
      stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M9 3v7L5 19a2 2 0 0 0 1.83 2.77h10.34A2 2 0 0 0 19 19L15 10V3M9 3h6" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="none"
      stroke="#12345c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className="shrink-0 mt-[2px]">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="none"
      stroke="#12345c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className="shrink-0 mt-[2px]">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/* ─── Types ────────────────────────────────────────────────────── */

type PrescriptionHeaderProps = {
  appointmentPhone?: string;
  labPhone?: string;
  websites?: string[];
};

/* ─── Component ─────────────────────────────────────────────────── */

export default function PrescriptionHeader({
  appointmentPhone = "9953239561",
  labPhone = "9953239562",
  websites = ["www.physiciancenter.in", "www.manyacare.com"],
}: PrescriptionHeaderProps) {
  return (
    <header className="border-b-2 border-[#1aad8a] pb-2">

      {/* ══ TOP ROW: Logo+wordmark │ Clinic title │ Address ══ */}
      <div className="flex  gap-0">

        {/* ── COL 1: Logo + "ManyaCare" + "— HEALTHCITY —" ── */}
        <div className="flex flex-col mt-2 min-w-[160px]">
          <LogoMark />

        </div>

        {/* Vertical separator */}
        {/* <div className="w-px bg-slate-200 " /> */}

        {/* ── COL 2: Clinic name + contact row ── */}
        <div className="flex-1 flex flex-col justify-between px-4">
          {/* Top: MANYACARE heading */}
          <div className="text-center">
            <h1 className="text-[38px] font-extrabold text-[#12345c] tracking-wide leading-none">
              MANYACARE
            </h1>
            <div className="text-[17px] font-bold text-[#1aad8a] tracking-[0.12em] mt-0.5">
              MULTI SPECIALITY CLINIC
            </div>
            {/* Thin rule */}
            <div className=" mb-3 border-t border-slate-300 w-full" />
            <div className="text-[12px] font-bold text-blue-900">
              A Unit of MANYACARE HealthCity Pvt. Ltd.
            </div>
          </div>

          {/* Bottom: phone numbers */}
          <div className=" flex items-center gap-0">
            {/* Doctor appointment */}
            <div className="flex items-start gap-3 flex-1">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center
                               rounded-full bg-[#12345c]">
                <PhoneIcon />
              </span>
              <div className="leading-tight">
                <div className="text-[9.5px] text-slate-900">For Doctor Appointment Call</div>
                <div className="text-[13px] font-bold text-[#12345c] leading-tight">
                  {appointmentPhone}
                </div>
              </div>
            </div>

            {/* Vertical divider */}
            {/* <div className="h-10 w-px bg-slate-300 mx-3" /> */}

            {/* Lab services */}
            <div className="flex items-center gap-2 flex-1">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center
                               rounded-full bg-[#1aad8a]">
                <FlaskIcon />
              </span>
              <div className="leading-tight">
                <div className="text-[9.5px] text-slate-900">For Lab Services /</div>
                <div className="text-[9.5px] text-slate-900">Home Collection Call</div>
                <div className="text-[13px] font-bold text-[#12345c] leading-tight">
                  {labPhone}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical separator */}
        <div className="w-px bg-slate-200 mx-1 self-stretch" />

        {/* ── COL 3: Address + Website ── */}
        <div className="flex flex-col justify-between pl-4 shrink-0 min-w-[185px]">
          {/* Address */}
          <div className="flex items-start gap-1.5">
            <PinIcon />
            <address className="not-italic text-[12px] leading-[1.6] text-[#12345c]">
              K/3, Ground Floor,<br />
              Spring Meadows Market,<br />
              Tech Zone-IV,<br />
              Near Nirala Estate,<br />
              Greater Noida West,<br />
              U.P. – 201306
            </address>
          </div>

          {/* Websites */}
          <div className="mt-2 flex items-start gap-1.5">
            <GlobeIcon />
            <div className="text-[12px] leading-[1.6] text-[#12345c] font-medium">
              {websites.map((site) => (
                <div key={site}>{site}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
