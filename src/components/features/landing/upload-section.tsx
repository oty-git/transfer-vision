'use client';
import { useRef, useState } from 'react';
import { ScrollReveal } from './scroll-reveal';
import { Container } from './container';

export function UploadSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  function handleFile(file: File) {
    if (!file.type.startsWith('video/')) {
      setStatus('✗ Поддерживаются только видеофайлы (MP4, MOV)');
      return;
    }
    const mb = (file.size / 1024 / 1024).toFixed(1);
    setStatus(`✓ ${file.name} · ${mb} MB — готово к анализу`);
    setUploaded(true);
  }

  return (
    <section
      id="upload"
      className="py-[120px] max-[880px]:py-20"
      style={{ background: 'var(--color-tv-black)' }}
    >
      <Container className="text-center">
      <ScrollReveal>
        <div
          className="text-[11px] tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-green)' }}
        >
          Начать
        </div>
        <h2
          className="leading-[0.95] tracking-[0.01em] mb-4"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(40px, 5vw, 70px)',
          }}
        >
          Готовы проверить
          <br />
          уровень?
        </h2>
        <p className="text-[16px] mb-14" style={{ color: 'var(--color-tv-muted)' }}>
          Загрузите видео — получите ваш TVS Index
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div
          className="max-w-[660px] mx-auto mb-10 px-12 py-[72px] cursor-pointer transition-all"
          style={{
            border: isDragOver
              ? '1px dashed var(--color-tv-green)'
              : '1px dashed rgba(0,232,122,0.25)',
            background: isDragOver ? 'rgba(0,232,122,0.08)' : 'rgba(0,232,122,0.02)',
            boxShadow: isDragOver ? '0 0 60px rgba(0,232,122,0.08) inset' : 'none',
          }}
          onClick={() => inputRef.current?.click()}
          onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={e => {
            e.preventDefault();
            setIsDragOver(false);
            const file = e.dataTransfer.files[0];
            if (file) handleFile(file);
          }}
        >
          <span
            className="block text-[36px] mb-5 transition-all"
            style={{
              opacity: isDragOver || uploaded ? 1 : 0.5,
              transform: isDragOver ? 'translateY(-4px)' : 'none',
            }}
          >
            {uploaded ? '✅' : '📁'}
          </span>
          <h3
            className="text-[26px] tracking-[0.05em] mb-2.5"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            {uploaded ? 'Файл загружен' : 'Перетащите видео сюда'}
          </h3>
          <p
            className="text-[11px] tracking-[0.1em]"
            style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-muted)' }}
          >
            или нажмите для выбора файла
          </p>
          <p
            className="text-[11px] tracking-[0.1em] mt-3"
            style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-muted)' }}
          >
            MP4, MOV&nbsp;·&nbsp;Макс. 500 MB
          </p>
          <input
            ref={inputRef}
            type="file"
            accept=".mp4,.mov,video/*"
            className="hidden"
            onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }}
          />
        </div>
      </ScrollReveal>

      {status && (
        <p
          className="text-[12px] tracking-[0.1em] mb-6 min-h-5"
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            color: status.startsWith('✗') ? '#ff4d4d' : 'var(--color-tv-green)',
          }}
        >
          {status}
        </p>
      )}

      <ScrollReveal>
        {/* TEMP: button is a UI demo — wire up real upload handler when backend is ready */}
        <button
          type="button"
          disabled={!uploaded}
          className="font-medium text-[13px] tracking-[0.08em] uppercase border-none px-10 py-[18px] cursor-pointer transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            background: 'var(--color-tv-green)',
            color: 'var(--color-tv-black)',
            clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
          }}
          onMouseEnter={e => { if (uploaded) e.currentTarget.style.background = 'var(--color-tv-green-hover)'; }}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-tv-green)')}
        >
          Загрузить и получить TVS Index
        </button>
      </ScrollReveal>
      </Container>
    </section>
  );
}
