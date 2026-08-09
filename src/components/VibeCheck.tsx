import { Sparkles, X } from 'lucide-react';
import type { StudentState } from '@/data/mockData';
import { vibeChecks } from '@/data/mockData';

const toneStyles: Record<string, { ring: string; glow: string; chip: string; label: string }> = {
  fire: {
    ring: 'ring-orange-500/30',
    glow: 'shadow-[0_0_25px_rgba(249,115,22,0.2)]',
    chip: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    label: 'Streak Active',
  },
  fresh: {
    ring: 'ring-neon-electric/30',
    glow: 'shadow-[0_0_25px_rgba(34,211,238,0.2)]',
    chip: 'bg-neon-electric/15 text-neon-electric border-neon-electric/30',
    label: 'New Beginnings',
  },
  comeback: {
    ring: 'ring-neon-purple/30',
    glow: 'shadow-[0_0_25px_rgba(168,85,247,0.2)]',
    chip: 'bg-neon-purple/15 text-neon-purple border-neon-purple/30',
    label: 'Comeback Mode',
  },
};

export function VibeCheck({ state }: { state: StudentState }) {
  const vibe = vibeChecks[state];
  const style = toneStyles[vibe.tone];

  return (
    <div className={`glass rounded-2xl p-4 ring-1 ${style.ring} ${style.glow} animate-rise`}>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-purple/20">
            <Sparkles size={16} className="text-neon-purple" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white">{vibe.title}</p>
            <p className="text-[10px] text-gray-500">AI Accountability Partner</p>
          </div>
        </div>
        <span className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold ${style.chip}`}>
          {style.label}
        </span>
      </div>
      <p className="text-[13px] leading-relaxed text-gray-300">{vibe.message}</p>
    </div>
  );
}

export function VibeDismiss() {
  return null;
}

export function VibeIcon() {
  return <X size={14} />;
}
