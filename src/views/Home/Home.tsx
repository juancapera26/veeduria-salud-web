import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HomeHero, AboutSections } from "../../components/home/HomeHeroSections";
import { FrameworkSection, RigorSection, PortfolioSection } from "../../components/home/HomeServicesSections";
import { AlliesSection, InstitutionalTags, MentalHealthCta, ParticipationSection, PqrsSection, ValueSection } from "../../components/home/HomeEngagementSections";

export default function Home() {
  return <div id="inicio" className="site-shell"><Navbar /><main><HomeHero /><AboutSections /><FrameworkSection /><RigorSection /><PortfolioSection /><MentalHealthCta /><ParticipationSection /><AlliesSection /><PqrsSection /><InstitutionalTags /><ValueSection /></main><Footer /></div>;
}
