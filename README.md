# 💼 My Portfolio

A modern, responsive personal portfolio website built with **Next.js** and **TypeScript** to showcase my projects, skills, and experience as an Information Technology graduate and aspiring software developer.

## ✨ Features

- 🎨 Modern and responsive UI
- ⚡ Built with Next.js App Router
- 📱 Mobile-friendly design
- 🌓 Light and dark mode support
- 🖼️ Project showcase with image galleries
- 📝 Detailed project pages
- 🚀 Optimized performance
- 💻 Clean and modular component architecture

---

## 🛠️ Built With

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

---

## 📂 Project Structure

```text
src/
├── app/                    # Next.js App Router pages
│   ├── projects/
│   │   └── [slug]/         # Dynamic project detail pages
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── about/              # About section
│   ├── animations/         # Reusable animations
│   ├── contact/            # Contact section
│   ├── cta/                # Call-to-action components
│   ├── hero/               # Hero section
│   ├── layout/             # Navbar and footer
│   ├── project/            # Project detail components
│   ├── projects/           # Project listing components
│   ├── providers/          # React context providers
│   ├── skills/             # Skills section
│   ├── timeline/           # Experience and education timeline
│   └── ui/                 # Shared UI components
│
└── data/
    ├── projects.ts         # Project data
    ├── skills.ts           # Skills data
    └── timeline.ts         # Timeline data
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Jareth-Baur/my-portfolio.git
```

### Navigate to the project

```bash
cd my-portfolio
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📦 Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 📁 Public Assets

Static assets used throughout the portfolio are organized inside the `public/` directory.

```text
public/
├── gifs/               # GIF animations
├── projects/
│   ├── cropeye/        # CropEye project assets
│   ├── qms/            # Queue Management System assets
│   └── talktiles/      # TalkTiles project assets
├── resume.pdf          # Downloadable resume
└── *.svg               # Static icons and graphics
```

---

## 🎯 Portfolio Sections

- Home
- About
- Projects
- Skills
- Journey
- Contact

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Jareth Baur**

Bachelor of Science in Information Technology

GitHub: `https://github.com/Jareth-Baur`

Portfolio: `https://jareth-baur.vercel.app/`

Email: `jareth.baur.dev@gmail.com`
