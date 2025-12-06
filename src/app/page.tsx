import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LatestRoles from '@/components/LatestRoles';
import BenchmarkSection from '@/components/BenchmarkSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <LatestRoles />
      <BenchmarkSection />
      <Footer />
    </div>
  );
}
