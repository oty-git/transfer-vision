import { LandingTopbar } from '@/components/features/landing/landing-topbar';
import { LandingNav } from '@/components/features/landing/landing-nav';
import { HeroSection } from '@/components/features/landing/hero-section';
import { SectionHeader } from '@/components/features/landing/section-header';
import { HowSection } from '@/components/features/landing/how-section';
import { TvsSection } from '@/components/features/landing/tvs-section';
import { ProblemSection } from '@/components/features/landing/problem-section';
import { LandingSidebar } from '@/components/features/landing/landing-sidebar';
import { LandingFooter } from '@/components/features/landing/landing-footer';
import { Container } from '@/components/features/landing/container';

export default function LandingPage() {
  return (
    <div className="landing-root">
      <LandingTopbar />
      <LandingNav />
      <HeroSection />
      <SectionHeader />

      {/* Main content + sidebar */}
      <Container className="py-5">
        <div
          className="grid gap-5 items-start max-[900px]:grid-cols-1"
          style={{ gridTemplateColumns: '1fr 300px' }}
        >
          {/* Content column */}
          <main>
            <HowSection />
            <TvsSection />
            <ProblemSection />
          </main>

          {/* Sidebar */}
          <LandingSidebar />
        </div>
      </Container>

      <LandingFooter />
    </div>
  );
}
