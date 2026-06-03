<div align="center">

# 👥 F-Closer

### Premium Friend Management & Social Circle Tracker

*A cinematic friendship and social network management platform built on Next.js 16, powered by Motion animations and Recharts analytics.*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-f--closer.vercel.app-8b5cf6?style=for-the-badge)](https://f-closer.vercel.app/)
&nbsp;
[![Next.js 16](https://img.shields.io/badge/Next.js-16.2-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
&nbsp;
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
&nbsp;
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4.2-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [❌ The Problem & ✅ The Solution](#-the-problem---the-solution)
- [🚀 Live Link](#-live-link)
- [💡 Business Value & Engagement](#-business-value--engagement)
- [🚀 Key Features](#-key-features)
- [📦 Tech Stack & Architecture](#-tech-stack--architecture)
- [📂 Project Structure](#-project-structure)
- [🛠️ Installation & Setup](#️-installation--setup)
- [🚢 Production Deployment](#-production-deployment)
- [🤝 Social & Contributing](#-social--contributing)

---

## ✨ Overview

**F-Closer** is a premium personal social circle management platform, designed for users who value maintaining meaningful connections. Built on **Next.js 16** with the React Compiler (`babel-plugin-react-compiler`) for optimized rendering, the app enables users to organize friends into tiers, track interaction frequency, and visualize friendship health scores through **Recharts** analytics.

The interface leverages **Motion** (Framer Motion successor) for smooth entrance animations, **Lordicon** animated icon packs, and the **DaisyUI v5** component system over Tailwind CSS v4 — delivering a premium, dynamic visual language throughout.

---

## ❌ The Problem & ✅ The Solution

> **Maintaining meaningful friendships at scale is hard without a structured system.**

Most people rely on social media algorithms to remind them of friends' birthdays, leading to shallow, reactive instead of proactive, genuine connections.

| ❌ The Problem | ✅ F-Closer's Solution |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| No centralized view of all friendships and their status | **Friend grid dashboard** grouping contacts by closeness tier and activity score |
| Forgetting to reach out to important people | **Interaction tracking panel** highlighting inactive friendships needing attention |
| No insight into whether your social life is expanding | **Recharts trend charts** showing friendship activity over weeks and months |
| Stiff, static interfaces that feel clinical | **Motion-powered entrances** giving every card and stat a cinematic reveal |
| Bulky notification systems that overwhelm users | Lightweight **react-hot-toast** inline feedback for every action |

---

## 🚀 Live Link

→ [View F-Closer Live Demo](https://f-closer.vercel.app/)

<br/>

<table>
  <tr>
    <td width="50%">
      <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=880&h=495&auto=format&fit=crop" alt="F-Closer Dashboard" width="100%" style="border-radius:8px;aspect-ratio:16/9;object-fit:cover" />
    </td>
    <td width="50%">
      <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=880&h=495&auto=format&fit=crop" alt="F-Closer Analytics" width="100%" style="border-radius:8px;aspect-ratio:16/9;object-fit:cover" />
    </td>
  </tr>
  <tr>
    <td align="center"><sub>👥 Friend Circle Management Dashboard</sub></td>
    <td align="center"><sub>📊 Friendship Analytics & Interaction Trends</sub></td>
  </tr>
</table>

---

## 💡 Business Value & Engagement

| Feature | Impact |
| --------------------------------- | ------------------------------------------------------------------------------- |
| **Motion Animations** | Smooth page transitions increase perceived performance and delight |
| **Recharts Dashboards** | Visual analytics translate friendship data into actionable behavioral nudges |
| **React Compiler** | Optimized auto-memoization reduces unnecessary re-renders across card grids |

---

## 🚀 Key Features

- **👥 Friend Circle Management** — Add, edit, and remove friends with tier classifications.
- **📊 Analytics Dashboard** — Recharts bar charts displaying interaction frequency per friend group.
- **✨ Motion Animations** — Smooth layout transitions and card entrance animations.
- **🎭 Lordicon Animated Icons** — Premium animated icon library for interactive affordance cues.
- **🏷️ Tab-Based Filters** — react-tabs switching between friend tiers and activity status views.
- **🔔 Toast Notifications** — react-hot-toast and react-toastify for all user action feedback.

---

## 📦 Tech Stack & Architecture

### Core Stack

| Layer | Technology |
| -------------------------- | ----------------------------------------------------- |
| **Framework** | `next@16.2.3` (App Router) |
| **UI Library** | `daisyui@^5.5.19` |
| **Animations** | `motion@^12.38.0` |
| **Charts** | `recharts@^3.8.1` |
| **Icons** | `@lordicon/react@^1.11.0` + `lucide-react` + `react-icons` |

### Optimizations

| Tool | Purpose |
| --------------------- | --------------------------------------------------------- |
| `babel-plugin-react-compiler` | Auto-memoization for optimized React rendering |
| `tw-animate-css` | Tailwind-compatible animation utility classes |
| `clsx` | Conditional class utility for DaisyUI variants |

---

## 📂 Project Structure

```text
f-closer/
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   ├── components/     # FriendCard, Analytics, FilterTabs
│   └── lib/            # Data utilities and constants
├── public/             # Static assets
└── package.json
```

---

## 🛠️ Installation & Setup

1. **Clone & Install**

   ```bash
   git clone https://github.com/CoderGUY47/f-closer.git
   cd f-closer
   npm install
   ```

2. **Run Locally**

   ```bash
   npm run dev
   ```

   Access at `http://localhost:3000`.

---

## 🚢 Production Deployment

- **Hosting:** Deployed on **Vercel** via automatic Git integration.
- **Build Command:** `npm run build`
- **Framework Preset:** Next.js (auto-detected).

---

## 🤝 Social & Contributing

<div align="center">

Produced with precision by **[CoderGUY47](https://github.com/CoderGUY47)**.

[![GitHub](https://img.shields.io/badge/GitHub-CoderGUY47-181717?style=for-the-badge&logo=github)](https://github.com/CoderGUY47)

</div>
