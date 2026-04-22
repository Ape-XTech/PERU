import { useState } from "react";
import { Check, Plus, Minus } from "lucide-react";
import { PACKING_LIST } from "../../data/tripContent";

export default function PackingList() {
  const cats = Object.keys(PACKING_LIST);
  const [open, setOpen] = useState(cats[0]);

  return (
    <section
      id="packing"
      data-testid="packing-section"
      className="bg-[#FAFAF8] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C05A45] font-semibold mb-4">
              03 — Be ready
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="packing-title"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2C2B29] font-light tracking-tight leading-[1.05]"
            >
              Pack <em className="italic text-[#C05A45]">light,</em> pack wise.
            </h2>
            <p className="mt-6 max-w-xl text-[#5C5A56] leading-relaxed">
              One checked bag and a carry-on. Keep documents and one change of
              clothes in your carry-on in case of delays.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[#2C2B29]/10 border-t border-b border-[#2C2B29]/10">
          {cats.map((cat) => {
            const isOpen = open === cat;
            return (
              <div key={cat} data-testid={`packing-cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : cat)}
                  data-testid={`packing-cat-toggle-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                  className="w-full flex items-center justify-between py-6 md:py-8 group"
                >
                  <span className="font-serif-display text-2xl md:text-3xl text-[#2C2B29] font-medium text-left">
                    {cat}
                  </span>
                  <span className="text-[#C05A45] transition-transform duration-300">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>
                {isOpen && (
                  <ul className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 animate-fade-up">
                    {PACKING_LIST[cat].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[#2C2B29]"
                      >
                        <Check
                          size={16}
                          className="mt-1 text-[#C05A45] flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
