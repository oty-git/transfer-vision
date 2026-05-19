import { ScrollReveal } from './scroll-reveal';
import { Container } from './container';

const items = [
  {
    icon: '⚖️',
    title: 'Объективность',
    body: 'Цифры не имеют любимчиков. Только чистый перформанс и беспристрастный алгоритм.',
  },
  {
    icon: '⚡',
    title: 'Скорость',
    body: 'Оперативно получите расчёт индекса — никаких недель ожидания. Данные в ваших руках за минуты.',
  },
  {
    icon: '🌉',
    title: 'Доступность',
    body: 'Прямой мост между игроком и клубом. Ни агентов, ни посредников — только ваш талант.',
  },
];

export function WhySection() {
  return (
    <section
      id="why"
      className="py-[120px] max-[880px]:py-20"
      style={{
        background: 'var(--color-tv-mid)',
        borderTop: '1px solid var(--color-tv-border)',
      }}
    >
      <Container>
      <ScrollReveal>
        <div
          className="text-[11px] tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-green)' }}
        >
          Преимущества
        </div>
        <h2
          className="leading-[0.95] tracking-[0.01em]"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(40px, 5vw, 70px)',
          }}
        >
          Почему
          <br />
          Transfer Vision
        </h2>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <div
          className="grid grid-cols-3 max-[880px]:grid-cols-1"
          style={{ border: '1px solid var(--color-tv-border)' }}
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className="px-9 py-10 transition-colors cursor-default hover:bg-[rgba(0,232,122,0.03)]"
              style={{
                borderRight: i < items.length - 1 ? '1px solid var(--color-tv-border)' : undefined,
              }}
            >
              <span className="block text-[26px] mb-[18px]">{item.icon}</span>
              <h3
                className="text-[22px] tracking-[0.05em] mb-2.5"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                {item.title}
              </h3>
              <p className="text-[14px] leading-[1.7]" style={{ color: 'var(--color-tv-muted)' }}>{item.body}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
      </Container>
    </section>
  );
}
