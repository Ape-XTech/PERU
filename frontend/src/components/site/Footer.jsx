import { TRIP_META } from "../../data/tripContent";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#2C2B29] text-[#FAFAF8] border-t border-[#FAFAF8]/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-3xl tracking-tight">
                Arequipa
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D99058] font-semibold">
                2026
              </span>
            </div>
            <p className="mt-4 text-sm text-[#FAFAF8]/70 max-w-sm leading-relaxed">
              A resource hub for the {TRIP_META.teamName}. Sent by {TRIP_META.sendingChurch}.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#D99058] font-semibold mb-4">
              Find us
            </div>
            <ul className="space-y-2 text-sm text-[#FAFAF8]/80">
              <li>Horizon Community Church</li>
              <li>2nd Thursday · 7pm</li>
              <li>arequipa@horizonchurch.org</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#D99058] font-semibold mb-4">
              Sent with love
            </div>
            <p className="text-sm text-[#FAFAF8]/70 leading-relaxed italic font-serif-display text-base">
              "How beautiful are the feet of those who bring good news."
            </p>
            <p className="text-xs text-[#FAFAF8]/50 mt-2">— Romans 10:15</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#FAFAF8]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#FAFAF8]/50">
          <span>© {new Date().getFullYear()} {TRIP_META.sendingChurch}. Built with prayer and coffee.</span>
          <span className="uppercase tracking-[0.25em]">Gracias · Thank you</span>
        </div>
      </div>
    </footer>
  );
}
