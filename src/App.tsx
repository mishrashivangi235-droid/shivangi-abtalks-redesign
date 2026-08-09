import { useRouter, BottomNav, PageTransition } from '@/components/Router';
import { LandingPage } from '@/pages/LandingPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { DayPage } from '@/pages/DayPage';

function App() {
  const { path, params, navigate } = useRouter();

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[390px] bg-ink-950">
      {/* ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-purple/10 blur-[100px]" />
      </div>

      <div className="relative z-10 pb-24">
        <PageTransition key={path}>
          {path === '/' && <LandingPage navigate={navigate} />}
          {path === '/dashboard' && <DashboardPage navigate={navigate} />}
          {path === '/day/:id' && <DayPage dayId={params.id} navigate={navigate} />}
        </PageTransition>
      </div>

      <BottomNav currentPath={path} navigate={navigate} />
    </div>
  );
}

export default App;
