import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "About Arequipa" },
  { id: "itinerary", label: "Itinerary" },
  { id: "packing", label: "Packing" },
  { id: "team", label: "Team" },
  { id: "prayer", label: "Prayer" },
  { id: "faq", label: "FAQ" },
  { id: "give", label: "Give" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FAFAF8]/80 border-b border-[#2C2B29]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          onClick={() => go("top")}
          data-testid="nav-logo"
          className="flex items-baseline gap-2 group"
        >
          <span className="font-serif-display text-2xl leading-none tracking-tight text-[#2C2B29]">
            Arequipa
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C05A45] font-semibold">
            2026
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => go(l.id)}
              className="text-sm text-[#2C2B29]/80 hover:text-[#C05A45] transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            data-testid="nav-cta"
            className="ml-2 px-5 py-2.5 bg-[#C05A45] text-[#FAFAF8] text-sm tracking-wide hover:bg-[#A64A38] transition-colors duration-200 rounded-sm"
          >
            Join the team
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          className="lg:hidden p-2 text-[#2C2B29]"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="lg:hidden bg-[#FAFAF8] border-t border-[#2C2B29]/10 animate-fade-up"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-mobile-${l.id}`}
                onClick={() => go(l.id)}
                className="text-left text-base text-[#2C2B29] hover:text-[#C05A45] py-1"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              data-testid="nav-mobile-cta"
              className="mt-2 px-5 py-3 bg-[#C05A45] text-[#FAFAF8] text-sm tracking-wide rounded-sm"
            >
              Join the team
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
