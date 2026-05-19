import { ScrollReveal } from './scroll-reveal';
import { Container } from './container';

const rows = [
  { range: '850 – 1000', color: 'var(--color-tv-green)', badge: 'UCL Level', level: 'Мировые топ-клубы' },
  { range: '600 – 849', color: 'var(--color-tv-mint)', level: 'Высшие лиги Европы' },
  { range: '400 – 599', color: 'var(--color-tv-gold)', level: 'Профессиональный / Ротация' },
  { range: '0 – 399', color: 'var(--color-tv-muted)', level: 'Академический / Развитие' },
] as const;

export function IndexSection() {
  return (
    <section
      id="index"
      className="py-[120px] max-[880px]:py-20"
      style={{ background: 'var(--color-tv-black)' }}
    >
      <Container>
        <ScrollReveal>
          <div
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-green)' }}
          >
            Метрика
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2
            className="leading-[0.95] tracking-[0.01em]"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(40px, 5vw, 70px)',
            }}
          >
            TVS Index —
            <br />
            золотой стандарт
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-[1fr_1.15fr] gap-20 items-start mt-16 max-[880px]:grid-cols-1 max-[880px]:gap-12">
          <ScrollReveal>
            <div className="space-y-5 text-[16px] leading-[1.75]" style={{ color: 'var(--color-tv-muted-60)' }}>
              <p>
                Единая шкала от <span style={{ color: 'var(--color-tv-green)' }}>0 до 1000</span>, которая учитывает
                потенциал игрока относительно мировых топ-лиг.
              </p>
              <p>
                Цифры не имеют любимчиков. TVS Index — это{' '}
                <span style={{ color: 'var(--color-tv-green)' }}>объективный язык</span>, который понимают скауты по
                всему миру.
              </p>
              <p>Один показатель. Вся ваша карьера.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div
              className="overflow-hidden"
              style={{ border: '1px solid var(--color-tv-border)' }}
            >
              <div
                className="grid grid-cols-2 px-6 py-3.5"
                style={{
                  background: 'rgba(0,232,122,0.05)',
                  borderBottom: '1px solid var(--color-tv-border)',
                  fontFamily: 'var(--font-geist-mono), monospace',
                }}
              >
                <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--color-tv-muted)' }}>
                  Индекс
                </span>
                <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--color-tv-muted)' }}>
                  Уровень
                </span>
              </div>

              {rows.map((row) => (
                <div
                  key={row.range}
                  className="grid grid-cols-2 px-6 py-5 items-center transition-colors hover:bg-[rgba(255,255,255,0.02)]"
                  style={{ borderBottom: '1px solid var(--color-tv-border)' }}
                >
                  <div>
                    <div
                      className="text-[13px] font-bold"
                      style={{ fontFamily: 'var(--font-geist-mono), monospace', color: row.color }}
                    >
                      {row.range}
                    </div>
                    {'badge' in row && (
                      <div
                        className="inline-block text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 mt-1"
                        style={{
                          fontFamily: 'var(--font-geist-mono), monospace',
                          background: 'rgba(0,232,122,0.1)',
                          color: 'var(--color-tv-green)',
                          border: '1px solid rgba(0,232,122,0.2)',
                        }}
                      >
                        {(row as { badge: string }).badge}
                      </div>
                    )}
                  </div>
                  <div className="text-[13px]" style={{ color: 'var(--color-tv-muted-60)' }}>{row.level}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
