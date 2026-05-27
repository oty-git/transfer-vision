import { Container } from './container';

const navItems = [
  { label: 'TVS Index', active: true },
  { label: 'Digital Trial' },
  { label: 'Для клубов' },
  { label: 'Для игроков' },
  { label: 'Скауты' },
  { label: 'О системе' },
];

export function LandingNav() {
  return (
    <header
      className="sticky top-0 z-[100]"
      style={{
        background: '#1a2a3a',
        borderBottom: '3px solid #c0392b',
        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
      }}
    >
      <Container className="flex items-center gap-5" style={{ height: 58 }}>
        {/* Logo */}
        <a href="#" className="no-underline flex items-center gap-[10px] shrink-0">
          <div
            className="rounded-[4px] leading-none"
            style={{
              background: '#c0392b',
              padding: '6px 10px',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 15,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.5px',
            }}
          >
            TRANSFER
            <span className="block" style={{ fontSize: 11, fontWeight: 400, opacity: 0.85 }}>
              VISION
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 11,
              color: '#8a9bb0',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            Football Career Navigator
          </span>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-0.5 flex-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="no-underline rounded-[3px] whitespace-nowrap transition-all hover:!bg-[#c0392b] hover:!text-white"
              style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: 13,
                fontWeight: 500,
                color: '#d0dae6',
                padding: '6px 12px',
                letterSpacing: '0.3px',
                background: item.active ? '#c0392b' : 'transparent',
                ...(item.active && { color: 'white' }),
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex gap-2 ml-auto">
          <a
            href="#"
            className="no-underline rounded-[3px] transition-all hover:border-[#c0392b] hover:text-white"
            style={{
              padding: '6px 14px',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#d0dae6',
              border: '1px solid #2c4a6e',
              background: 'transparent',
            }}
          >
            Войти
          </a>
          <a
            href="#"
            className="no-underline rounded-[3px] transition-all hover:!bg-[#96281b]"
            style={{
              padding: '6px 14px',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'white',
              background: '#c0392b',
            }}
          >
            Загрузить матч
          </a>
        </div>
      </Container>
    </header>
  );
}
