import { ScrollReveal } from './scroll-reveal';
import { Container } from './container';

const cards = [
  {
    tag: '// Онлайн Trial',
    icon: '🌐',
    title: 'Онлайн просмотр\nв клуб',
    body: 'Мы сопоставляем ваш рейтинг с актуальными запросами селекционеров. Если ваш индекс соответствует требованиям — анкета уходит в скаутинговый отдел напрямую.',
  },
  {
    tag: '// Official Invite',
    icon: '🏆',
    title: 'Приглашение\nна просмотр',
    body: 'Игроки с высшим баллом получают официальный Invite на очный просмотр в партнёрские академии и клубы мира.',
  },
];

export function PathSection() {
  return (
    <section
      id="path"
      className="py-[120px] max-[880px]:py-20"
      style={{
        background: 'var(--color-tv-mid)',
        borderTop: '1px solid var(--color-tv-border)',
        borderBottom: '1px solid var(--color-tv-border)',
      }}
    >
      <Container>
      <ScrollReveal>
        <div
          className="text-[11px] tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-green)' }}
        >
          Возможности
        </div>
        <h2
          className="leading-[0.95] tracking-[0.01em]"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(40px, 5vw, 70px)',
          }}
        >
          Ваш путь
          <br />в большой футбол
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-6 mt-16 max-[880px]:grid-cols-1 items-stretch">
        {cards.map((card, i) => (
          <ScrollReveal key={card.tag} delay={i * 150} className="h-full">
            <div
              className="h-full p-12 relative overflow-hidden transition-all hover:-translate-y-1 cursor-default border border-[rgba(240,237,232,0.08)] hover:border-[rgba(0,232,122,0.2)]"
            >
              {/* Bottom gradient line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, var(--color-tv-green), transparent)' }}
              />

              <div
                className="text-[10px] tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-green)' }}
              >
                {card.tag}
              </div>

              <div
                className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center text-[20px]"
                style={{ border: '1px solid var(--color-tv-border)' }}
              >
                {card.icon}
              </div>

              <h3
                className="text-[34px] tracking-[0.05em] mb-4 whitespace-pre-line"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.75]" style={{ color: 'var(--color-tv-muted)' }}>
                {card.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      </Container>
    </section>
  );
}
