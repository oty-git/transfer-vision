const btaRows = [
  {
    block: 'BKE 2.0',
    param: 'Биомеханика',
    score: 880,
    pct: 88,
    barClass: 'bar-elite',
    summary: '<strong>Элитный уровень.</strong> Уникальное сочетание роста (1.83 м) и низкого центра тяжести. Феноменальный баланс при резкой смене вектора.',
  },
  {
    block: 'TPA 2.0',
    param: 'Техника',
    score: 930,
    pct: 93,
    barClass: 'bar-elite',
    summary: '<strong>RTI — критически короткий.</strong> Минимум времени на подготовку к действию. Высокая культура паса в завершающей стадии.',
  },
  {
    block: 'CPS 2.0',
    param: 'Когниция',
    score: 860,
    pct: 86,
    barClass: 'bar-elite',
    summary: '<strong>Интеллект игры.</strong> Постоянное сканирование пространства. Нестандартные решения в условиях дефицита пространства.',
  },
  {
    block: 'CTI 2.0',
    param: 'Контекст',
    score: 920,
    pct: 92,
    barClass: 'bar-elite',
    summary: '<strong>Высший уровень сопротивления.</strong> Стабильная статистика в Лига 1 и решающее влияние в ЛЧ. Адаптация под любой стиль игры.',
    blue: true,
  },
] as const;

const verdicts = [
  {
    label: '✓ World Class Asset',
    color: '#27ae60',
    bg: 'rgba(39,174,96,0.06)',
    borderColor: 'rgba(39,174,96,0.25)',
    text: 'TVS 892 при возрасте 25 лет — маркер мирового класса. Техническая база (TPA) и биомеханика (BKE) делают игрока практически неуязвимым.',
  },
  {
    label: '⚡ Elite Sign-on — ВЫКУПАТЬ',
    color: '#27ae60',
    bg: 'rgba(39,174,96,0.06)',
    borderColor: 'rgba(39,174,96,0.25)',
    text: 'Безоговорочное подписание. Топ-5 мира на позиции. Оптимален для команд с изоляциями на флангах.',
  },
] as const;

