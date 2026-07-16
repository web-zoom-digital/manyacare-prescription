"use client";

import React, { useRef, useEffect, useState } from "react";

export default function RxSection() {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    resize();
  }, [text]);

  return (
    <section className="mt-5 flex flex-col">
      {/* Rx symbol + rule line */}
      <div className="flex items-end gap-3 mb-1">
        <div
          className="leading-none select-none text-[#12345c]"
          style={{ fontFamily: "serif", fontSize: "2.6rem", fontWeight: 700, lineHeight: 1 }}
        >
          R<sub style={{ fontSize: "1.4rem", verticalAlign: "sub" }}>x</sub>
        </div>
        <div className="flex-1 border-b-2 border-[#12345c] mb-1" />
      </div>

      {/* Screen view: Lined writing area */}
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        name="prescription"
        aria-label="Prescription medicines and instructions"
        placeholder="Write medicines, dosage & instructions here…"
        rows={1}
        className="w-full min-h-[340px] resize-none overflow-hidden bg-transparent outline-none
                   text-[13px] text-slate-800 leading-[32px] pt-0
                   print:hidden"
      />

      {/* Print view: A standard div to allow natural page breaks */}
      <div className="hidden print:block w-full min-h-[340px] bg-transparent
                      text-[13px] text-slate-800 leading-[32px] pt-0 whitespace-pre-wrap">
        {text}
      </div>
    </section>
  );
}