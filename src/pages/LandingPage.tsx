import { Flame, ArrowRight, Github, Linkedin, Check, Quote, Star } from 'lucide-react';
import { NeonButton, Pill } from '@/components/ui';
import { timeline, socialProof } from '@/data/mockData';

export function LandingPage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-14 pb-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-neon-purple/20 blur-[80px]" />
        <div className="absolute top-32 -right-10 h-40 w-40 rounded-full bg-neon-electric/15 blur-[60px]" />

        <div className="relative">
          <Pill className="border border-neon-purple/30 bg-neon-purple/10 text-neon-purple">
            <Flame size={12} /> 60-Day Coding Challenge
          </Pill>

          <h1 className="mt-5 font-display text-[34px] font-extrabold leading-[1.1] tracking-tight text-white">
            Build the habit.
            <br />
            <span className="text-gradient">Become the dev.</span>
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-400">
            ABTalks turns ambitious students into consistent developers. One task a day. Commit on
            GitHub. Post on LinkedIn. Repeat for 60 days.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <NeonButton onClick={() => navigate('/dashboard')} className="flex items-center justify-center gap-2">
              Start the Challenge <ArrowRight size={16} />
            </NeonButton>
            <NeonButton variant="ghost" onClick={() => navigate('/day/12')}>
              See today&apos;s task
            </NeonButton>
          </div>

          {/* Trust stats */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { value: '12,400+', label: 'Students joined' },
              { value: '60', label: 'Days to ship' },
              { value: '94%', label: 'Finish rate' },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-3 text-center">
                <p className="font-display text-lg font-bold text-white">{s.value}</p>
                <p className="text-[10px] text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-10">
        <div className="mb-6">
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-neon-purple">
            How it works
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-white">Three steps. Every day.</h2>
        </div>

        <div className="relative space-y-4">
          {/* vertical line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-neon-purple/50 via-neon-violet/30 to-neon-electric/30" />

          {timeline.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative flex gap-4">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink-800 ring-1 ring-neon-purple/30 shadow-glow-sm">
                  <Icon size={22} className="text-neon-purple" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[11px] font-bold text-gray-500">
                      STEP {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-gray-400">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Social proof */}
      <section className="px-5 py-10">
        <div className="mb-6 text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-neon-purple">
            Social proof
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-white">Students who showed up.</h2>
          <div className="mt-2 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-1 text-xs text-gray-500">4.9 from 3,200+ students</span>
          </div>
        </div>

        <div className="-mx-5 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 px-5 pb-2">
            {socialProof.map((s) => (
              <div
                key={s.name}
                className="glass w-[280px] shrink-0 rounded-2xl p-4 ring-1 ring-white/5"
              >
                <Quote size={18} className="text-neon-purple/40" />
                <p className="mt-2 text-[13px] leading-relaxed text-gray-300">&ldquo;{s.quote}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple to-neon-violet text-sm font-bold text-white">
                    {s.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-semibold text-white">{s.name}</p>
                    <p className="text-[10px] text-gray-500">{s.role}</p>
                  </div>
                  <Pill className="border border-orange-500/30 bg-orange-500/10 text-orange-400">
                    <Flame size={10} /> {s.streak}d
                  </Pill>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-5 py-10">
        <h2 className="mb-5 font-display text-2xl font-bold text-white">What you walk away with</h2>
        <div className="space-y-3">
          {[
            'A GitHub profile that proves you can ship — daily.',
            'A LinkedIn presence recruiters actually notice.',
            '60 real coding tasks solved, not just tutorials watched.',
            'A consistency habit that outlasts the challenge.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-purple/20">
                <Check size={12} className="text-neon-purple" />
              </div>
              <p className="text-[14px] leading-relaxed text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neon-purple/20 via-ink-800 to-neon-electric/10 p-6 text-center ring-1 ring-neon-purple/20">
          <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-neon-purple/30 blur-[50px]" />
          <div className="relative">
            <div className="mb-3 flex items-center justify-center gap-2">
              <Github size={16} className="text-gray-300" />
              <Linkedin size={16} className="text-gray-300" />
            </div>
            <h2 className="font-display text-xl font-bold text-white">Day 1 starts today.</h2>
            <p className="mt-2 text-[13px] text-gray-400">
              No sign-up friction. Jump straight into the dashboard and meet your first task.
            </p>
            <NeonButton onClick={() => navigate('/dashboard')} className="mt-5">
              Join the challenge
            </NeonButton>
          </div>
        </div>
      </section>
    </div>
  );
}
