import { Container } from './container';

export function LandingNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] py-6"
      style={{
        borderBottom: '1px solid var(--color-tv-border)',
        backdropFilter: 'blur(20px)',
        background: 'rgba(3,5,8,0.75)',
      }}
    >
      <Container className="flex items-center justify-between">
        <a
          href="#"
          className="no-underline tracking-[0.15em] text-[22px]"
          style={{ fontFamily: 'var(--font-bebas), sans-serif', color: 'var(--color-tv-white)' }}
        >
          Transfer<span style={{ color: 'var(--color-tv-green)' }}>Vision</span>
        </a>
        <span
          className="text-[11px] tracking-[0.12em] uppercase"
          style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-muted)' }}
        >
          Scouting Intelligence Service
        </span>
      </Container>
    </nav>
  );
}
