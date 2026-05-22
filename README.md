# 🟢 Hulya Search Engine

Search engine modern dengan tema hijau & hitam. Dibangun dengan **HTML + CSS + JavaScript murni** (tanpa React/Next.js/TypeScript), menggunakan **Bun** sebagai backend.

## 📂 Struktur Project

```
hulya-static/
├── server.js          ← Backend (Bun) untuk search API
├── package.json       ← Dependencies
└── public/
    ├── index.html     ← Frontend (HTML + CSS + JS)
    └── favicon.png    ← Logo Hulya
```

## 🚀 Cara Menjalankan

### Prasyarat
- [Bun](https://bun.sh/) harus sudah terinstall

### Langkah-langkah

```bash
# 1. Install dependencies
bun install

# 2. Jalankan server
bun run dev

# 3. Buka di browser
# → http://localhost:3000
```

## 🔧 Arsitektur

```
┌─────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  index.html     │────▶│  /api/search     │────▶│  z-ai-web-dev-sdk│
│  (HTML/CSS/JS)  │     │  (Bun Server)    │     │  web_search()    │
└─────────────────┘     └──────────────────┘     └──────────────────┘
```

| Komponen | Teknologi | Fungsi |
|----------|-----------|--------|
| **Frontend** | HTML + CSS + Vanilla JS | UI search engine |
| **Backend** | Bun (server.js) | API search endpoint |
| **Search API** | z-ai-web-dev-sdk | Pencarian web |

## ✨ Fitur

- 🎨 Tema hijau & hitam modern
- 📱 Responsif (mobile, tablet, desktop)
- 🔍 Search suggestions otomatis
- ⚡ Quick search chips (Trending, AI, World, Tech)
- 🎭 Animasi CSS tanpa library
- 🔒 Privacy-first approach
