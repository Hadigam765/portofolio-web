# Images Guide

## 📁 Struktur Folder Images

```
public/
└── images/
    ├── profile.jpg        # Foto profil Anda (300x300)
    ├── project-1.jpg      # Gambar project 1 (400x250)
    ├── project-2.jpg      # Gambar project 2 (400x250)
    ├── project-3.jpg      # Gambar project 3 (400x250)
    ├── project-4.jpg      # Gambar project 4 (400x250)
    └── project-5.jpg      # Gambar project 5 (400x250)
```

## 🖼️ Gambar yang Disertakan

### Profile Picture (`profile.jpg`)
- Digunakan di section **About**
- Ukuran: 300x300px (dikrop bulat di CSS)
- Format: JPG
- Tips: Gunakan foto profesional dengan background simple

### Project Images (`project-1.jpg` - `project-5.jpg`)
- Digunakan di section **Projects**
- Ukuran: 400x250px
- Format: JPG
- Tips: Gunakan screenshot atau mockup project Anda

## 🔄 Mengubah Gambar

### 1. Ganti Foto Profil
```bash
# Hapus gambar lama
rm public/images/profile.jpg

# Tambahkan gambar baru dengan nama yang sama
# Pastikan ukuran: 300x300px
# Letakkan file di: public/images/profile.jpg
```

### 2. Ganti Gambar Project
```bash
# Hapus gambar project lama
rm public/images/project-1.jpg

# Tambahkan gambar baru dengan nama yang sama
# Pastikan ukuran: 400x250px
# Letakkan file di: public/images/project-1.jpg
```

## 📥 Download Gambar Sample

Jika ingin mengganti dengan gambar lain, Anda bisa download dari:

### Free Image Sources:
- **Unsplash** - https://unsplash.com
- **Pexels** - https://pexels.com
- **Pixabay** - https://pixabay.com
- **Lorem Picsum** - https://picsum.photos (for random images)

### Contoh menggunakan curl:
```bash
# Download dari Unsplash
curl -L "https://images.unsplash.com/photo-XXXXX?w=300&h=300&fit=crop" -o public/images/profile.jpg

# Download dari Picsum
curl -L "https://picsum.photos/400/250?random=1" -o public/images/project-1.jpg
```

## 🎨 Rekomendasi Ukuran Gambar

| Gambar | Ukuran | Tipe |
|--------|--------|------|
| Profile | 300x300px | Square |
| Projects | 400x250px | Rectangle |
| Optimal | < 50KB | JPG/WebP |

## 💡 Tips Optimasi Gambar

1. **Kompresi Gambar**
   - Gunakan TinyPNG: https://tinypng.com
   - Atau ImageOptim untuk Mac

2. **Format Terbaik**
   - JPG untuk foto
   - PNG untuk gambar dengan transparansi
   - WebP untuk performa terbaik (optional)

3. **Naming Convention**
   - Gunakan lowercase
   - Gunakan dash (-) untuk spasi
   - Contoh: `my-profile-pic.jpg`

## 🔗 Mengubah Path Gambar di Komponen

Jika Anda mengganti nama file, update di komponen:

### About.jsx
```jsx
<img src="/images/profile.jpg" alt="Profile" />
```

### Projects.jsx
```jsx
const projects = [
  {
    id: 1,
    image: '/images/project-1.jpg',
    ...
  },
  ...
]
```

## ⚠️ Troubleshooting

### Gambar tidak muncul
1. Pastikan file ada di `public/images/`
2. Cek path di komponen (gunakan `/images/nama-file.jpg`)
3. Refresh browser dengan Ctrl+Shift+R (hard refresh)
4. Restart dev server dengan `npm run dev`

### Gambar blur atau tidak jelas
1. Cek ukuran file (harus sesuai dengan yang ditentukan)
2. Tingkatkan kualitas gambar
3. Gunakan image yang lebih besar lalu crop

### Build terlalu besar
1. Kompresi gambar lebih lanjut
2. Gunakan WebP format
3. Implementasi lazy loading (optional)

---

Happy customizing! 🎨
