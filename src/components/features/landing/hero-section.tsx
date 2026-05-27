import { Container } from './container';

const stats = [
  { label: 'Игрок', value: 'Khvicha Kvaratskhelia', color: undefined },
  { label: 'Позиция', value: 'LW / Инсайд', color: undefined },
  { label: 'Лига', value: 'Лига 1 / ЛЧ', color: undefined },
  { label: 'TVS Index', value: '892', color: '#27ae60' },
  { label: 'TPA (Техника)', value: '930', color: '#27ae60' },
  { label: 'BKE (Физика)', value: '880', color: '#27ae60' },
  { label: 'Вердикт', value: 'ВЫКУПАТЬ ✓', color: '#27ae60', small: true },
] as const;

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: '#0d1821',
        backgroundImage: `
          linear-gradient(135deg, rgba(192,57,43,0.15) 0%, transparent 60%),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(0deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 60px)
        `,
        padding: '48px 0 40px',
        borderBottom: '1px solid #1e3248',
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: -60,
          top: -60,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)',
        }}
      />

      <Container>
      <div className="relative grid gap-10 items-center grid-cols-[1fr_340px] max-[900px]:grid-cols-1">
        {/* Left — content */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-[6px] rounded-[20px] mb-4"
            style={{
              background: 'rgba(192,57,43,0.2)',
              border: '1px solid rgba(192,57,43,0.4)',
              padding: '4px 12px',
              fontSize: 11,
              fontWeight: 600,
              color: '#e87568',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            <span className="tm-pulse" style={{ fontSize: 8 }}>●</span>
            Пилотный проект · ФК Реал Фарма Одесса
          </div>

          {/* H1 */}
          <h1
            className="leading-[1.1] uppercase mb-3"
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 'clamp(28px, 4.5vw, 42px)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.5px',
            }}
          >
            Football Career
            <br />
            <em style={{ color: '#c0392b', fontStyle: 'normal' }}>Navigator</em>
          </h1>

          <p
            className="mb-6 max-w-[560px]"
            style={{ color: '#8a9bb0', fontSize: 15, lineHeight: 1.7 }}
          >
            Transfer Vision — валидированная цифровая система скаутинга нового поколения.
            Загрузите матч, получите TVS Index и войдите в международную скаутинговую сеть.
          </p>

          {/* Buttons */}
          <div className="flex gap-[10px] flex-wrap">
            {[
              { label: '▶ Загрузить матч', primary: true },
              { label: 'Пройти Digital Trial', primary: false },
              { label: 'Рассчитать TVS', primary: false },
            ].map((btn) => (
              <a
                key={btn.label}
                href="#"
                className="no-underline rounded-[4px] transition-all"
                style={{
                  padding: '10px 22px',
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  ...(btn.primary
                    ? {
                        background: '#c0392b',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(192,57,43,0.4)',
                      }
                    : {
                        background: 'transparent',
                        border: '1px solid #2c4a6e',
                        color: '#d0dae6',
                      }),
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — stats card */}
        <div
          className="rounded-[6px] overflow-hidden max-[900px]:hidden"
          style={{
            background: 'rgba(30,50,72,0.6)',
            border: '1px solid #2c4a6e',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Card header */}
          <div
            className="flex items-center justify-between"
            style={{ background: '#c0392b', padding: '10px 16px' }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: 13,
                fontWeight: 600,
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Пример — TVS Профиль
            </h3>
            <span
              className="rounded-[10px]"
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '2px 8px',
                fontSize: 10,
                color: 'white',
                fontWeight: 600,
              }}
            >
              LIVE
            </span>
          </div>

          {/* Rows */}
          <div style={{ padding: 16 }}>
            {stats.map((row, i) => (
              <div
                key={row.label}
                className="flex justify-between items-center"
                style={{
                  padding: '8px 0',
                  borderBottom: i < stats.length - 1 ? '1px solid rgba(74,144,217,0.15)' : 'none',
                }}
              >
                <span style={{ fontSize: 12, color: '#8a9bb0' }}>{row.label}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontSize: 'small' in row && row.small ? 11 : 16,
                    fontWeight: 700,
                    color: row.color ?? 'white',
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}
