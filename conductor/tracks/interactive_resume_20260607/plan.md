# Implementation Plan: Build core interactive resume and tech stack timeline

## Phase 1: Project Scaffolding
- [x] Task: Scaffold Vite App (switched from Next.js due to filesystem limitations)
    - [x] Run create-vite with React and TypeScript.
    - [x] Clean up boilerplate code and setup dark mode defaults in Tailwind config.
- [x] Task: Setup Testing Environment
    - [x] Install Vitest and React Testing Library.
    - [x] Configure testing environment.

## Phase 2: Core Components Implementation
- [x] Task: Layout Component
    - [x] Write tests for Layout component (Header, Footer, Social Links).
    - [x] Implement Layout component.
- [x] Task: Interactive Timeline Component
    - [x] Write tests for Timeline component.
    - [x] Implement Timeline component for work experience data.
- [x] Task: Tech Stack Visualizer Component
    - [x] Write tests for Tech Stack component.
    - [x] Implement Tech Stack component.

## Phase 3: Integration and Polish
- [x] Task: Home Page Assembly
    - [x] Write tests for Home Page assembling Timeline and Tech Stack.
    - [x] Implement Home Page.
- [x] Task: Responsiveness and Performance Audit
    - [x] Verify mobile responsiveness.
    - [x] Run Lighthouse and optimize for >95 score.
