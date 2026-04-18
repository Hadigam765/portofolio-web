# 🚀 Portfolio Web - Quick Start Guide

Selamat datang! Ini adalah panduan cepat untuk memulai portfolio website Anda.

## 📦 Instalasi & Menjalankan

```bash
# 1. Masuk ke folder project
cd portfolio-web

# 2. Install dependencies (hanya dilakukan sekali)
npm install

# 3. Jalankan dev server
npm run dev

# Website akan terbuka di browser (biasanya http://localhost:3000)
```

## ✏️ Customize Portfolio Anda

### Option 1: Menggunakan Data File (RECOMMENDED)
Edit file `/src/data/portfolio.js` untuk mengubah semua konten sekaligus:

```javascript
export const personalData = {
  name: 'Nama Anda',
  title: 'Profesi Anda',
  email: 'email@anda.com',
  ...
}
```

### Option 2: Edit Component Langsung
Edit masing-masing component di `/src/components/`:
- `Hero.jsx` - Judul dan deskripsi utama
- `About.jsx` - Bio dan statistik
- `Skills.jsx` - Teknologi yang Anda kuasai
- `Projects.jsx` - Portfolio project
- `Experience.jsx` - Pengalaman kerja
- `Contact.jsx` - Informasi kontak

## 🖼️ Menambah Gambar

### Profile Picture
1. Letakkan foto profil Anda di `public/images/profile.jpg`
   - Ukuran: 300x300px (persegi)
   - Format: JPG, PNG, atau WebP

### Project Images
1. Letakkan gambar project di `public/images/project-1.jpg` sampai `project-5.jpg`
   - Ukuran: 400x250px
   - Format: JPG, PNG, atau WebP

**Lihat `IMAGES.md` untuk detail lebih lengkap**

## 🎨 Mengubah Warna

Edit file CSS Modules di `/src/styles/` atau `/src/App.css`:

**Warna utama saat ini:**
- Primary Gradient: `#667eea` ke `#764ba2` (biru-ungu)
- Accent: `#ffd700` (emas)
- Background: `#f8f9fa` (abu-abu terang)
- Text: `#333` (hitam)

**Ubah di semua file CSS module:**
```css
/* Sebelum */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Sesudah - gunakan warna pilihan Anda */
background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
```

## 📱 Responsive Design

Portfolio Anda sudah responsive di:
- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 🖥️ Desktop (1024px+)

Uji di berbagai ukuran layar dengan DevTools (F12).

## 🌐 Links & URLs

Edit di komponen untuk menambah link:

```jsx
// Di Components/Footer.jsx atau Contact.jsx
<a href="https://github.com/username">GitHub</a>
<a href="https://linkedin.com/in/username">LinkedIn</a>
<a href="https://twitter.com/username">Twitter</a>
```

## 🚀 Build untuk Production

```bash
# Compile ke folder 'dist'
npm run build

# Preview hasil build
npm run preview
```

## 📤 Deploy (Gratis)

### Vercel (RECOMMENDED)
```bash
npm install -g vercel
vercel
# Follow instruksi di terminal
```

### Netlify
1. Buka https://netlify.com
2. Connect GitHub repository
3. Deploy otomatis setiap ada push

### GitHub Pages
1. Build: `npm run build`
2. Deploy folder `dist` ke GitHub Pages

## 📚 Struktur Folder

```
portfolio-web/
├── public/
│   └── images/          # Semua gambar Anda
├── src/
│   ├── components/      # React components
│   ├── styles/          # CSS modules
│   ├── data/           # Data configuration
│   ├── App.jsx         # Main app
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🐛 Troubleshooting

### Port 3000 sudah dipakai
```bash
npm run dev -- --port 3001
```

### Gambar tidak muncul
- Pastikan file ada di `public/images/`
- Gunakan path: `/images/nama-file.jpg`
- Hard refresh: Ctrl+Shift+R

### Style tidak berubah
- Refresh browser: F5 atau Ctrl+R
- Restart dev server: Ctrl+C lalu `npm run dev`

### NPM install error
```bash
# Clear cache
npm cache clean --force

# Install ulang
npm install
```

## 💡 Tips Berguna

1. **Smooth Scrolling** - Sudah built-in, semua link navigasi smooth
2. **Animasi** - Menggunakan Framer Motion, edit di setiap component
3. **Form Contact** - Validasi otomatis, edit untuk email notification
4. **Dark Mode** - Bisa ditambahkan, lihat komponen Header.jsx

## 📖 Resources Tambahan

- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion
- **Vite Docs**: https://vitejs.dev
- **CSS Modules**: https://github.com/css-modules/css-modules

## ✨ Next Steps

1. ✅ Install dan jalankan dev server
2. ✅ Customize personal data di `src/data/portfolio.js`
3. ✅ Tambah foto profile di `public/images/`
4. ✅ Update project dan experience data
5. ✅ Ubah warna sesuai preferensi
6. ✅ Deploy ke Vercel/Netlify

---

**Butuh bantuan?** Baca file dokumentasi lainnya:
- `README.md` - Overview project
- `IMAGES.md` - Panduan lengkap gambar

Happy coding! 🎉
