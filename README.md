# ABTalks Redesign Challenge - ViCODATHON 2026
A premium, mobile-first redesign of the ABTalks platform tailored for an immersive 60-day student coding challenge. Built entirely solo using Vibe Coding workflows.
## 🚀 Submission Details
- **Participant Name:** Shivangi Mishra
- **Problem Statement:** Problem Statement 1 - Redesign ABTalks
- **Design Philosophy:** Mobile-first (390px width optimized), dark-mode futuristic theme utilizing neon purples and electric blues.
## 📱 Features Implemented
1. **Landing Page (`/`):** High-trust, ultra-clean hero section designed to motivate and onboard fresh students into the 60-day sprint.
2. **Student Dashboard (`/dashboard`):** Real-time progress monitoring featuring active streak badges, task countdowns, and completion metrics using robust mock JSON data layers.
3. **Challenge Day Interface (`/day/12`):** Interactive day-12 template equipped with strict proof-of-work submission fields (GitHub commit & LinkedIn status URLs).
4. **Interactive State Toggles:** Built-in review controls on the UI allowing evaluators to instantly switch between "New Student", "Active Streak", and "Missed Day" states.
## ⚙️ Tech Stack & Tools
- **Framework:** React.js with TypeScript
- **Styling:** Tailwind CSS (Mobile-First Layout)
- **Icons:** Lucide React
- **Primary AI Collaboration Tool:** Bolt.new (Vibe Coding Framework)
---
## 🤖 AI Usage Log & Prompt History (Stage 1 Requirement)
### Phase 1: Core Architecture & Scaffold
- **Prompt:** "Create a mobile-first web application for ABTalks using React, Tailwind CSS, and lucide-react icons. The layout must be perfectly optimized for a 390px mobile viewport width..."
- **AI Action:** Scaffolded client-side routing, built components for landing, dashboard, and day-12 views, injected comprehensive mock data structures.
### Phase 2: UX Refinement & Edge Case Implementations
- **Prompt:** "Handle critical edge cases elegantly: Include toggle buttons or tabs directly on the UI labeled 'New Student (No Streak)', 'Missed Day State', and 'Active Streak Student'..."
- **AI Action:** Added reactive state hooks, dynamically updating visual styles, and safety warning banners for missed streaks.
