import { ArrowDown, MapPin } from "lucide-react";
import { TRIP_META, HERO_STATS } from "../../data/tripContent";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" data-testid="hero-section" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1717420564498-1c856a721305?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxhcmVxdWlwYSUyMHBlcnUlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzc2ODk0NDU2fDA&ixlib=rb-4.1.0&q=85"
          alt="View of El Misti volcano through a colonial arch in Arequipa, Peru"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2B29]/80 via-[#2C2B29]/30 to-[#2C2B29]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-40 md:pt-48 pb-16 min-h-screen flex flex-col justify-between">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-[#FAFAF8]/80 mb-6 animate-fade-up">
            <MapPin size={14} className="text-[#D99058]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              {TRIP_META.destination} · {TRIP_META.season}
            </span>
          </div>

          <h1
            data-testid="hero-title"
            className="font-serif-display text-5xl sm:text-6xl lg:text-8xl text-[#FAFAF8] font-light leading-[0.95] tracking-tighter animate-fade-up delay-100"
          >
            Serve in the shadow <br />
            of <em className="italic text-[#D99058]">El Misti.</em>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-[#FAFAF8]/85 leading-relaxed animate-fade-up delay-200">
            A resource hub for the {TRIP_META.teamName} — everything you need to
            pray, prepare, and pack for two weeks of work, worship, and welcome
            in Perú's White City.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up delay-300">
            <button
              onClick={() => scrollTo("contact")}
              data-testid="hero-cta-join"
              className="px-7 py-3.5 bg-[#C05A45] text-[#FAFAF8] text-sm uppercase tracking-[0.15em] hover:bg-[#A64A38] transition-colors duration-200 rounded-sm"
            >
              Join the team
            </button>
            <button
              onClick={() => scrollTo("give")}
              data-testid="hero-cta-support"
              className="px-7 py-3.5 border border-[#FAFAF8]/40 text-[#FAFAF8] text-sm uppercase tracking-[0.15em] hover:bg-[#FAFAF8] hover:text-[#2C2B29] transition-colors duration-200 rounded-sm"
            >
              Support a goer
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-[#FAFAF8]/20 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-500">
          {HERO_STATS.map((s) => (
            <div key={s.label} data-testid={`hero-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="font-serif-display text-3xl md:text-4xl text-[#FAFAF8] font-light">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#FAFAF8]/60 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollTo("about")}
          data-testid="hero-scroll-indicator"
          className="absolute bottom-6 right-6 md:right-12 text-[#FAFAF8]/70 hover:text-[#FAFAF8] flex items-center gap-2 text-xs uppercase tracking-[0.2em]"
        >
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
