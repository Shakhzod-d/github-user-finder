# 🚀 GitHub User Explorer

A simple and modern React app built with **TypeScript**, **Vite**, and **TanStack React Query** that lets you search for GitHub users, view their profiles, and browse their repositories — complete with **infinite scroll**, **dark mode**, and **local caching**.

---

## 🧩 Features

✅ **GitHub User Search** – Search for any GitHub username and instantly view their profile details.
✅ **Repository Viewer** – Browse a user’s public repositories with infinite scrolling.
✅ **Error Handling** – User-friendly error messages when a username doesn’t exist or an API error occurs.
✅ **Loading States** – Smooth skeleton and loader components for a polished UX.
✅ **Dark/Light Mode Toggle** – Switch between themes using a custom Zustand store.
✅ **Local Storage Caching** – Avoid redundant API calls by caching fetched user and repository data.
✅ **React Query Caching** – Utilizes React Query’s internal caching for better performance and reduced network usage.

---

## ⚙️ Installation

Make sure you have **Node.js v18+** and **npm** or **yarn** installed.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/github-user-explorer.git
cd github-user-explorer
```

### 2️⃣ Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3️⃣ Run the app

```bash
npm start
```

or

```bash
yarn dev
```

The app should now be running at:
👉 **[http://localhost:5173/](http://localhost:5173/)** (Vite default port)

---

## 🧠 Tech Stack

- ⚛️ **React + TypeScript**
- ⚡ **Vite**
- 🎨 **Material UI (MUI)**
- 🧱 **Zustand** – For lightweight global state management
- 🔁 **TanStack React Query v5** – For fetching, caching, and syncing GitHub API data
- 🌐 **GitHub REST API** – Public endpoints for users and repositories

---

## 🧰 Extra Features Implemented

| Feature                   | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| **Infinite Scroll**       | Loads repositories in batches as the user scrolls down.            |
| **Local Storage Caching** | Caches GitHub user and repo data to prevent redundant API calls.   |
| **React Query Cache**     | Keeps previously fetched data “fresh” for 5 minutes (`staleTime`). |
| **Dark/Light Mode**       | Theme toggle powered by Zustand and Material UI.                   |
| **Error Boundaries**      | Displays friendly messages like “User not found.”                  |

---

## 🧑‍💻 Folder Structure

```
src/
├── components/       # Reusable UI components (SearchBar, ProfileCard, etc.)
├── hooks/            # Custom hooks (useGithubUser, useGithubRepos)
├── pages/            # Page components (Home)
├── services/         # API service functions (GitHub API)
├── store/            # Zustand stores
├── utils/            # Helpers and constants (caching utils, constants)
└── main.tsx          # App entry point
```

---

## 🧹 Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start local dev server           |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint checks                |
