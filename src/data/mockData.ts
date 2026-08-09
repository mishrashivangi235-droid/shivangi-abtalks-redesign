import type { LucideIcon } from 'lucide-react';
import { Flame, Trophy, Star, Target, Zap, Award, Calendar, Rocket } from 'lucide-react';

export type StudentState = 'active' | 'new' | 'missed';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  earned: boolean;
  color: string;
}

export interface DayTask {
  day: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedMinutes: number;
  constraints: string[];
  hint: string;
}

export const dashboardStates: Record<
  StudentState,
  {
    streak: number;
    longestStreak: number;
    completedDays: number;
    totalDays: number;
    completionPct: number;
    todayCompleted: boolean;
    statusLabel: string;
    statusEmoji: string;
  }
> = {
  active: {
    streak: 12,
    longestStreak: 15,
    completedDays: 12,
    totalDays: 60,
    completionPct: 20,
    todayCompleted: false,
    statusLabel: 'On fire',
    statusEmoji: '🔥',
  },
  new: {
    streak: 0,
    longestStreak: 0,
    completedDays: 0,
    totalDays: 60,
    completionPct: 0,
    todayCompleted: false,
    statusLabel: 'Just joined',
    statusEmoji: '🌱',
  },
  missed: {
    streak: 0,
    longestStreak: 8,
    completedDays: 5,
    totalDays: 60,
    completionPct: 8,
    todayCompleted: false,
    statusLabel: 'Missed a day',
    statusEmoji: '💔',
  },
};

export const todayTask: DayTask = {
  day: 12,
  title: 'Build a Debounce Function',
  description:
    'Create a debounce utility that delays invoking a function until after a specified wait time has elapsed since the last time it was called. This is a fundamental concept used across modern web apps — search inputs, autosave, resize handlers.',
  difficulty: 'Medium',
  estimatedMinutes: 45,
  constraints: [
    'Must be written in TypeScript with full type safety',
    'Accept a generic function and return a new debounced function',
    'Support a configurable wait time (default 300ms)',
    'Include a cancel() method to clear pending calls',
    'Push at least one commit to a public GitHub repo',
  ],
  hint: 'Think about closures and setTimeout. The returned function should reset the timer on every call.',
};

export const badges: Badge[] = [
  {
    id: 'first-commit',
    name: 'First Commit',
    description: 'Submitted your very first day',
    icon: Rocket,
    earned: true,
    color: 'from-neon-purple to-neon-violet',
  },
  {
    id: 'streak-3',
    name: '3-Day Spark',
    description: 'Maintained a 3-day streak',
    icon: Flame,
    earned: true,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Reached a 7-day streak',
    icon: Trophy,
    earned: true,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'streak-14',
    name: 'Fortnight Force',
    description: 'Reached a 14-day streak',
    icon: Star,
    earned: false,
    color: 'from-neon-blue to-neon-electric',
  },
  {
    id: 'streak-30',
    name: 'Unstoppable',
    description: 'Reached a 30-day streak',
    icon: Zap,
    earned: false,
    color: 'from-neon-electric to-neon-purple',
  },
  {
    id: 'finisher',
    name: 'Challenge Finisher',
    description: 'Completed all 60 days',
    icon: Award,
    earned: false,
    color: 'from-neon-pink to-neon-purple',
  },
];

export const timeline = [
  {
    step: 1,
    title: 'Commit on GitHub',
    description: 'Solve the daily coding task and push your solution to a public GitHub repository.',
    icon: Target,
  },
  {
    step: 2,
    title: 'Post on LinkedIn',
    description: 'Share what you learned — a short post, a screenshot, a takeaway. Build in public.',
    icon: Calendar,
  },
  {
    step: 3,
    title: 'Build Consistency',
    description: 'Repeat every day for 60 days. Watch your streak grow and your skills compound.',
    icon: Flame,
  },
];

export const socialProof = [
  {
    name: 'Aarav S.',
    role: 'CS Student, Mumbai',
    quote: 'I went from skipping every side project to a 47-day streak. ABTalks rewired how I show up.',
    streak: 47,
    avatar: 'A',
  },
  {
    name: 'Priya R.',
    role: '2nd Year, Bangalore',
    quote: 'The daily tasks are bite-sized but real. My GitHub finally looks like a developer lives there.',
    streak: 30,
    avatar: 'P',
  },
  {
    name: 'Kabir M.',
    role: '1st Year, Delhi',
    quote: 'Posting on LinkedIn felt scary. Now it is just part of my day, and recruiters started reaching out.',
    streak: 22,
    avatar: 'K',
  },
];

export const vibeChecks: Record<StudentState, { title: string; message: string; tone: 'fire' | 'fresh' | 'comeback' }> = {
  active: {
    title: 'Vibe Check',
    message:
      "12 days deep and still moving — that's not luck, that's reps. Today's task is a debounce function. Keep the streak breathing. Push the commit before the day ends.",
    tone: 'fire',
  },
  new: {
    title: 'Welcome to Day 0',
    message:
      "Every developer you admire started with one commit they were unsure about. Today is yours. No streak to protect, no pressure — just open the editor and ship one small thing.",
    tone: 'fresh',
  },
  missed: {
    title: 'Reset & Return',
    message:
      "You missed a day. That happens to everyone who has ever built anything. The streak counter reset, but the 5 days you finished are still yours. The only failure is not restarting today.",
    tone: 'comeback',
  },
};
