import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import AboutArequipa from "../components/site/AboutArequipa";
import Itinerary from "../components/site/Itinerary";
import PackingList from "../components/site/PackingList";
import TeamRoster from "../components/site/TeamRoster";
import PrayerWall from "../components/site/PrayerWall";
import FAQ from "../components/site/FAQ";
import Donate from "../components/site/Donate";
import ContactForm from "../components/site/ContactForm";
import Footer from "../components/site/Footer";

export default function Home() {
  return (
    <div data-testid="home-page" className="relative">
      <Navbar />
      <main>
        <Hero />
        <AboutArequipa />
        <Itinerary />
        <PackingList />
        <TeamRoster />
        <PrayerWall />
        <FAQ />
        <Donate />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
