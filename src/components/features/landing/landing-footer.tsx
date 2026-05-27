import { Container } from './container';

const socials = [
  { label: 'ig', href: '#' },
  { label: 'yt', href: '#' },
  { label: 'tg', href: '#' },
];

const cols = [
  {
    heading: 'Игрокам',
    links: ['Загрузить матч', 'Пройти Digital Trial', 'Мой профиль TVS', 'Рассчитать TVS'],
  },
  {
    heading: 'Клубам и скаутам',
    links: ['Для клубов', 'Для скаутов и агентов', 'Стать партнером', 'API и интеграции'],
  },
  {
    heading: 'О системе',
    links: ['TVS Index', 'BTA Методология', 'Валидация', 'Контакты'],
  },
] as const;

export function LandingFooter() {
  return (
    <footer
      className="mt-[30px]"
      style={{ background: '#0d1821', borderTop: '3px solid #c0392b', padding: '24px 0 16px' }}
    >
      <Container>
        {/* Top grid */}
        <div
          className="grid gap-6 pb-5 mb-[14px] max-[900px]:grid-cols-2"
          style={{ gridTemplateColumns: '200px 1fr 1fr 1fr', borderBottom: '1px solid #1e3248' }}
        >
          {/* Brand */}
          <div>
            <div
              className="inline-block rounded-[3px] mb-[10px]"
              style={{
                background: '#c0392b',
                padding: '6px 10px',
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: 14,
                fontWeight: 700,
                color: 'white',
              }}
            >
              TRANSFER
              <span className="block" style={{ fontSize: 10, fontWeight: 400, opacity: 0.85 }}>
                VISION
              </span>
            </div>
            <p style={{ fontSize: 11, color: '#8a9bb0', lineHeight: 1.6 }}>
              Валидированная цифровая система футбольной идентификации. Пилотный проект совместно с ФК Реал Фарма Одесса.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h4
                className="mb-[10px] uppercase"
                style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'white',
                  letterSpacing: '0.5px',
                }}
              >
                {col.heading}
              </h4>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block no-underline mb-[5px] transition-colors hover:text-white"
                  style={{ fontSize: 12, color: '#8a9bb0' }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between" style={{ fontSize: 11, color: '#8a9bb0' }}>
          <span>© 2026 Transfer Vision · Football Career Navigator · Все права защищены</span>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center justify-center rounded-[3px] no-underline transition-colors hover:!bg-[#c0392b]"
                style={{ width: 20, height: 20, background: '#2c4a6e', fontSize: 10, color: 'white' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
