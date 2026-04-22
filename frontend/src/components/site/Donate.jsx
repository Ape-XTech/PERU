import { HandHeart, ArrowUpRight } from "lucide-react";
import { GIVING_TIERS, TRIP_META } from "../../data/tripContent";

export default function Donate() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="give"
      data-testid="give-section"
      className="relative bg-[#2C2B29] text-[#FAFAF8] py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#C05A45]/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-[#D99058]/15 blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#D99058] font-semibold mb-4">
              07 — Walk with us
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="give-title"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]"
            >
              You can <em className="italic text-[#D99058]">send</em> when you can't go.
            </h2>
            <p className="mt-6 max-w-xl text-[#FAFAF8]/75 leading-relaxed">
              100% of gifts fund in-country work: project materials, partner
              salaries, kids' meals, and medical clinic supplies. {TRIP_META.sendingChurch} covers all administrative costs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#FAFAF8]/10 mb-12">
          {GIVING_TIERS.map((t) => (
            <div
              key={t.amount}
              data-testid={`give-tier-${t.amount.replace(/\W/g, "")}`}
              className="bg-[#2C2B29] p-8 md:p-10 hover:bg-[#3A3936] transition-colors"
            >
              <div className="font-serif-display text-5xl text-[#D99058] font-light">
                {t.amount}
              </div>
              <p className="mt-4 text-sm text-[#FAFAF8]/80 leading-relaxed">
                {t.impact}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            data-testid="give-cta-primary"
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C05A45] text-[#FAFAF8] text-sm uppercase tracking-[0.15em] hover:bg-[#A64A38] transition-colors rounded-sm"
          >
            <HandHeart size={16} /> Support the team
          </button>
          <button
            data-testid="give-cta-secondary"
            onClick={() => scrollTo("team")}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#FAFAF8]/30 text-[#FAFAF8] text-sm uppercase tracking-[0.15em] hover:bg-[#FAFAF8] hover:text-[#2C2B29] transition-colors rounded-sm"
          >
            Support a goer <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
