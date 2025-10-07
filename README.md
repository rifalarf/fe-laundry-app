# Laundry App - React + Vite

Aplikasi manajemen laundry yang dibangun dengan **React.js + Vite**, **Tailwind CSS v4**, dan **DaisyUI**.

## 🚀 Teknologi

- **React 18** - Library UI
- **Vite 7** - Build tool & dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **DaisyUI** - Component library untuk Tailwind

## 📦 Struktur Folder

```
fe-laundry-app/
├── src/
│   ├── components/
│   │   └── layout/
│   │       └── DashboardLayout.jsx  # Layout dengan sidebar & navbar
│   ├── pages/
│   │   ├── LoginPage.jsx            # Halaman login
│   │   └── DashboardPage.jsx        # Halaman dashboard
│   ├── utils/
│   │   └── auth.js                  # Utility autentikasi
│   ├── App.jsx                      # Main app dengan routing
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── public/                          # Static assets
├── dist/                            # Production build
├── vite.config.js                   # Vite configuration
└── package.json
```

## 🔧 Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```