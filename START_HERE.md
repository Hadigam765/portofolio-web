# 
Selamat! Portfolio website React Anda sudah 100% siap digunakan! 
 Quick Start (3 Langkah)## 

```bash
# 1. Masuk ke folder project
cd /Users/mac/Documents/cobavibecoding/portfolio-web

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Website akan otomatis membuka di browser Anda (http://localhost:3000)

---

## 
 **Profile Picture**: `public/images/profile.jpg` (17KB)
- Ukuran: 300x300px
- Dari: Unsplash

 **Project Images** (5 gambar sample):
- `project-1.jpg` - E-Commerce Platform
- `project-2.jpg` - Task Management App  
- `project-3.jpg` - Weather Dashboard
- `project-4.jpg` - Social Media Platform
- `project-5.jpg` - Blog CMS

Semua gambar sudah terintegrasi dan siap digunakan!

---

## 
### 1. Update Personal Data (PALING PENTING)
Edit file: `src/data/portfolio.js`

```javascript
export const personalData = {
  name: 'Nama Anda',
  title: 'Web Developer',  
  bio: 'Deskripsi singkat tentang Anda',
  email: 'email@anda.com',
  phone: '+62 xxx xxx xxxx',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  twitter: 'https://twitter.com/username',
}
```

### 2. Ganti Foto Profile
1. Hapus: `public/images/profile.jpg`
2. Letakkan foto Anda dengan nama yang sama
3. Ukuran: 300x300px (boleh square atau portrait)

### 3. Ganti Gambar Project
1. Letakkan 5 gambar project di folder `public/images/`
2. Gunakan nama: `project-1.jpg`, `project-2.jpg`, dst
3. Ukuran rekomendasi: 400x250px

### 4. Ubah Warna (Optional)
Edit file CSS di `/src/styles/` dan ubah gradient color:
```css
/* Sebelum */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Sesudah */
background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
```

---

## 
| File | Fungsi |
|------|--------|
| `src/data/portfolio.js` | Data konfigurasi utama |
| `public/images/` | Folder semua gambar |
| `src/components/` | Komponen React |
| `src/styles/` | CSS Modules |

---

## 
### Opsi 1: Vercel (RECOMMENDED)
```bash
npm install -g vercel
vercel
```

### Opsi 2: Netlify
1. Buka https://netlify.com
2. Connect ke GitHub repository
3. Auto deploy setiap ada push

---

 Yang Sudah Siap Digunakan## 

 8 React Components siap pakai
 8 CSS Modules dengan styling profesional
 6 Sample images terintegrasi
 Animasi smooth dengan Framer Motion
 Form kontak dengan validasi
 Responsive design (mobile-friendly)
 Navigation dengan smooth scroll
 Footer dengan social media links

---

## 
- **QUICKSTART.md** - Panduan lengkap setup
- **IMAGES.md** - Cara kelola gambar
- **README.md** - Overview project
- **CHECKLIST.md** - Development checklist

---

## 
Berikut section yang ada di portfolio Anda:

1. **Header** - Navigasi sticky dengan menu responsif
2. **Hero** - Landing page menarik dengan CTA buttons
3. **About** - Bio + foto profile + statistik
4. **Skills** - 3 kategori skill dengan icon
5. **Projects** - 5 project showcase dengan overlay
6. **Experience** - Timeline pengalaman kerja
7. **Contact** - Form kontak + social links
8. **Footer** - Social media + copyright

---

## 
1. **Live Editing**: Perubahan di code otomatis reload di browser
2. **Mobile Testing**: Buka DevTools (F12) dan test di berbagai ukuran layar
3. **Animasi**: Dijalankan saat scroll, customizable di Framer Motion
4. **SEO**: Update title dan meta di `index.html`

---

 Troubleshooting## 

**Error: Port 3000 sudah digunakan?**
```bash
npm run dev -- --port 3001
```

**Gambar tidak muncul?**
- Pastikan file ada di `public/images/`
- Hard refresh: Ctrl+Shift+R

**Dev server tidak jalan?**
```bash
npm cache clean --force
npm install
npm run dev
```

---

## 
1 Run `npm install`. 
2 Edit `src/data/portfolio.js`. 
3 Add your profile photo. 
4 Add project images. 
5 Test di browser dengan `npm run dev`. 
6 Deploy ke Vercel/Netlify. 

---

 Pertanyaan?## 

Baca dokumentasi yang tersedia:
- QUICKSTART.md - untuk setup lengkap
- IMAGES.md - untuk manajemen gambar
- README.md - untuk overview project

---

**Status SIAP DIGUNAKAN**: 
**Tanggal Setup**: April 2025
**Version**: 1.0


