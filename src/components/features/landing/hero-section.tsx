'use client';
import { useEffect, useRef } from 'react';
import { Container } from './container';

export function HeroSection() {
  const numRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const target = 872;
    let start: number | null = null;
    let cancelled = false;
    function count(ts: number) {
      if (cancelled) return;
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el!.textContent = String(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(count);
    }
    const timer = setTimeout(() => requestAnimationFrame(count), 500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      className="min-h-screen pt-[120px] pb-20 relative overflow-hidden"
      style={{ background: 'var(--color-tv-black)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(90deg, var(--color-tv-border) 1px, transparent 1px),
            linear-gradient(180deg, var(--color-tv-border) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 100% 50%, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 100% 50%, black 30%, transparent 70%)',
        }}
      />

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          right: -100,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, var(--color-tv-green-glow) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-[1] grid grid-cols-2 items-center max-[880px]:grid-cols-1">

      {/* Content */}
      <div className="tv-fade-up tv-visible">
        <div
          className="text-[11px] tracking-[0.2em] uppercase mb-7 flex items-center gap-3"
          style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-green)' }}
        >
          <span className="inline-block w-8 h-px" style={{ background: 'var(--color-tv-green)' }} />
          Boutique AI Scouting
        </div>

        <h1
          className="leading-[0.92] tracking-[-0.01em] mb-8"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(60px, 7vw, 108px)',
          }}
        >
          Google Maps
          <br />
          <span style={{ color: 'var(--color-tv-green)' }}>Футбольных</span>
          <br />
          <span style={{ color: 'var(--color-tv-muted)' }}>Талантов</span>
        </h1>

        <p
          className="text-[17px] leading-[1.65] max-w-[460px] mb-12"
          style={{ color: 'var(--color-tv-muted-60)' }}
        >
          Превращаем видео в точные данные за минуты. Ваш матч — наши алгоритмы — ваш путь в большой футбол.
        </p>

        <div className="flex gap-4 items-center">
          <button
            type="button"
            className="font-medium text-[13px] tracking-[0.08em] uppercase border-none px-10 py-[18px] cursor-pointer transition-all hover:-translate-y-0.5"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              background: 'var(--color-tv-green)',
              color: 'var(--color-tv-black)',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-tv-green-hover)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-tv-green)')}
            onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Загрузить видео
          </button>
          <button
            type="button"
            className="bg-transparent text-[11px] tracking-[0.1em] border px-7 py-[18px] cursor-pointer transition-all"
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              color: 'var(--color-tv-white)',
              borderColor: 'var(--color-tv-border)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(240,237,232,0.3)';
              e.currentTarget.style.color = 'var(--color-tv-green)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-tv-border)';
              e.currentTarget.style.color = 'var(--color-tv-white)';
            }}
            onClick={() => document.getElementById('index')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Что такое TVS Index?
          </button>
        </div>
      </div>

      {/* Visual */}
      <div
        className="flex justify-center items-center tv-fade-up tv-visible max-[880px]:-order-1"
        style={{ transitionDelay: '200ms' }}
      >
        <div
          className="tv-spin"
          style={{
            width: 380,
            height: 380,
            border: '1px solid rgba(0,232,122,0.18)',
            borderRadius: '50%',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 22,
              border: '1px solid rgba(0,232,122,0.09)',
              borderRadius: '50%',
            }}
          />
          {/* Orbit dots */}
          {[
            { top: -4, left: '50%', transform: 'translateX(-50%)' },
            { bottom: 30, right: -4 },
            { left: -4, top: '55%' },
          ].map((style, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{ ...style, background: 'var(--color-tv-green)', boxShadow: '0 0 12px rgba(0,232,122,0.9)' }}
            />
          ))}
        </div>

        {/* Center score */}
        <div className="absolute text-center">
          <div
            ref={numRef}
            className="leading-[1] tracking-[-0.02em] tv-glow-pulse"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 88,
              color: 'var(--color-tv-green)',
              textShadow: '0 0 80px rgba(0,232,122,0.45)',
            }}
          >
            0
          </div>
          <div
            className="text-[11px] tracking-[0.25em] uppercase mt-1"
            style={{ fontFamily: 'var(--font-geist-mono), monospace', color: 'var(--color-tv-muted)' }}
          >
            TVS Index
          </div>
          <div className="text-[12px] mt-1.5 italic" style={{ color: 'rgba(0,232,122,0.6)' }}>
            UCL Level ↑
          </div>
        </div>
      </div>

      </Container>
    </section>
  );
}
