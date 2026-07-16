import React from "react";

function UnderlineLine({ name }: { name: string }) {
  return (
    <input
      name={name}
      className="w-full border-b border-slate-400 bg-transparent outline-none
                 focus:border-[#12345c] text-[13px] text-slate-800 py-0.5
                 print:border-slate-500"
    />
  );
}

export default function AdviceFollowUp() {
  return (
    <section className="mt-4 space-y-3">
      {/* Advice */}
      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="whitespace-nowrap text-[13px] text-slate-700 font-normal">
            Advice:
          </span>
          <div className="flex-1">
            <UnderlineLine name="advice1" />
          </div>
        </div>
        <UnderlineLine name="advice2" />
      </div>

      {/* Follow-up */}
      <div className="flex items-baseline gap-2 pt-1">
        <span className="whitespace-nowrap text-[13px] text-slate-700 font-normal">
          Follow-up After:
        </span>
        <div className="flex-1">
          <UnderlineLine name="followUp" />
        </div>
      </div>
    </section>
  );
}
