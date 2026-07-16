import React from "react";

function UnderlineField({
  label,
  name,
  suffix,
  type = "text",
  width = "flex-1",
}: {
  label: string;
  name: string;
  suffix?: string;
  type?: string;
  width?: string;
}) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 ${width}`}>
      <span className="whitespace-nowrap text-[13px] text-slate-700 font-normal">
        {label}:
      </span>
      <span className="flex items-baseline gap-1 flex-1 min-w-0">
        <input
          type={type}
          name={name}
          className="flex-1 min-w-[48px] border-b border-slate-400 bg-transparent outline-none
                     focus:border-[#12345c] text-[13px] text-slate-800 py-0.5 px-0.5
                     print:border-slate-500"
        />
        {suffix && (
          <span className="text-[12px] text-slate-600 whitespace-nowrap">
            {suffix}
          </span>
        )}
      </span>
    </span>
  );
}

export default function PatientInfoForm() {
  return (
    <section className="mt-2 space-y-[14px] text-[13px]">
      {/* Row 1: Date + UHID */}
      <div className="flex items-baseline gap-8">
        <UnderlineField label="Date" name="date" type="date" width="w-44" />
        <UnderlineField label="UHID" name="uhid" width="w-40" />
      </div>

      {/* Row 2: Patient Name */}
      <div className="flex items-baseline">
        <UnderlineField label="Patient Name" name="patientName" width="w-full" />
      </div>

      {/* Row 3: Age, Sex, Weight */}
      <div className="flex items-baseline gap-6">
        <UnderlineField label="Age" name="age" width="w-32" />
        <UnderlineField label="Sex" name="sex" width="w-32" />
        <UnderlineField label="Weight" name="weight" suffix="kg" width="w-36" />
      </div>

      {/* Row 4: BP, Pulse, Temp, SpO₂ */}
      <div className="flex items-baseline gap-6">
        <UnderlineField label="BP" name="bp" width="w-28" />
        <UnderlineField label="Pulse" name="pulse" width="w-28" />
        <UnderlineField label="Temp" name="temp" suffix="°C" width="w-28" />
        <UnderlineField label="SpO₂" name="spo2" width="w-28" />
      </div>
    </section>
  );
}
