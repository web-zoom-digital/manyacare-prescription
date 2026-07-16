// "use client";

// import React from "react";
// import PrescriptionHeader from "@/components/PrescriptionHeader";
// import PatientInfoForm from "@/components/PatientInfoForm";
// import RxSection from "@/components/RxSection";
// import AdviceFollowUp from "@/components/AdviceFollowUp";
// import DoctorSignature from "@/components/DoctorSignature";

// function WhatsAppIcon() {
//   return (
//     <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden>
//       <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 1.9 0 1.1.8 2.2 1 2.3.1.2 1.6 2.5 4 3.4.6.2 1 .4 1.3.5.6.2 1.1.1 1.5-.1.5-.2 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
//       <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4C8.6 21.4 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5S20.5 7.3 20.5 12 16.7 20.2 12 20.2Z" />
//     </svg>
//   );
// }

// export default function PrescriptionPage() {
//   return (
//     /* Screen wrapper — light grey background, hidden when printing */
//     <div className="min-h-screen bg-[#e8edf3] py-8 print:bg-white print:py-0">

//       {/* Toolbar (hidden on print) */}
//       <div className="mx-auto mb-5 flex max-w-[794px] items-center justify-between px-4 print:hidden">
//         <span className="text-[13px] font-semibold text-slate-500 tracking-wide">
//           ManyaCare Prescription Pad
//         </span>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => window.print()}
//             className="rounded-md bg-[#12345c] px-5 py-2 text-[13px] font-semibold
//                        text-white shadow hover:bg-[#0e2a50] active:scale-95
//                        transition-all duration-150"
//           >
//             🖨 Print / Save as PDF
//           </button>
//           <button
//             onClick={() =>
//               window.open(
//                 "https://wa.me/?text=" +
//                   encodeURIComponent(
//                     "Here is your prescription from ManyaCare HealthCity. Please find the attached PDF."
//                   ),
//                 "_blank"
//               )
//             }
//             className="flex items-center gap-1.5 rounded-md bg-[#25D366] px-4 py-2
//                        text-[13px] font-semibold text-white shadow
//                        hover:bg-[#1ebe5b] active:scale-95 transition-all duration-150"
//           >
//             <WhatsAppIcon />
//             Share
//           </button>
//         </div>
//       </div>

//       {/* A4 sheet */}
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="mx-auto flex max-w-[794px] flex-col bg-white
//                    px-10 pt-8 pb-10 shadow-[0_4px_32px_rgba(0,0,0,0.13)]
//                    print:shadow-none print:max-w-none print:w-full
//                    print:px-0 print:pt-0 print:pb-0"
//         style={{ minHeight: "9px" }}
//       >
//         <PrescriptionHeader />
//         <PatientInfoForm />
//         <RxSection />

//         {/* Keep Advice + Signature together — never split across print pages */}
//         <div className="[break-inside:avoid] print:[break-inside:avoid]">
//           <AdviceFollowUp />
//           <DoctorSignature />
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";

import React from "react";
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
  const handlePrint = () => {
    setTimeout(() => {
      window.print();
    }, 150);
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
            onClick={() =>
              window.open(
                "https://wa.me/?text=" +
                  encodeURIComponent(
                    "Here is your prescription from ManyaCare HealthCity."
                  ),
                "_blank"
              )
            }
            className="flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#20b858]"
          >
            <WhatsAppIcon />
            Share
          </button>
        </div>
      </div>

      <form
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