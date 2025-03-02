// src/app/page.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntegrationLogos from './components/IntegrationLogos';
import AdvancedAnimatedGradient from './components/AnimatedGradient';
import DashboardPreview from './components/DashboardPreview';
import PowerfulDashboards from './components/PowerfulDashboards';
import ApiSection from './components/ApiSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AdvancedAnimatedGradient>
        <Navbar />
        <Hero />
      </AdvancedAnimatedGradient>

      <div className="bg-[#0a0c10]">
        <IntegrationLogos />
        <DashboardPreview />
        <PowerfulDashboards />
        <ApiSection />
        <FAQ/>
        <Footer />
      </div>
      
    </main>
  );
}
