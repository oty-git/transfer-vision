import { LandingNav } from '@/components/features/landing/landing-nav';
import { HeroSection } from '@/components/features/landing/hero-section';
import { HowSection } from '@/components/features/landing/how-section';
import { IndexSection } from '@/components/features/landing/index-section';
import { PathSection } from '@/components/features/landing/path-section';
import { UploadSection } from '@/components/features/landing/upload-section';
import { WhySection } from '@/components/features/landing/why-section';
import { LandingFooter } from '@/components/features/landing/landing-footer';

export default function LandingPage() {
  return (
    <div className="landing-root">
      <LandingNav />
      <HeroSection />
      <HowSection />
      <IndexSection />
      <PathSection />
      <UploadSection />
      <WhySection />
      <LandingFooter />
    </div>
  );
}
