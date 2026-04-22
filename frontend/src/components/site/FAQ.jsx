import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../../data/tripContent";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="bg-[#F2EFE9] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C05A45] font-semibold mb-4">
              06 — Questions, answered
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="faq-title"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2C2B29] font-light tracking-tight leading-[1.05]"
            >
              Still <em className="italic text-[#C05A45]">wondering?</em>
            </h2>
          </div>
        </div>

        <div className="divide-y divide-[#2C2B29]/15 border-t border-b border-[#2C2B29]/15">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-testid={`faq-item-${i}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  data-testid={`faq-toggle-${i}`}
                  className="w-full py-6 md:py-8 flex items-center justify-between gap-8 text-left"
                >
                  <span className="font-serif-display text-xl md:text-2xl text-[#2C2B29] font-medium">
                    {f.q}
                  </span>
                  <span className="text-[#C05A45] flex-shrink-0">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-8 pr-12 max-w-3xl text-[#5C5A56] leading-relaxed animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
