import { TEAM } from "../../data/tripContent";

export default function TeamRoster() {
  return (
    <section
      id="team"
      data-testid="team-section"
      className="relative bg-[#2C2B29] py-24 md:py-36 text-[#FAFAF8] overflow-hidden"
    >
      {/* Accent image */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img
          src="https://images.pexels.com/photos/6647011/pexels-photo-6647011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#D99058] font-semibold mb-4">
              04 — The twelve
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="team-title"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]"
            >
              Every team is just <em className="italic text-[#D99058]">a collection of people</em> who said yes.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#FAFAF8]/10">
          {TEAM.map((m) => (
            <div
              key={m.name}
              data-testid={`team-card-${m.name.replace(/\s+/g, "-").toLowerCase()}`}
              className="bg-[#2C2B29] p-8 md:p-10 hover:bg-[#3A3936] transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#C05A45] flex items-center justify-center font-serif-display text-xl text-[#FAFAF8] mb-6">
                {m.initials}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D99058] font-semibold">
                {m.role}
              </div>
              <h3 className="mt-2 font-serif-display text-2xl font-medium">
                {m.name}
              </h3>
              <p className="mt-3 text-sm text-[#FAFAF8]/70 leading-relaxed">
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
