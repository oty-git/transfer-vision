import { Container } from './container';

const tabs = [
  { label: 'Обзор', active: true },
  { label: 'Как работает' },
  { label: 'Для клубов' },
  { label: 'Digital Trial' },
];

export function SectionHeader() {
  return (
    <div
      className="py-[10px]"
      style={{ background: 'white', borderBottom: '1px solid #dde5ef' }}
    >
      <Container className="flex items-center justify-between">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-[6px]" style={{ fontSize: 12, color: '#8a9bb0' }}>
          <a href="#" style={{ color: '#4a90d9', textDecoration: 'none' }}>Transfer Vision</a>
          <span style={{ color: '#d0dae6' }}>›</span>
          <span>TVS System</span>
          <span style={{ color: '#d0dae6' }}>›</span>
          <span>Пилотный проект 2026</span>
        </nav>

        {/* Tabs */}
        <div className="flex">
          {tabs.map((tab, i) => (
            <a
              key={tab.label}
              href="#"
              className="no-underline transition-all"
              style={{
                padding: '6px 14px',
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: 12,
                fontWeight: 500,
                color: tab.active ? 'white' : '#8a9bb0',
                textTransform: 'uppercase',
                letterSpacing: '0.3px',
                background: tab.active ? '#c0392b' : 'white',
                border: '1px solid #dde5ef',
                borderRight: i < tabs.length - 1 ? 'none' : '1px solid #dde5ef',
                borderRadius:
                  i === 0 ? '3px 0 0 3px' : i === tabs.length - 1 ? '0 3px 3px 0' : 0,
                ...(tab.active && { borderColor: '#c0392b' }),
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
