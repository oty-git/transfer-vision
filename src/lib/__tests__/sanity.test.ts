import { describe, it, expect } from 'vitest';

describe('sanity', () => {
  it('arithmetic still works', () => {
    expect(1 + 1).toBe(2);
  });

  it('MSW intercepts fetch', async () => {
    const res = await fetch('/api/health');
    const data = (await res.json()) as { status: string };
    expect(data.status).toBe('ok');
  });
});
