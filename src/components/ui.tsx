import type { ReactNode } from 'react';

export function SectionCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`glass rounded-2xl p-4 ${className}`}>{children}</div>;
}

export function NeonButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'outline';
  className?: string;
  disabled?: boolean;
}) {
  const base =
    'w-full rounded-xl font-semibold text-sm transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary:
      'bg-gradient-to-r from-neon-purple to-neon-violet text-white shadow-neon-purple hover:shadow-neon-soft hover:brightness-110',
    ghost: 'bg-white/5 text-gray-200 hover:bg-white/10 border border-white/10',
    outline:
      'bg-transparent text-neon-purple border border-neon-purple/40 hover:bg-neon-purple/10 hover:border-neon-purple',
  };
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className} px-5 py-3.5`}>
      {children}
    </button>
  );
}

export function Pill({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}
