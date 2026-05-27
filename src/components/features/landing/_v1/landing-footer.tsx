import { Container } from './container';

export function LandingFooter() {
  return (
    <footer
      className="py-12"
      style={{ borderTop: '1px solid var(--color-tv-border)' }}
    >
      <Container className="flex items-center justify-between max-[880px]:flex-col max-[880px]:gap-4 max-[880px]:text-center">
        <a
          href="#"
          className="no-underline tracking-[0.15em] text-[22px]"
          style={{ fontFamily: 'var(--font-bebas), sans-serif', color: 'var(--color-tv-white)' }}
        >
          Transfer<span style={{ color: 'var(--color-tv-green)' }}>Vision</span>
        </a>

        <p className="italic text-[14px]" style={{ color: 'var(--color-tv-muted)' }}>
          <span className="not-italic font-light" style={{ color: 'var(--color-tv-white)' }}>Transfer Vision</span>
          {' '}— Intelligence that moves careers.
        </p>

        <span
          className="text-[11px] tracking-[0.12em] uppercase"
          style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-muted)' }}
        >
          © 2026
        </span>
      </Container>
    </footer>
  );
}
