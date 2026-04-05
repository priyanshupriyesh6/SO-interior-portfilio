# SO Interior Portfolio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

A modern, high-performance portfolio website for an interior design studio, built with React, Vite, and Tailwind CSS. The site elegantly showcases past projects, services, design processes, and company information using smooth animations and a responsive layout.

## ✨ Features

- **Immersive Project Showcase**: High-quality galleries featuring diverse interior projects (e.g., Kylin Aerocity, 18comune, Soi7).
- **Smooth Navigation & Routing**: Seamless page transitions and routing managed by React Router DOM.
- **Custom Animations**: Engaging loading sequences including `PixelLoader`, `SmoothLoader`, and custom scroll animations.
- **Responsive Design**: Mobile-first architecture powered by Tailwind CSS ensuring the portfolio looks stunning on any device.
- **Contact Integration**: Direct contact forms powered by `@emailjs/browser` for easy client communication.
- **Modern UI Components**: Utilizes `lucide-react` for crisp iconography and `clsx` + `tailwind-merge` for dynamic component styling.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Linting**: ESLint 9

## 📂 Project Structure

```text
so-interior-portfolio/
├── public/                 # Static assets (favicons, etc.)
└── src/
    ├── assets/             # Images, videos, and raw assets grouped by project
    ├── components/         # Reusable UI components (Hero, Navbar, Footer, etc.)
    ├── pages/              # Route components (Home, Projects, About, Contact, etc.)
    ├── utils/              # Utility functions and custom hooks (e.g., useScrollAnimation)
    ├── App.jsx             # Main application layout and routing setup
    ├── main.jsx            # Application entry point
    └── index.css           # Global styles and Tailwind directives
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn or pnpm

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd so-interior-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **EmailJS Configuration**:
   Ensure you have configured your EmailJS credentials. Please refer to `EMAIL_SETUP_GUIDE.md` or `QUICK_EMAIL_SETUP.md` in the project root for detailed instructions on connecting your contact forms.

### Running the Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- `npm run preview` - Boots up a local static web server that serves the files from `dist` to preview the production build.
- `npm run lint` - Runs ESLint to catch and report potential errors in your code.

## 🏗️ Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` directory containing your compiled and minified assets, ready to be deployed to hosting services like Vercel, Netlify, or standard web servers.

## 📄 License

This project is proprietary and confidential. Unauthorized copying of these files, via any medium, is strictly prohibited.
