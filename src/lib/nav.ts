export interface NavItem {
  id: string;
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'dashboard', href: '/dashboard', label: 'Dashboard' },
  { id: 'players', href: '/players', label: 'Players' },
  { id: 'scouting', href: '/scouting', label: 'Scouting' },
];
