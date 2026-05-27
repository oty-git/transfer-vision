const steps = [
  { n: 1, title: 'Загрузка видео', desc: 'Полный матч или хайлайты игрока' },
  { n: 2, title: 'Идентификация', desc: 'Система определяет действия игрока на поле' },
  { n: 3, title: 'AI + Скаут', desc: 'AI-метрики + экспертная футбольная оценка' },
  { n: 4, title: 'TVS Профиль', desc: 'Игрок получает Transfer Vision Score' },
  { n: 5, title: 'Подбор клуба', desc: 'Вход в скаутинговые базы и просмотры' },
] as const;

export function HowSection() {
  return (
    <div
      className="rounded-[4px] overflow-hidden mb-4"
      style={{ background: 'white', border: '1px solid #dde5ef' }}
    >
      {/* Block header */}
      <div
        className="flex items-center justify-between"
        style={{ background: '#1a2a3a', padding: '10px 16px' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: 14,
            fontWeight: 600,
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Как работает Transfer Vision
        </h2>
        <a href="#" style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
          Подробнее →
        </a>
      </div>

      {/* Steps grid */}
      <div className="grid max-[600px]:grid-cols-1" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
        {steps.map((step, i) => (
          <div
            key={step.n}
            className="relative text-center"
            style={{
              padding: '16px 12px',
              borderRight: i < steps.length - 1 ? '1px solid #dde5ef' : 'none',
            }}
          >
            {/* Circle number */}
            <div
              className="mx-auto mb-[10px] flex items-center justify-center rounded-full"
              style={{
                width: 32,
                height: 32,
                background: '#c0392b',
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: 14,
                fontWeight: 700,
                color: 'white',
              }}
            >
              {step.n}
            </div>

            <div
              className="mb-[6px] uppercase"
              style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: 12,
                fontWeight: 600,
                color: '#1a2a3a',
                letterSpacing: '0.3px',
              }}
            >
              {step.title}
            </div>
            <div style={{ fontSize: 11, color: '#8a9bb0', lineHeight: 1.5 }}>{step.desc}</div>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <span
                className="absolute"
                style={{
                  right: -8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#c0392b',
                  fontSize: 14,
                  zIndex: 1,
                }}
              >
                ›
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
