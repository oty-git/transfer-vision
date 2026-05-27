const problems = [
  {
    icon: '🗺️',
    iconBg: 'rgba(192,57,43,0.1)',
    title: 'География',
    desc: 'Тысячи талантов остаются незамеченными из-за удалённости от скаутинговых сетей.',
  },
  {
    icon: '👁️',
    iconBg: 'rgba(74,144,217,0.1)',
    title: 'Субъективность',
    desc: 'Оценка зависит от личного мнения скаута, его настроения и ограниченного времени наблюдения.',
  },
  {
    icon: '🚪',
    iconBg: 'rgba(39,174,96,0.1)',
    title: 'Доступ',
    desc: 'Футбольные возможности не должны зависеть только от географии и личных связей.',
  },
  {
    icon: '📊',
    iconBg: 'rgba(243,156,18,0.1)',
    title: 'Масштаб',
    desc: 'Клубы не могут охватить весь рынок. Нужна цифровая инфраструктура идентификации.',
  },
] as const;

export function ProblemSection() {
  return (
    <div
      className="rounded-[4px] overflow-hidden mb-4"
      style={{ background: 'white', border: '1px solid #dde5ef' }}
    >
      {/* Block header */}
      <div style={{ background: '#1a2a3a', padding: '10px 16px' }}>
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
          Проблема традиционного скаутинга
        </h2>
      </div>

      {/* 2x2 grid */}
      <div className="grid grid-cols-2 max-[600px]:grid-cols-1">
        {problems.map((item, i) => (
          <div
            key={item.title}
            className="flex gap-3 items-start"
            style={{
              padding: 16,
              borderRight: i % 2 === 0 ? '1px solid #eef2f7' : 'none',
              borderBottom: i < 2 ? '1px solid #eef2f7' : 'none',
            }}
          >
            <div
              className="rounded-[4px] flex items-center justify-center shrink-0"
              style={{ width: 36, height: 36, background: item.iconBg, fontSize: 18 }}
            >
              {item.icon}
            </div>
            <div>
              <h4
                className="uppercase mb-1"
                style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#1a2a3a',
                  letterSpacing: '0.3px',
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: 12, color: '#8a9bb0', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
