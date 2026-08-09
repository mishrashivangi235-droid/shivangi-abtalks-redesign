import { useState } from 'react';
import { Flame, TrendingUp, ArrowRight, Lock, Sparkles, Calendar, CheckCircle2, AlertTriangle, Rocket } from 'lucide-react';
import { SectionCard, NeonButton, Pill } from '@/components/ui';
import { VibeCheck } from '@/components/VibeCheck';
import { dashboardStates, badges, todayTask, type StudentState } from '@/data/mockData';

const stateToggles: { key: StudentState; label: string }[] = [
  { key: 'active', label: 'Active Streak Student' },
  { key: 'new', label: 'New Student (No Streak)' },
  { key: 'missed', label: 'Missed Day State' },
];

export function DashboardPage({ navigate }: { navigate: (to: string) => void }) {
  const [state, setState] = useState<StudentState>('active');
  const data = dashboardStates[state];

  return (
    <div className="px-5 pt-14 pb-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Welcome back,</p>
          <h1 className="font-display text-xl font-bold text-white">Alex Rivera</h1>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple to-neon-violet text-sm font-bold text-white shadow-glow-sm">
          AR
        </div>
      </div>

      {/* State toggles for judges */}
      <div className="mb-5">
        <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
          <Sparkles size={11} /> Demo state — tap to preview
        </p>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {stateToggles.map((t) => (
            <button
              key={t.key}
              onClick={() => setState(t.key)}
              className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-medium transition-all ${
                state === t.key
                  ? 'bg-neon-purple text-white shadow-glow-sm'
                  : 'bg-white/5 text-gray-400 ring-1 ring-white/10 hover:bg-white/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Streak hero card */}
      <StreakCard state={state} streak={data.streak} longest={data.longestStreak} statusLabel={data.statusLabel} />

      {/* Progress overview */}
      <SectionCard className="mt-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-neon-electric" />
            <p className="text-sm font-semibold text-white">Overall Progress</p>
          </div>
          <span className="font-display text-lg font-bold text-white">{data.completionPct}%</span>
        </div>
        <ProgressBar pct={data.completionPct} />
        <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
          <span>{data.completedDays} of {data.totalDays} days complete</span>
          <span>{data.totalDays - data.completedDays} to go</span>
        </div>
      </SectionCard>

      {/* Today's task */}
      <SectionCard className="mt-4">
        <div className="mb-2 flex items-center justify-between">
          <Pill className="border border-neon-purple/30 bg-neon-purple/10 text-neon-purple">
            <Calendar size={10} /> Day {todayTask.day}
          </Pill>
          <span className="text-[10px] text-gray-500">{todayTask.estimatedMinutes} min</span>
        </div>
        <h3 className="font-display text-base font-bold text-white">{todayTask.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-gray-400">
          {todayTask.description}
        </p>
        <NeonButton
          variant="outline"
          onClick={() => navigate('/day/12')}
          className="mt-3 flex items-center justify-center gap-2 py-2.5 text-xs"
        >
          Open Day {todayTask.day} <ArrowRight size={14} />
        </NeonButton>
      </SectionCard>

      {/* Vibe Check */}
      <div className="mt-4">
        <VibeCheck state={state} />
      </div>

      {/* Badges */}
      <section className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-white">Achievements</h2>
          <span className="text-[11px] text-gray-500">
            {badges.filter((b) => b.earned).length}/{badges.length} earned
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className={`relative flex flex-col items-center rounded-xl p-3 text-center transition-all ${
                  badge.earned
                    ? 'glass ring-1 ring-neon-purple/20'
                    : 'bg-white/[0.02] ring-1 ring-white/5 opacity-50'
                }`}
              >
                {badge.earned ? (
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${badge.color} shadow-glow-sm`}>
                    <Icon size={18} className="text-white" />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                    <Lock size={14} className="text-gray-600" />
                  </div>
                )}
                <p className="mt-2 text-[10px] font-semibold leading-tight text-gray-300">{badge.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function StreakCard({
  state,
  streak,
  longest,
  statusLabel,
}: {
  state: StudentState;
  streak: number;
  longest: number;
  statusLabel: string;
}) {
  const isActive = state === 'active';
  const isNew = state === 'new';
  const isMissed = state === 'missed';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-5 ring-1 ${
        isActive
          ? 'bg-gradient-to-br from-orange-500/15 via-ink-800 to-ink-850 ring-orange-500/30'
          : isNew
            ? 'bg-gradient-to-br from-neon-electric/10 via-ink-800 to-ink-850 ring-neon-electric/25'
            : 'bg-gradient-to-br from-neon-purple/10 via-ink-800 to-ink-850 ring-neon-purple/25'
      }`}
    >
      <div
        className={`absolute -top-8 right-0 h-28 w-28 rounded-full blur-[50px] ${
          isActive ? 'bg-orange-500/30' : isNew ? 'bg-neon-electric/25' : 'bg-neon-purple/25'
        }`}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-gray-500">Current Streak</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-5xl font-extrabold text-white tabular-nums">{streak}</span>
            <span className="text-sm font-medium text-gray-400">days</span>
          </div>
          <p
            className={`mt-1 text-xs font-medium ${
              isActive ? 'text-orange-400' : isNew ? 'text-neon-electric' : 'text-neon-purple'
            }`}
          >
            {statusLabel}
          </p>
        </div>
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            isActive
              ? 'bg-orange-500/15 ring-1 ring-orange-500/30'
              : isNew
                ? 'bg-neon-electric/15 ring-1 ring-neon-electric/30'
                : 'bg-neon-purple/15 ring-1 ring-neon-purple/30'
          }`}
        >
          {isActive && <Flame size={26} className="text-orange-400" />}
          {isNew && <Rocket size={24} className="text-neon-electric" />}
          {isMissed && <AlertTriangle size={24} className="text-neon-purple" />}
        </div>
      </div>

      {/* Streak dots */}
      <div className="relative mt-4 flex gap-1.5">
        {[...Array(7)].map((_, i) => {
          const filled = isActive ? i < streak % 7 || (streak >= 7 && true) : i < (state === 'missed' ? 0 : streak);
          const recent = state === 'missed' && i === 5;
          return (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                recent
                  ? 'bg-red-500/40'
                  : filled
                    ? isActive
                      ? 'bg-orange-400'
                      : 'bg-neon-electric'
                    : 'bg-white/10'
              }`}
            />
          );
        })}
      </div>
      <div className="relative mt-2 flex items-center justify-between text-[10px] text-gray-500">
        <span className="flex items-center gap-1">
          <CheckCircle2 size={11} /> Best: {longest} days
        </span>
        {isMissed && <span className="text-red-400/80">Yesterday missed — reset to 0</span>}
      </div>
    </div>
  );
}

function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-neon-purple via-neon-violet to-neon-electric transition-all duration-700 ease-out"
        style={{ width: `${Math.max(pct, 2)}%` }}
      />
    </div>
  );
}
