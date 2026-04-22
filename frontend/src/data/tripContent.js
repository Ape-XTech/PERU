// Static content for the Arequipa mission trip.
// Copy can be swapped out easily — the site is a resource hub for a team of
// volunteers, prospective volunteers, and donors.

export const TRIP_META = {
  destination: "Arequipa, Perú",
  tagline: "Serve in the shadow of El Misti.",
  dates: "June 14 — June 28, 2026",
  teamName: "Horizon Mission Team",
  sendingChurch: "Horizon Community Church",
  season: "Summer 2026",
};

export const HERO_STATS = [
  { label: "Days on the ground", value: "14" },
  { label: "Team members", value: "12" },
  { label: "Ministry partners", value: "3" },
  { label: "Elevation (m)", value: "2,335" },
];

export const ABOUT_POINTS = [
  {
    eyebrow: "The White City",
    title: "Built from sillar stone",
    body: "Arequipa's colonial core is carved from white volcanic rock, earning it the nickname La Ciudad Blanca. Its historic center is a UNESCO World Heritage site.",
  },
  {
    eyebrow: "Under three volcanoes",
    title: "El Misti, Chachani, Pichu Pichu",
    body: "The city sits in a high-desert valley ringed by volcanoes. Days are warm and bright; nights dip quickly. Pack layers.",
  },
  {
    eyebrow: "Language",
    title: "Spanish with Quechua roots",
    body: "Spanish is spoken everywhere. In neighboring highland communities you'll hear Quechua. We'll teach a handful of phrases before we go.",
  },
];

export const ITINERARY = [
  {
    day: "Day 01 — Sun, Jun 14",
    title: "Arrival & acclimation",
    body: "Fly into AQP via Lima. Settle into the guest house in Yanahuara, orientation dinner, early rest.",
  },
  {
    day: "Day 02 — Mon, Jun 15",
    title: "Team onboarding",
    body: "Cultural briefing with partner staff, walking tour of the historic center, Spanish basics session.",
  },
  {
    day: "Day 03–06",
    title: "Community construction project",
    body: "Work alongside Casa de Esperanza to finish a community kitchen in the Alto Cayma district.",
  },
  {
    day: "Day 07",
    title: "Sabbath & Colca Canyon",
    body: "A full rest day and a visit to Mirador Cruz del Cóndor — one of the deepest canyons in the world.",
  },
  {
    day: "Day 08–11",
    title: "Children's ministry & ESL",
    body: "Daily VBS at partner churches. Afternoons: conversational English workshops with local youth.",
  },
  {
    day: "Day 12",
    title: "Medical outreach",
    body: "Pop-up clinic day in a highland community. Team supports registration, pharmacy, and prayer station.",
  },
  {
    day: "Day 13",
    title: "Debrief & commissioning",
    body: "Team reflection, testimonies, worship night with partner churches.",
  },
  {
    day: "Day 14 — Sat, Jun 28",
    title: "Return home",
    body: "Early transfer to AQP airport. Fly Lima → home city. Re-entry packet delivered in-flight.",
  },
];

export const PACKING_LIST = {
  "Travel documents": [
    "Passport valid 6+ months past return",
    "Printed flight itinerary",
    "Travel insurance card",
    "Copy of vaccination record",
    "Emergency contact sheet",
  ],
  "Clothing (layers!)": [
    "Light sweater + fleece for evenings",
    "Comfortable work pants (2)",
    "Long-sleeve shirts (4)",
    "T-shirts (5)",
    "Sturdy closed-toe work shoes",
    "One set of nicer clothes for church",
  ],
  "Health & hygiene": [
    "Sunscreen SPF 50 (high-UV at altitude)",
    "Reusable water bottle (1L)",
    "Hand sanitizer + wet wipes",
    "Personal medications (in original packaging)",
    "Coca leaves / altitude tablets (we'll supply)",
  ],
  "Ministry items": [
    "Spanish/English Bible",
    "Journal + two pens",
    "Small gift from your home region",
    "Photos of family to share",
  ],
};

export const TEAM = [
  { name: "Marcus Oduya", role: "Team Lead", bio: "Pastor of missions, 4th trip to Perú.", initials: "MO" },
  { name: "Sarah Chen", role: "Construction Captain", bio: "General contractor, ESL tutor.", initials: "SC" },
  { name: "David Alvarez", role: "Translator", bio: "Heritage Spanish speaker, worship leader.", initials: "DA" },
  { name: "Priya Nair", role: "Medical Lead", bio: "RN, pediatrics.", initials: "PN" },
  { name: "Jonah Whitfield", role: "Kids Ministry", bio: "Youth pastor, first-time goer.", initials: "JW" },
  { name: "Leah Okonkwo", role: "Logistics", bio: "Ops manager, travel nerd.", initials: "LO" },
  { name: "Tomás Rivera", role: "Photographer", bio: "Storytelling the journey.", initials: "TR" },
  { name: "Hannah Park", role: "Prayer Coordinator", bio: "Keeps the team covered.", initials: "HP" },
];

export const FAQS = [
  {
    q: "Do I need to speak Spanish?",
    a: "No. Half the team doesn't. We'll hold three pre-trip language sessions covering essentials, and we travel with translators on every outreach.",
  },
  {
    q: "How much does the trip cost?",
    a: "Total cost per team member is $2,850 USD, covering airfare, lodging, meals, in-country transport, and project supplies. Most team members raise 70–100% through support letters.",
  },
  {
    q: "What vaccinations are required?",
    a: "Routine immunizations plus Hepatitis A, Typhoid, and Yellow Fever (if visiting jungle regions — we don't). Consult a travel clinic 6–8 weeks before departure.",
  },
  {
    q: "Is altitude a concern?",
    a: "Arequipa sits at 2,335m (7,660ft). Most people feel mild effects for 24–48 hours. We arrive with an intentional slow day and keep everyone hydrated.",
  },
  {
    q: "Can I bring my family?",
    a: "Applicants must be 16+. Families with teens often serve together — reach out to the team lead to talk logistics.",
  },
  {
    q: "What if I can't go but want to support?",
    a: "Pray, share the trip with others, or give toward a team member. Every dollar goes directly to the work on the ground.",
  },
];

export const GIVING_TIERS = [
  { amount: "$25", impact: "Feeds a child for a week at Casa de Esperanza." },
  { amount: "$75", impact: "Supplies one family's construction materials for a day." },
  { amount: "$250", impact: "Covers a single team member's in-country lodging week." },
  { amount: "$500", impact: "Funds the full medical outreach pop-up clinic." },
];