export function TvsSection() {
  return (
    <div
      className="rounded-[4px] overflow-hidden mb-4"
      style={{ background: 'white', border: '1px solid #dde5ef' }}
    >
      {/* Block header — red */}
      <div
        className="flex items-center justify-between"
        style={{ background: '#c0392b', padding: '10px 16px' }}
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
          TVS Index — Пример расчёта (Khvicha Kvaratskhelia)
        </h2>
        <a href="#" style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
          Полный отчёт →
        </a>
      </div>

      <div style={{ padding: 16 }}>
        {/* TVS showcase: donut + table */}
        <div className="grid gap-5 items-start" style={{ gridTemplateColumns: '200px 1fr' }}>
          {/* Donut */}
          <div className="text-center">
            <div
              className="flex items-center justify-center mx-auto mb-3 relative"
              style={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                background: 'conic-gradient(#c0392b 0deg, #c0392b 216deg, #dde5ef 216deg)',
              }}
            >
              {/* White inner circle */}
              <div
                className="absolute rounded-full bg-white"
                style={{ width: 100, height: 100 }}
              />
              <div className="relative z-[1] text-center">
                <div
                  style={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontSize: 32,
                    fontWeight: 700,
                    color: '#1a2a3a',
                    lineHeight: 1,
                  }}
                >
                  892
                </div>
                <div style={{ fontSize: 10, color: '#8a9bb0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  TVS Index
                </div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#8a9bb0' }}>Возраст: 25 лет</div>
            <div style={{ fontSize: 12, color: '#8a9bb0' }}>Позиция: LW / Инсайд</div>
            <div style={{ fontSize: 12, color: '#27ae60', fontWeight: 700, marginTop: 6 }}>Пик карьеры</div>
          </div>

          {/* BTA table */}
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Блок', 'Параметр', 'Оценка / 1000', 'Аналитическое резюме'].map((th) => (
                    <th
                      key={th}
                      style={{
                        background: '#f0f4f8',
                        padding: '7px 10px',
                        textAlign: 'left',
                        fontFamily: 'var(--font-oswald), sans-serif',
                        fontSize: 11,
                        fontWeight: 600,
                        color: '#1a2a3a',
                        textTransform: 'uppercase',
                        letterSpacing: '0.3px',
                        borderBottom: '2px solid #dde5ef',
                      }}
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {btaRows.map((row) => (
                  <tr key={row.block} className="group">
                    <td style={{ padding: '8px 10px', borderBottom: '1px solid #eef2f7', fontSize: 12, verticalAlign: 'middle' }}>
                      <span
                        className="inline-block rounded-[2px]"
                        style={{
                          padding: '2px 7px',
                          fontFamily: 'var(--font-oswald), sans-serif',
                          fontSize: 11,
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.3px',
                          background: row.blue ? '#2c4a6e' : '#1a2a3a',
                          color: 'white',
                        }}
                      >
                        {row.block}
                      </span>
                    </td>
                    <td style={{ padding: '8px 10px', borderBottom: '1px solid #eef2f7', fontSize: 12, color: '#8a9bb0', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                      {row.param}
                    </td>
                    <td style={{ padding: '8px 10px', borderBottom: '1px solid #eef2f7', fontSize: 12, verticalAlign: 'middle', minWidth: 160 }}>
                      <div className="flex items-center gap-2">
                        <div
                          className="flex-1 rounded-[3px] overflow-hidden"
                          style={{ height: 6, background: '#eef2f7' }}
                        >
                          <div
                            className="h-full rounded-[3px]"
                            style={{
                              width: `${row.pct}%`,
                              background: 'linear-gradient(90deg, #27ae60, #2ecc71)',
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontFamily: 'var(--font-oswald), sans-serif',
                            fontSize: 13,
                            fontWeight: 700,
                            color: '#27ae60',
                            minWidth: 36,
                            textAlign: 'right',
                          }}
                        >
                          {row.score}
                        </span>
                      </div>
                    </td>
                    <td
                      style={{ padding: '8px 10px', borderBottom: '1px solid #eef2f7', fontSize: 11, color: '#8a9bb0', lineHeight: 1.5, verticalAlign: 'middle' }}
                      dangerouslySetInnerHTML={{ __html: row.summary.replace('<strong>', '<strong style="color:#1a2a3a">') }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Formula */}
            <div
              className="mt-3 rounded-[3px]"
              style={{ padding: 10, background: '#f0f4f8', fontSize: 11, color: '#8a9bb0' }}
            >
              <strong style={{ color: '#1a2a3a' }}>Base Score:</strong>{' '}
              (880+930+860+920)/4 = <strong style={{ color: '#1a2a3a' }}>897.5</strong>
              &nbsp;·&nbsp; K<sub>league</sub> 1.2 &nbsp;·&nbsp; K<sub>age</sub> 1.1 &nbsp;·&nbsp;
              K<sub>reliability</sub> 0.6 &nbsp;=&nbsp;
              <strong style={{ color: '#27ae60' }}>TVS 892</strong>
              &nbsp;·&nbsp; pTVS через 3 года: <strong style={{ color: '#4a90d9' }}>675</strong>
            </div>
          </div>
        </div>

        {/* Verdicts */}
        <div className="grid grid-cols-2 gap-3 mt-4 max-[600px]:grid-cols-1">
          {verdicts.map((v) => (
            <div
              key={v.label}
              className="rounded-[4px]"
              style={{ padding: 14, background: v.bg, border: `1px solid ${v.borderColor}` }}
            >
              <div
                className="flex items-center gap-[6px] mb-[6px]"
                style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: v.color,
                }}
              >
                {v.label}
              </div>
              <p style={{ fontSize: 12, color: '#8a9bb0', lineHeight: 1.5 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
