import { useEffect, useState } from "react";
import { Heart, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "../../lib/api";

export default function PrayerWall() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", request: "", is_public: true });

  const load = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/prayer-requests");
      setItems(data);
    } catch (e) {
      // non-fatal
      console.error("prayer load failed", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.request.trim()) {
      toast.error("Please share your name and a short request.");
      return;
    }
    try {
      setSubmitting(true);
      await api.post("/prayer-requests", form);
      toast.success("Thank you — your request is lifted.");
      setForm({ name: "", request: "", is_public: true });
      load();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const pray = async (id) => {
    try {
      const { data } = await api.post(`/prayer-requests/${id}/pray`);
      setItems((prev) => prev.map((p) => (p.id === id ? data : p)));
    } catch {
      toast.error("Could not record. Try again.");
    }
  };

  return (
    <section
      id="prayer"
      data-testid="prayer-section"
      className="bg-[#FAFAF8] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C05A45] font-semibold mb-4">
              05 — Covered in prayer
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="prayer-title"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2C2B29] font-light tracking-tight leading-[1.05]"
            >
              Send up a <em className="italic text-[#C05A45]">short word.</em>
            </h2>
            <p className="mt-6 max-w-xl text-[#5C5A56] leading-relaxed">
              Leave a request for the team and we'll carry it with us. Tap the
              heart below any request to tell the person it's been prayed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Form */}
          <form
            onSubmit={submit}
            data-testid="prayer-form"
            className="lg:col-span-5 bg-[#F2EFE9] p-8 md:p-10 rounded-sm self-start"
          >
            <h3 className="font-serif-display text-2xl text-[#2C2B29] font-medium mb-6">
              Share a request
            </h3>

            <label className="block mb-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#5C5A56] font-semibold">
                Name or initials
              </span>
              <input
                type="text"
                maxLength={80}
                required
                data-testid="prayer-input-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full px-4 py-3 bg-[#FAFAF8] border border-[#2C2B29]/15 focus:border-[#C05A45] focus:outline-none focus:ring-2 focus:ring-[#C05A45]/20 rounded-sm text-[#2C2B29]"
                placeholder="e.g. Sarah C."
              />
            </label>

            <label className="block mb-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#5C5A56] font-semibold">
                Your request
              </span>
              <textarea
                rows={5}
                maxLength={1000}
                required
                data-testid="prayer-input-request"
                value={form.request}
                onChange={(e) => setForm({ ...form, request: e.target.value })}
                className="mt-2 w-full px-4 py-3 bg-[#FAFAF8] border border-[#2C2B29]/15 focus:border-[#C05A45] focus:outline-none focus:ring-2 focus:ring-[#C05A45]/20 rounded-sm text-[#2C2B29] resize-none"
                placeholder="Short and specific is wonderful."
              />
            </label>

            <label className="flex items-center gap-3 mb-6 text-sm text-[#5C5A56]">
              <input
                type="checkbox"
                data-testid="prayer-input-public"
                checked={form.is_public}
                onChange={(e) =>
                  setForm({ ...form, is_public: e.target.checked })
                }
                className="accent-[#C05A45] w-4 h-4"
              />
              Share publicly on this wall
            </label>

            <button
              type="submit"
              disabled={submitting}
              data-testid="prayer-submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C05A45] text-[#FAFAF8] hover:bg-[#A64A38] transition-colors duration-200 rounded-sm text-sm uppercase tracking-[0.15em] disabled:opacity-60"
            >
              {submitting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {submitting ? "Sending…" : "Submit"}
            </button>
          </form>

          {/* Wall */}
          <div className="lg:col-span-7">
            {loading ? (
              <div
                data-testid="prayer-loading"
                className="text-[#5C5A56] flex items-center gap-2"
              >
                <Loader2 size={16} className="animate-spin" />
                Loading requests…
              </div>
            ) : items.length === 0 ? (
              <div
                data-testid="prayer-empty"
                className="border border-dashed border-[#2C2B29]/20 p-10 text-center text-[#5C5A56]"
              >
                <p className="font-serif-display text-xl text-[#2C2B29] mb-2">
                  Be the first to ask.
                </p>
                <p className="text-sm">
                  This wall is quiet — until you fill it.
                </p>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((p) => (
                  <li
                    key={p.id}
                    data-testid={`prayer-item-${p.id}`}
                    className="bg-white border border-[#2C2B29]/10 p-6 md:p-7 rounded-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#C05A45] font-semibold">
                          {p.name}
                        </div>
                        <p className="mt-2 text-[#2C2B29] leading-relaxed">
                          {p.request}
                        </p>
                      </div>
                      <button
                        onClick={() => pray(p.id)}
                        data-testid={`prayer-pray-btn-${p.id}`}
                        className="flex items-center gap-2 text-[#C05A45] hover:text-[#A64A38] transition-colors group flex-shrink-0"
                        aria-label="I prayed for this"
                      >
                        <Heart
                          size={18}
                          className="group-hover:fill-[#C05A45] transition-all"
                        />
                        <span className="text-sm tabular-nums">
                          {p.prayer_count}
                        </span>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
