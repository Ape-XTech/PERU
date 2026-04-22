import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "../../lib/api";

const INTERESTS = [
  { value: "trip", label: "I want to go" },
  { value: "volunteer", label: "I'm volunteering behind the scenes" },
  { value: "donate", label: "I'd like to give" },
  { value: "prayer", label: "I'd like to pray" },
  { value: "other", label: "Something else" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "trip",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in every field.");
      return;
    }
    try {
      setSubmitting(true);
      await api.post("/contact", form);
      setDone(true);
      toast.success("Got it. We'll be in touch soon.");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(
        typeof detail === "string"
          ? detail
          : "Couldn't send. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-[#FAFAF8] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C05A45] font-semibold mb-4">
              08 — Start the conversation
            </div>
            <h2
              data-testid="contact-title"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2C2B29] font-light tracking-tight leading-[1.05]"
            >
              Tell us <em className="italic text-[#C05A45]">what's on your heart.</em>
            </h2>
            <p className="mt-6 max-w-md text-[#5C5A56] leading-relaxed">
              Whether you're considering joining, partnering in prayer, or
              supporting financially — drop a note and a team member will reply
              within 48 hours.
            </p>
            <div className="mt-10 pt-10 border-t border-[#2C2B29]/10 text-sm text-[#5C5A56] space-y-2">
              <p>
                <span className="text-[#2C2B29] font-semibold">Team lead:</span> Marcus Oduya
              </p>
              <p>
                <span className="text-[#2C2B29] font-semibold">Email:</span>{" "}
                <a href="mailto:arequipa@horizonchurch.org" className="hover:text-[#C05A45]" data-testid="contact-email-link">
                  arequipa@horizonchurch.org
                </a>
              </p>
              <p>
                <span className="text-[#2C2B29] font-semibold">Meets:</span>{" "}
                2nd Thursday monthly · 7pm · Horizon Fellowship Hall
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            {done ? (
              <div
                data-testid="contact-success"
                className="bg-[#F2EFE9] p-10 md:p-14 rounded-sm"
              >
                <CheckCircle2 size={40} className="text-[#C05A45]" />
                <h3 className="mt-6 font-serif-display text-3xl md:text-4xl text-[#2C2B29] font-medium">
                  Thank you, {form.name.split(" ")[0] || "friend"}.
                </h3>
                <p className="mt-4 text-[#5C5A56] leading-relaxed max-w-md">
                  Your note is in the hands of our team. Expect a reply within
                  48 hours — usually much sooner.
                </p>
                <button
                  onClick={() => {
                    setDone(false);
                    setForm({ name: "", email: "", interest: "trip", message: "" });
                  }}
                  data-testid="contact-reset"
                  className="mt-8 text-sm uppercase tracking-[0.15em] text-[#C05A45] hover:text-[#A64A38]"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="bg-[#F2EFE9] p-8 md:p-12 rounded-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#5C5A56] font-semibold">
                      Name
                    </span>
                    <input
                      type="text"
                      required
                      maxLength={120}
                      data-testid="contact-input-name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full px-4 py-3 bg-[#FAFAF8] border border-[#2C2B29]/15 focus:border-[#C05A45] focus:outline-none focus:ring-2 focus:ring-[#C05A45]/20 rounded-sm text-[#2C2B29]"
                      placeholder="Your full name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#5C5A56] font-semibold">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      data-testid="contact-input-email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-2 w-full px-4 py-3 bg-[#FAFAF8] border border-[#2C2B29]/15 focus:border-[#C05A45] focus:outline-none focus:ring-2 focus:ring-[#C05A45]/20 rounded-sm text-[#2C2B29]"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <label className="block mb-5">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#5C5A56] font-semibold">
                    I'm reaching out because…
                  </span>
                  <select
                    data-testid="contact-input-interest"
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="mt-2 w-full px-4 py-3 bg-[#FAFAF8] border border-[#2C2B29]/15 focus:border-[#C05A45] focus:outline-none focus:ring-2 focus:ring-[#C05A45]/20 rounded-sm text-[#2C2B29]"
                  >
                    {INTERESTS.map((i) => (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#5C5A56] font-semibold">
                    Your message
                  </span>
                  <textarea
                    rows={6}
                    required
                    maxLength={2000}
                    data-testid="contact-input-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full px-4 py-3 bg-[#FAFAF8] border border-[#2C2B29]/15 focus:border-[#C05A45] focus:outline-none focus:ring-2 focus:ring-[#C05A45]/20 rounded-sm text-[#2C2B29] resize-none"
                    placeholder="A few sentences is plenty."
                  />
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#C05A45] text-[#FAFAF8] hover:bg-[#A64A38] transition-colors duration-200 rounded-sm text-sm uppercase tracking-[0.15em] disabled:opacity-60"
                >
                  {submitting ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {submitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
