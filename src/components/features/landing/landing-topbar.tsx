import { Container } from './container';

const links = ['Игроки', 'Клубы', 'Скауты', 'Digital Trial', 'Новости'];
const socials = [
  { label: 'ig', href: '#' },
  { label: 'yt', href: '#' },
  { label: 'tg', href: '#' },
];

export function LandingTopbar() {
  return (
    <div
      className="py-[5px]"
      style={{
        background: '#0d1821',
        color: '#8a9bb0',
        fontSize: 11,
        borderBottom: '1px solid #2a3f55',
      }}
    >
      <Container className="flex justify-between items-center">
        <div className="flex gap-4">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="no-underline transition-colors hover:text-white"
              style={{ color: '#8a9bb0' }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-[10px] items-center">
          <span>Следите за нами:</span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center justify-center rounded-[3px] no-underline transition-colors hover:!bg-[#c0392b]"
              style={{
                width: 20,
                height: 20,
                background: '#2c4a6e',
                fontSize: 10,
                color: 'white',
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
