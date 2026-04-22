import { ITINERARY } from "../../data/tripContent";

export default function Itinerary() {
  return (
    <section
      id="itinerary"
      data-testid="itinerary-section"
      className="bg-[#F2EFE9] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C05A45] font-semibold mb-4">
              02 — Two weeks
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="itinerary-title"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2C2B29] font-light tracking-tight leading-[1.05]"
            >
              The shape of <em className="italic text-[#C05A45]">our days.</em>
            </h2>
            <p className="mt-6 max-w-xl text-[#5C5A56] leading-relaxed">
              A working draft. Schedules in the field bend to the community we
              serve; we promise to move gently and tell you when they shift.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-[#C05A45]/30" />
          <ol className="space-y-10 md:space-y-14">
            {ITINERARY.map((d, i) => (
              <li
                key={d.day}
                data-testid={`itinerary-item-${i}`}
                className="relative"
              >
                <span className="absolute -left-8 md:-left-12 top-1 w-3.5 h-3.5 rounded-full bg-[#C05A45] ring-4 ring-[#F2EFE9]" />
                <div className="text-[11px] uppercase tracking-[0.25em] text-[#C05A45] font-semibold">
                  {d.day}
                </div>
                <h3 className="mt-1 font-serif-display text-2xl md:text-3xl text-[#2C2B29] font-medium">
                  {d.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[#5C5A56] leading-relaxed">
                  {d.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
