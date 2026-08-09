import { useEffect, useState, useCallback, type ReactNode } from 'react';
import { Home, LayoutDashboard, Calendar } from 'lucide-react';

interface RouteState {
  path: string;
  params: Record<string, string>;
}

function parsePath(path: string): RouteState {
  // /day/12 -> { path: '/day/:id', params: { id: '12' } }
  const dayMatch = path.match(/^\/day\/(\d+)$/);
  if (dayMatch) {
    return { path: '/day/:id', params: { id: dayMatch[1] } };
  }
  return { path, params: {} };
}

export function useRouter() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === window.location.pathname) return;
    window.history.pushState({}, '', to);
    setPathname(to);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return { ...parsePath(pathname), navigate };
}

interface NavItem {
  label: string;
  icon: typeof Home;
  path: string;
  match: (p: string) => boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', icon: Home, path: '/', match: (p) => p === '/' },
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', match: (p) => p === '/dashboard' },
  { label: 'Day 12', icon: Calendar, path: '/day/12', match: (p) => p.startsWith('/day/') },
];

export function BottomNav({ currentPath, navigate }: { currentPath: string; navigate: (to: string) => void }) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[390px]">
      <div className="glass border-t border-neon-purple/20 px-2 pb-5 pt-2 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const active = item.match(currentPath);
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="group relative flex flex-col items-center gap-1 px-4 py-1.5 transition-all"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
                    active
                      ? 'bg-neon-purple/20 text-neon-purple shadow-glow-sm'
                      : 'text-gray-500 group-hover:text-gray-300'
                  }`}
                >
                  <Icon size={20} strokeWidth={active ? 2.4 : 2} />
                </div>
                <span
                  className={`text-[10px] font-medium tracking-wide transition-colors ${
                    active ? 'text-neon-purple' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </span>
                {active && (
                  <span className="absolute -top-0.5 h-1 w-1 rounded-full bg-neon-purple shadow-glow-sm" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="animate-fade-in">{children}</div>;
}
