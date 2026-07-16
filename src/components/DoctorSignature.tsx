import React from "react";

export default function DoctorSignature() {
  return (
    <div className="mt-4 flex justify-end">
      <div className="text-right w-56">
        {/* Signature line */}
        <div className="border-t-2 border-[#12345c] mb-2" />
        {/* Doctor name */}
        <div className="text-[15px] font-bold text-[#12345c]">
          Dr. Jay Shankarr,{" "}
          <span className="font-semibold">MD</span>
        </div>
        {/* Specialties */}
        <div className="text-[12px] text-slate-600 leading-snug mt-0.5">
          Consultant Physician &amp; Diabetologist
        </div>
        <div className="text-[12px] text-slate-600 leading-snug">
          Emergency Medicine Specialist
        </div>
      </div>
    </div>
  );
}
