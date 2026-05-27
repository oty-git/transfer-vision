// ─── CTA Block ──────────────────────────────────────────────────────────────

function SidebarCta() {
  return (
    <div
      className="rounded-[4px] overflow-hidden relative mb-4 text-center"
      style={{
        background: 'linear-gradient(135deg, #1a2a3a 0%, #1e3248 100%)',
        padding: 20,
      }}
    >
      {/* Decorative circle */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ top: -30, right: -30, width: 120, height: 120, background: 'rgba(192,57,43,0.2)' }}
      />
      <h3
        className="relative uppercase mb-[6px]"
        style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 16,
          fontWeight: 700,
          color: 'white',
          letterSpacing: '0.5px',
        }}
      >
        Получите шанс
        <br />
        быть замеченным
      </h3>
      <p className="relative mb-[14px]" style={{ fontSize: 12, color: '#8a9bb0', lineHeight: 1.5 }}>
        Загрузите матч и войдите в международную экосистему футбольной идентификации.
      </p>
      <div className="flex flex-col gap-2 relative">
        {[
          { label: '▶ Загрузить матч', primary: true },
          { label: 'Пройти Digital Trial', primary: false },
          { label: 'Стать партнером', primary: false },
        ].map((btn) => (
          <a
            key={btn.label}
            href="#"
            className="block no-underline rounded-[3px] text-center transition-all"
            style={{
              padding: 9,
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              ...(btn.primary
                ? { background: '#c0392b', color: 'white' }
                : { background: 'transparent', border: '1px solid #2c4a6e', color: '#d0dae6' }),
            }}
          >
            {btn.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Player Card ─────────────────────────────────────────────────────────────

const miniStats = [
  { label: 'BKE (Физика)', value: '880', color: '#27ae60' },
  { label: 'TPA (Техника)', value: '930', color: '#27ae60' },
  { label: 'CPS (Когниция)', value: '860', color: '#27ae60' },
  { label: 'CTI (Контекст)', value: '920', color: '#27ae60' },
  { label: 'Рыночная стоимость', value: '90,00 млн €', color: undefined },
  { label: 'Фаза карьеры', value: 'Пик ↑', color: '#27ae60' },
] as const;

function PlayerCard() {
  return (
    <div
      className="rounded-[4px] overflow-hidden mb-4"
      style={{ background: 'white', border: '1px solid #dde5ef' }}
    >
      {/* Header */}
      <div
        style={{
          background: '#c0392b',
          padding: '8px 14px',
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 12,
          fontWeight: 600,
          color: 'white',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        Пример Digital Card
      </div>

      {/* Top section */}
      <div
        className="flex gap-3 items-start"
        style={{
          background: 'linear-gradient(135deg, #1a2a3a 0%, #1e3248 100%)',
          padding: 16,
          borderBottom: '3px solid #c0392b',
        }}
      >
        {/* Avatar */}
        <div
          className="rounded-full flex items-center justify-center shrink-0"
          style={{
            width: 64,
            height: 64,
            background: '#2c4a6e',
            border: '2px solid rgba(255,255,255,0.2)',
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: 22,
            fontWeight: 700,
            color: 'white',
          }}
        >
          KK
        </div>

        {/* Info */}
        <div className="flex-1">
          <div
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 18,
              fontWeight: 700,
              color: 'white',
              lineHeight: 1,
              marginBottom: 4,
            }}
          >
            Khvicha Kvaratskhelia
          </div>
          <span
            className="inline-block rounded-[2px] mb-2"
            style={{
              background: '#c0392b',
              padding: '2px 8px',
              fontSize: 11,
              fontWeight: 700,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            LW
          </span>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
            <span className="block mb-0.5">🇬🇪 Грузия · 25 лет</span>
            <span className="block">ПСЖ · Лига 1</span>
          </div>
        </div>

        {/* TVS badge */}
        <div
          className="flex flex-col items-center rounded-[4px]"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '8px 12px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 28,
              fontWeight: 700,
              color: '#f39c12',
              lineHeight: 1,
            }}
          >
            892
          </div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
            TVS
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: 12 }}>
        {miniStats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex justify-between"
            style={{
              padding: '5px 0',
              borderBottom: i < miniStats.length - 1 ? '1px solid #eef2f7' : 'none',
              fontSize: 12,
            }}
          >
            <span style={{ color: '#8a9bb0' }}>{stat.label}</span>
            <span
              style={{
                fontWeight: 700,
                color: stat.color ?? '#1a2a3a',
                fontFamily: 'var(--font-oswald), sans-serif',
              }}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Validation Status ────────────────────────────────────────────────────────

const validationItems = [
  { label: 'Партнёрство с ФК Реал Фарма Одесса', color: '#27ae60', glow: 'rgba(39,174,96,0.5)' },
  { label: 'Просмотры игроков — активно', color: '#27ae60', glow: 'rgba(39,174,96,0.5)' },
  { label: 'Скаутинговый анализ матчей', color: '#27ae60', glow: 'rgba(39,174,96,0.5)' },
  { label: 'Калибровка TVS методологии', color: '#f39c12', glow: 'rgba(243,156,18,0.5)' },
  { label: 'Расширение data-инфраструктуры', color: '#f39c12', glow: 'rgba(243,156,18,0.5)' },
  { label: 'Глобальные Digital Trials', color: '#4a90d9', glow: undefined },
] as const;

function ValidationStatus() {
  return (
    <div
      className="rounded-[4px] overflow-hidden mb-4"
      style={{ background: 'white', border: '1px solid #dde5ef' }}
    >
      <div
        style={{
          background: '#1a2a3a',
          padding: '8px 14px',
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 12,
          fontWeight: 600,
          color: 'white',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        Статус валидации
      </div>
      <ul style={{ listStyle: 'none', padding: 12, margin: 0 }}>
        {validationItems.map((item, i) => (
          <li
            key={item.label}
            className="flex items-center gap-2"
            style={{
              padding: '7px 0',
              borderBottom: i < validationItems.length - 1 ? '1px solid #eef2f7' : 'none',
              fontSize: 12,
              color: '#1a2a3a',
            }}
          >
            <span
              className="rounded-full shrink-0"
              style={{
                width: 8,
                height: 8,
                background: item.color,
                boxShadow: item.glow ? `0 0 6px ${item.glow}` : 'none',
              }}
            />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Global Reach ─────────────────────────────────────────────────────────────

const countries = [
  { flag: '🇳🇬', name: 'Нигерия' },
  { flag: '🇧🇷', name: 'Бразилия' },
  { flag: '🇺🇦', name: 'Украина' },
  { flag: '🇮🇳', name: 'Индия' },
  { flag: '🇺🇸', name: 'США' },
  { flag: '🌍', name: 'Африка' },
  { flag: '🌏', name: 'Азия' },
  { flag: '🌍', name: 'Вост. Европа' },
] as const;

function GlobalReach() {
  return (
    <div
      className="rounded-[4px] overflow-hidden mb-4"
      style={{ background: 'white', border: '1px solid #dde5ef' }}
    >
      <div
        style={{
          background: '#1a2a3a',
          padding: '8px 14px',
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 12,
          fontWeight: 600,
          color: 'white',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        Глобальный охват
      </div>
      <div style={{ padding: 12 }}>
        <div className="flex flex-wrap gap-1">
          {countries.map((c) => (
            <span
              key={c.name}
              className="flex items-center gap-1 rounded-[2px]"
              style={{
                background: '#f0f4f8',
                border: '1px solid #dde5ef',
                padding: '3px 8px',
                fontSize: 11,
                color: '#1a2a3a',
              }}
            >
              <span style={{ fontSize: 13 }}>{c.flag}</span>
              {c.name}
            </span>
          ))}
        </div>
        <p style={{ fontSize: 11, color: '#8a9bb0', marginTop: 10, lineHeight: 1.5 }}>
          Футбольные возможности не должны зависеть от географии.
        </p>
      </div>
    </div>
  );
}

// ─── Sidebar (composite) ──────────────────────────────────────────────────────

export function LandingSidebar() {
  return (
    <aside>
      <SidebarCta />
      <PlayerCard />
      <ValidationStatus />
      <GlobalReach />
    </aside>
  );
}
