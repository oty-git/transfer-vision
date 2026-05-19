# App Shell і Sidebar

Документація того, що і чому було зроблено при побудові app shell та навігації.

---

## 1. Route Groups

Next.js App Router дозволяє групувати роути через папки в дужках `(name)` — вони **не впливають на URL**, але дають кожній групі свій `layout.tsx`.

```
app/
├── (public)/page.tsx      → URL: /        (лендинг, без sidebar)
├── (app)/layout.tsx       → URL: /*/      (sidebar + main для всього всередині)
│   ├── dashboard/page.tsx → URL: /dashboard
│   ├── players/page.tsx   → URL: /players
│   └── scouting/page.tsx  → URL: /scouting
└── layout.tsx             → Root (html, body, шрифти, Providers)
```

**Навіщо дві зони:**
- `(public)` — сторінки без авторизації (лендинг, логін, реєстрація). Немає sidebar, немає app-навігації.
- `(app)` — authenticated shell. Sidebar з'являється автоматично для кожного нового роуту всередині групи.

---

## 2. Providers — межа Server/Client

Root layout — Server Component. Провайдери (TanStack Query, Redux) вимагають `"use client"` — їм потрібен React context.

**Рішення:** окремий `providers.tsx` з `"use client"`:

```tsx
// app/providers.tsx — Client Component
'use client';
export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ReduxProvider>
  );
}

// app/layout.tsx — Server Component (без 'use client')
import { Providers } from './providers';
export default function RootLayout({ children }) {
  return <html><body><Providers>{children}</Providers></body></html>;
}
```

**Правило:** Server Component може імпортувати Client Component. Client Component НЕ може імпортувати Server Component (лише через `children` prop).

**Чому `useState(() => new QueryClient())`:** фабрика гарантує що кожен рендер компонента отримує свій екземпляр QueryClient. Це захист від sharing стейту між запитами при SSR.

---

## 3. Dynamic params — breaking change Next.js 15+

```tsx
// ❌ до Next.js 15
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
}

// ✅ Next.js 15+
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
}
```

`params` і `searchParams` стали асинхронними — потрібен `await`.

---

## 4. Sidebar — Active Navigation

`usePathname()` з `next/navigation` повертає поточний URL pathname. Використовується для визначення активного пункту меню.

```tsx
'use client'; // потрібен — usePathname це хук

const pathname = usePathname();
const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
```

**Чому `startsWith(item.href + '/')` а не просто `startsWith(item.href)`:**
`/dashboard` без слешу в кінці матчить `/dashboard-settings`. З `/` — матчить тільки вкладені роути: `/dashboard/stats`, `/dashboard/overview`.

**Де живе `"use client"`:** тільки в `Sidebar`, не в `(app)/layout.tsx`. Layout залишається Server Component — він просто рендерить `<Sidebar items={navItems} />` як child. Це важливо: `"use client"` розповсюджується тільки на модуль де воно оголошено і його імпорти, але не вгору по дереву.

---

## 5. Server/Client boundary — що можна передавати як пропси

**Проблема:** `(app)/layout.tsx` — Server Component. `<Sidebar />` — Client Component. Пропси серіалізуються через межу.

```tsx
// ❌ ПОМИЛКА — функції не серіалізуються
const navItems = [
  { id: 'dashboard', icon: LayoutDashboard }  // ← LucideIcon — це функція
];
<Sidebar items={navItems} />
// Error: Functions cannot be passed directly to Client Components
```

```tsx
// ✅ ПРАВИЛЬНО — тільки серіалізовані дані через межу
// nav.ts
export const navItems = [
  { id: 'dashboard', href: '/dashboard', label: 'Dashboard' }  // тільки рядки
];

// sidebar.tsx (Client Component) — іконки всередині
const ICON_MAP: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  players: Users,
  scouting: Crosshair,
};
const Icon = ICON_MAP[item.id]; // функції залишаються на клієнті
```

**Правило:** через Server → Client межу — тільки `string`, `number`, `boolean`, plain objects, масиви. Функції, класи, React-компоненти — заборонено.

---

## 6. LucideIcon — динамічний рендер

```tsx
// ❌ JSX не вміє рендерити lowercase пропси як компоненти
<item.icon />  // React сприймає як HTML-тег

// ✅ Присвоєння до змінної з великої літери
const Icon = ICON_MAP[item.id];
<Icon className="h-4 w-4 shrink-0" />
```

---

## 7. Single source of truth для навігації

`navItems` визначений в `src/lib/nav.ts` і імпортується скрізь де потрібен. Якщо `navItems` дублювати в кількох файлах — при додаванні нового розділу потрібно міняти в кількох місцях.

```
src/lib/nav.ts          ← єдине місце визначення
  ↓ import
app/(app)/layout.tsx    ← Server Component, передає як пропси
app/(public)/page.tsx   ← тимчасово для dev (прибрати після auth)
  ↓ import
components/features/sidebar.tsx ← Client Component, рендерить
```

---

## Файли створені / змінені

| Файл | Що зробили |
|------|-----------|
| `src/app/(public)/page.tsx` | Landing placeholder (тимчасово з Sidebar для dev) |
| `src/app/(app)/layout.tsx` | App shell: Sidebar + main |
| `src/app/(app)/dashboard/page.tsx` | Placeholder |
| `src/app/(app)/players/page.tsx` | Placeholder |
| `src/app/(app)/players/[id]/page.tsx` | Dynamic route з async params |
| `src/app/(app)/scouting/page.tsx` | Placeholder |
| `src/app/layout.tsx` | Root layout з Providers |
| `src/app/providers.tsx` | TanStack Query + Redux провайдери |
| `src/store/index.ts` | RTK store + RootState/AppDispatch типи |
| `src/store/hooks.ts` | useAppDispatch, useAppSelector |
| `src/lib/nav.ts` | Серіалізована навігаційна конфігурація |
| `src/components/features/sidebar.tsx` | Sidebar з active nav + ICON_MAP |
