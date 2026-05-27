import { ScrollReveal } from './scroll-reveal';
import { Container } from './container';

const steps = [
  {
    n: '01',
    icon: '📁',
    title: 'Загрузите видео',
    body: 'Перетащите файл с нарезкой или записью матча в наше защищённое облако. MP4, MOV. До 500 MB.',
  },
  {
    n: '02',
    icon: '⚡',
    title: 'Анализ AI',
    body: 'Система анализирует скоростные, технические, физические и тактические показатели игрока в автоматическом режиме.',
  },
  {
    n: '03',
    icon: '📊',
    title: 'Результат',
    body: 'Мгновенный отчёт и ключевая метрика — TVS Index. Ваш точный ориентир на карте талантов.',
    greenWord: 'TVS Index',
  },
] as const;

export function HowSection() {
  return (
    <section
      id="how"
      className="py-[120px] max-[880px]:py-20"
      style={{
        background: 'var(--color-tv-mid)',
        borderTop: '1px solid var(--color-tv-border)',
        borderBottom: '1px solid var(--color-tv-border)',
      }}
    >
      <Container>
        <ScrollReveal className="mb-16">
          <div
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-green)' }}
          >
            Процесс
          </div>
          <h2
            className="leading-[0.95] tracking-[0.01em] mb-3"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(40px, 5vw, 70px)',
            }}
          >
            Как это
            <br />
            работает
          </h2>
          <p className="text-[16px] max-w-[380px] mt-3" style={{ color: 'var(--color-tv-muted)' }}>
            Никаких сложных анкет. Только ваш матч и наши алгоритмы.
          </p>
        </ScrollReveal>

        <div
          className="grid grid-cols-3 max-[880px]:grid-cols-1"
          style={{ border: '1px solid var(--color-tv-border)' }}
        >
          {steps.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 150}>
              <div
                className="px-10 py-12 relative overflow-hidden transition-colors group cursor-default"
                style={{
                  borderRight: i < steps.length - 1 ? '1px solid var(--color-tv-border)' : undefined,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: 'linear-gradient(90deg, var(--color-tv-green), transparent)' }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'var(--color-tv-green-subtle)' }}
                />
                <div
                  className="absolute top-4 right-5 leading-[1] z-0"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 64, color: 'rgba(0,232,122,0.05)' }}
                >
                  {step.n}
                </div>
                <div
                  className="w-11 h-11 flex items-center justify-center text-[18px] mb-6 relative z-[1]"
                  style={{ border: '1px solid var(--color-tv-border)' }}
                >
                  {step.icon}
                </div>
                <h3
                  className="text-[26px] tracking-[0.05em] mb-3 relative z-[1]"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.75] relative z-[1]" style={{ color: 'var(--color-tv-muted)' }}>
                  {step.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
