# Todo App

A todo-list application built with React, featuring task filtering, priority levels, and persistent storage via localStorage.

## Live Demo

https://todo-app-omega-three-41.vercel.app/

## Features

- Add, complete, and delete tasks
- Filter tasks by status (all / active / done)
- Task priority levels (low / medium / high) with color-coded tags
- Data persists across page reloads using localStorage
- Dark-themed UI

## Tech Stack

- React
- Vite
- Deployed on Vercel

## Running Locally

```bash
git clone https://github.com/aida-hashemi/todo-app.git
cd todo-app
npm install
npm run dev
```

## What I Learned

- Managing component state with `useState` and syncing it to `localStorage` with `useEffect`
- Filtering and transforming arrays with `.filter()` and `.map()`
- Conditional styling based on state (priority colors, strikethrough for completed tasks)
- Git workflow: feature branches, commits, merging, and pushing to GitHub
