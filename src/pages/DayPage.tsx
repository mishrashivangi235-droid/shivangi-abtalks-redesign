import { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  Code2,
  Lightbulb,
  Github,
  Linkedin,
  CheckCircle2,
  PartyPopper,
  X,
  AlertCircle,
} from 'lucide-react';
import { SectionCard, NeonButton, Pill } from '@/components/ui';
import { todayTask } from '@/data/mockData';

export function DayPage({
  dayId,
  navigate,
}: {
  dayId: string;
  navigate: (to: string) => void;
}) {
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [errors, setErrors] = useState<{ github?: string; linkedin?: string }>({});
  const [showModal, setShowModal] = useState(false);

  const day = todayTask; // mock: always Day 12

  const difficultyColor = {
    Easy: 'text-green-400 border-green-400/30 bg-green-400/10',
    Medium: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    Hard: 'text-red-400 border-red-400/30 bg-red-400/10',
  };

  const validate = () => {
    const e: { github?: string; linkedin?: string } = {};
    if (!githubUrl.trim()) e.github = 'GitHub URL is required';
    else if (!githubUrl.includes('github.com')) e.github = 'Must be a valid GitHub link';
    if (!linkedinUrl.trim()) e.linkedin = 'LinkedIn URL is required';
    else if (!linkedinUrl.includes('linkedin.com')) e.linkedin = 'Must be a valid LinkedIn link';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setShowModal(true);
    }
  };

  return (
    <div className="px-5 pt-14 pb-6">
      {/* Back */}
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-4 flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
      >
        <ArrowLeft size={16} /> Back to dashboard
      </button>

      {/* Day header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neon-purple/15 via-ink-800 to-ink-850 p-5 ring-1 ring-neon-purple/20">
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-neon-purple/20 blur-[50px]" />
        <div className="relative">
          <div className="flex items-center gap-2">
            <Pill className="border border-neon-purple/30 bg-neon-purple/10 text-neon-purple">
              <Code2 size={11} /> Day {day.day}
            </Pill>
            <Pill className={`border ${difficultyColor[day.difficulty]}`}>{day.difficulty}</Pill>
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-white">{day.title}</h1>
          <div className="mt-3 flex items-center gap-4 text-[11px] text-gray-500">
            <span className="flex items-center gap-1">
              <Clock size={12} /> {day.estimatedMinutes} min
            </span>
            <span className="flex items-center gap-1">
              <Code2 size={12} /> TypeScript
            </span>
          </div>
        </div>
      </div>

      {/* Task description */}
      <SectionCard className="mt-4">
        <h2 className="mb-2 font-display text-sm font-bold text-white">The Task</h2>
        <p className="text-[13px] leading-relaxed text-gray-300">{day.description}</p>
      </SectionCard>

      {/* Constraints */}
      <SectionCard className="mt-4">
        <h2 className="mb-3 font-display text-sm font-bold text-white">Constraints</h2>
        <div className="space-y-2.5">
          {day.constraints.map((c, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neon-purple/20">
                <span className="text-[9px] font-bold text-neon-purple">{i + 1}</span>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-400">{c}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Hint */}
      <div className="mt-4 flex items-start gap-3 rounded-xl bg-neon-electric/5 p-3.5 ring-1 ring-neon-electric/20">
        <Lightbulb size={16} className="mt-0.5 shrink-0 text-neon-electric" />
        <div>
          <p className="text-[11px] font-semibold text-neon-electric">Hint</p>
          <p className="mt-0.5 text-[12px] leading-relaxed text-gray-400">{day.hint}</p>
        </div>
      </div>

      {/* Submit proof */}
      <section className="mt-6">
        <h2 className="mb-3 font-display text-base font-bold text-white">Submit your proof of work</h2>

        <SectionCard>
          {/* GitHub */}
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-300">
              <Github size={13} /> GitHub Repository / Commit URL
            </label>
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => {
                setGithubUrl(e.target.value);
                if (errors.github) setErrors((p) => ({ ...p, github: undefined }));
              }}
              placeholder="https://github.com/username/repo/commit/..."
              className={`w-full rounded-xl border bg-ink-900/60 px-3.5 py-3 text-[13px] text-white placeholder-gray-600 outline-none transition-all ${
                errors.github
                  ? 'border-red-500/50 focus:border-red-500'
                  : 'border-white/10 focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20'
              }`}
            />
            {errors.github && (
              <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                <AlertCircle size={11} /> {errors.github}
              </p>
            )}
          </div>

          {/* LinkedIn */}
          <div className="mt-4">
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-300">
              <Linkedin size={13} /> LinkedIn Post URL
            </label>
            <input
              type="url"
              value={linkedinUrl}
              onChange={(e) => {
                setLinkedinUrl(e.target.value);
                if (errors.linkedin) setErrors((p) => ({ ...p, linkedin: undefined }));
              }}
              placeholder="https://linkedin.com/posts/..."
              className={`w-full rounded-xl border bg-ink-900/60 px-3.5 py-3 text-[13px] text-white placeholder-gray-600 outline-none transition-all ${
                errors.linkedin
                  ? 'border-red-500/50 focus:border-red-500'
                  : 'border-white/10 focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20'
              }`}
            />
            {errors.linkedin && (
              <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                <AlertCircle size={11} /> {errors.linkedin}
              </p>
            )}
          </div>

          <NeonButton onClick={handleSubmit} className="mt-5 flex items-center justify-center gap-2">
            <CheckCircle2 size={16} /> Submit Proof
          </NeonButton>
        </SectionCard>
      </section>

      {showModal && <SuccessModal onClose={() => setShowModal(false)} navigate={navigate} day={day.day} />}
    </div>
  );
}

function SuccessModal({
  onClose,
  navigate,
  day,
}: {
  onClose: () => void;
  navigate: (to: string) => void;
  day: number;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      {/* modal */}
      <div className="relative w-full max-w-[340px] animate-scale-in rounded-2xl bg-gradient-to-b from-ink-800 to-ink-900 p-6 text-center ring-1 ring-neon-purple/30 shadow-neon-soft">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>

        {/* animated icon */}
        <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 animate-pulse-slow rounded-full bg-neon-purple/20 blur-xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple to-neon-violet shadow-neon-purple">
            <PartyPopper size={34} className="text-white" />
          </div>
        </div>

        <h2 className="font-display text-xl font-bold text-white">Proof submitted!</h2>
        <p className="mt-2 text-[13px] leading-relaxed text-gray-400">
          Day {day} is locked in. Your streak just grew — that&apos;s how consistency is built. See you tomorrow.
        </p>

        {/* streak badge */}
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-orange-500/15 px-3 py-1.5 ring-1 ring-orange-500/30">
          <span className="text-lg">🔥</span>
          <span className="text-xs font-semibold text-orange-400">Streak: {day} days</span>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <NeonButton onClick={() => navigate('/dashboard')} className="py-3">
            Back to Dashboard
          </NeonButton>
          <button
            onClick={onClose}
            className="text-xs text-gray-500 transition-colors hover:text-gray-300"
          >
            Submit another link
          </button>
        </div>
      </div>
    </div>
  );
}
