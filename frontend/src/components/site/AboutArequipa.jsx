import { ABOUT_POINTS, TRIP_META } from "../../data/tripContent";

export default function AboutArequipa() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-[#FAFAF8] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Eyebrow + title */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C05A45] font-semibold mb-4">
              01 — La Ciudad Blanca
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="about-title"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2C2B29] font-light tracking-tight leading-[1.05]"
            >
              Arequipa is a city of <em className="italic text-[#C05A45]">white stone,</em> stitched
              between the desert and three sleeping volcanoes.
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-[#5C5A56] leading-relaxed">
              {TRIP_META.dates}. Fourteen days. One team. A chance to step into
              a city whose rhythm has shaped Perú for four centuries — and to
              leave small, good things behind us.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Volcano - tall left */}
          <div className="col-span-12 md:col-span-5 md:row-span-2 h-[480px] md:h-auto relative overflow-hidden rounded-sm">
            <img
              src="https://images.pexels.com/photos/19677738/pexels-photo-19677738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="El Misti Volcano rising above Arequipa"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#2C2B29]/90 to-transparent">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D99058] font-semibold">
                El Misti
              </div>
              <div className="font-serif-display text-2xl text-[#FAFAF8] mt-1">
                Active stratovolcano · 5,822m
              </div>
            </div>
          </div>

          {/* Point 1 */}
          <div className="col-span-12 md:col-span-7 bg-[#F2EFE9] p-8 md:p-12 rounded-sm">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#C05A45] font-semibold mb-3">
              {ABOUT_POINTS[0].eyebrow}
            </div>
            <h3 className="font-serif-display text-3xl md:text-4xl text-[#2C2B29] font-medium leading-tight">
              {ABOUT_POINTS[0].title}
            </h3>
            <p className="mt-4 text-[#5C5A56] leading-relaxed">
              {ABOUT_POINTS[0].body}
            </p>
          </div>

          {/* Point 2 */}
          <div className="col-span-12 md:col-span-7 bg-[#EAE5D9] p-8 md:p-12 rounded-sm">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#C05A45] font-semibold mb-3">
              {ABOUT_POINTS[1].eyebrow}
            </div>
            <h3 className="font-serif-display text-3xl md:text-4xl text-[#2C2B29] font-medium leading-tight">
              {ABOUT_POINTS[1].title}
            </h3>
            <p className="mt-4 text-[#5C5A56] leading-relaxed">
              {ABOUT_POINTS[1].body}
            </p>
          </div>

          {/* Architecture */}
          <div className="col-span-12 md:col-span-6 h-[340px] relative overflow-hidden rounded-sm">
            <img
              src="https://images.pexels.com/photos/33679718/pexels-photo-33679718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Historic colonial arches of Arequipa"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
          </div>

          {/* Textile */}
          <div className="col-span-12 md:col-span-6 h-[340px] relative overflow-hidden rounded-sm">
            <img
              src="https://images.pexels.com/photos/24645287/pexels-photo-24645287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Intricate handmade Andean textiles"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#2C2B29]/90 to-transparent">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D99058] font-semibold">
                Andean weaving
              </div>
              <div className="font-serif-display text-xl text-[#FAFAF8] mt-1">
                Every color carries a story.
              </div>
            </div>
          </div>

          {/* Language point - full width */}
          <div className="col-span-12 border-l-2 border-[#C05A45] pl-6 md:pl-10 py-6">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#C05A45] font-semibold mb-3">
              {ABOUT_POINTS[2].eyebrow}
            </div>
            <h3 className="font-serif-display text-3xl md:text-4xl text-[#2C2B29] font-medium leading-tight max-w-3xl">
              {ABOUT_POINTS[2].title}
            </h3>
            <p className="mt-4 max-w-2xl text-[#5C5A56] leading-relaxed">
              {ABOUT_POINTS[2].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
