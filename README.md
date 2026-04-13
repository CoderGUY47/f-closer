# 👥 KeenKeeper — Keep Your Friendships Alive

### 📅 Deadline For 60 marks: 17 April 2026 | ⏱️11:59PM
### 📅 Deadline for 30 marks: Any time after 17 April 2026

---

## 🐣 Basic Requirements (Must Do for Everyone)

- Your app must work on **all screen sizes** — mobile, tablet, and desktop
- Make at least **8 Git commits** with clear, meaningful messages (e.g., "added friend card component")
- Your app must run without any errors after deployment
- Add a nice `README.md` file with your project name, description, technologies used, and features

---

## 🔧 Main Requirements — 50 Marks

---

### 1. 🔝 Navbar

**Navbar:**
- Design the Navbar exactly like the Figma design
- Put your **logo on the left side**
- Put your **navigation links on the right side** — links are: **Home**, **Timeline**, **Stats**
- Each link should have an **icon** next to the text
- The **active page link** should look different (highlighted), just like the Figma design

---

### 2. 🎯 Banner

**Banner Section (Top of the Home page):**
- Show a centered **title** and **subtitle**
- Add a **button with an icon** (e.g., "Add a Friend")
- Show **4 summary cards below the banner**, following the Figma design

---

### 3. 📋 Friend Data (JSON File)

Create a file (e.g., `friends.json`) with **6–10 realistic friend profiles**.  
Each friend object must have these fields:
```json
{
  "id": 1,
  "name": "John Doe",
  "picture": "https://example.com/photo.jpg",
  "email": "john@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20"
}
```

> ⚠️ Use meaningful data. No "lorem ipsum" or fake placeholder text.  
> The `status` field can only be one of: `"overdue"` | `"almost due"` | `"on-track"`  
> 💡 You may use an AI tool to help generate the JSON data.

---

### 4. 👫 Your Friends Section (Home Page)

- Display all friends from your JSON file as cards, following the Figma design
- **Each card must show:**

| Field | Details |
|---|---|
| 📸 Picture | Friend's photo |
| 🧑 Name | Friend's full name |
| 📅 Days Since Contact | How many days ago you contacted them |
| 🏷️ Tags | e.g., "college", "work" |
| 🔴 Status | Background color changes based on status (match Figma) |

- Cards must be shown in a **4-column grid layout on large screens**
- Clicking a card must navigate the user to that friend's **Detail Page**

---

### 5. 👤 Friend Details Page — Layout

This page should have a **two-column layout** (follow the Figma design).

**Left Column — Friend Info Card:**

Show the following details:
- Profile picture
- Name
- Status (with color)
- Tags
- Bio
- Email

Also add these **3 action buttons** (no functionality required for these buttons):

| Button |
|---|
| ⏰ Snooze 2 Weeks |
| 📦 Archive |
| 🗑️ Delete |

---

**Right Column — 3 sections:**

**① Stats Cards (show 3 cards):**
- Days Since Contact
- Goal (in days)
- Next Due Date

**② Relationship Goal Card:**
- Show the current contact goal
- Add an **Edit** button

**③ Quick Check-In Card:**
- Add 3 buttons with icons: **Call**, **Text**, **Video**
- When clicked, each button adds a new entry to the **Timeline** (see Section 6)

---

### 6. ⚡ Friend Details Page — Button Functionality

When a user clicks **Call**, **Text**, or **Video** in the Quick Check-In Card:

✅ A **new timeline entry** is automatically added with:
- The **current date**
- A **title** like:
  - "Call with Alex Johnson"
  - "Text with Alex Johnson"
  - "Video with Alex Johnson"

✅ A **toast notification** must appear when any of these buttons is clicked.



---

### 7. 📜 Timeline Page

This page shows the **history of all interactions** (calls, texts, video calls) logged from the Friend Details page.

**This page must have:**
- A **"Timeline"** heading at the top
- Timeline entries displayed following the Figma design
- Each entry must show:

| Field | Details |
|---|---|
| 📅 Date | When the interaction happened |
| 🔣 Icon | Different icon for Call / Text / Video |
| 📝 Title | e.g., "Call with Sarah", "Text with Mike" |

---

### 8. 🦶 Footer

- Design and add a footer section that matches the Figma design

---

### 9. 📱 Responsive Design

- The entire website must work correctly on **mobile, tablet, and desktop** screen sizes

---

### 10. 🛠️ Other Requirements(Required for marks)

| # | Requirement |
|---|---|
| 10.1 | Add a **404 Page** for any unknown/invalid route |
| 10.2 | Show a **loading animation** while the friends data is being fetched on the Home page |
| 10.3 | Show a **relevant toast notification** when the user clicks Call, Text, or Video |
| 10.4 | Make sure **reloading any page after deployment** does not cause an error |

---

## 🚀 Challenge Requirements — 10 Marks

---

### C1. 📊 Friendship Analytics Page (Stats Page)

- The page must have a **"Friendship Analytics"** heading at the top
- Add a **Pie Chart** (using Recharts) showing the count of **Call / Text / Video** interactions — match the Figma layout

---

### C2. 🔍 Timeline Filter

- Add **filter options** on the Timeline page so users can filter entries by: **Call**, **Text**, or **Video**

---

### C3. 📄 GitHub README

Add a well-designed `README.md` to your GitHub repository that includes:
- Name of your project
- A short description
- Technologies you used
- 3 key features of your project

---

## ⭐ Optional (No Marks — Highly Recommended)

These are not required but will make your project stand out:

- **Sort** timeline entries by date (newest / oldest)
- **Search** timeline entries by friend name or interaction type

---

## 🛠️ Technologies to Use

| Technology | Purpose |
|---|---|
| **React.js/Next.js** | Build the UI |
| **React Router DOM/App router(Next.js)** | Handle page navigation |
| **Tailwind CSS+Any component library** | Styling and responsiveness |
| **Recharts** | Chart |

---

## 🚀 Deployment

Deploy your project on **Vercel**, **Netlify**, **Cloudflare Pages**, or anywhere else before submitting.

---

## 📬 Submission

Fill in both links before submitting:

- **Live Link**:
- **GitHub Repository Link**: