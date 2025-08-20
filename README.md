# TaleFarm Website

Modern ve responsive TaleFarm hikaye uygulaması landing page'i.

## 🚀 Özellikler

- **Modern Tasarım**: Tailwind CSS ile responsive tasarım
- **Animasyonlar**: Framer Motion ile smooth animasyonlar
- **SEO Optimized**: Next.js 14 ile SEO dostu yapı
- **Performance**: Hızlı yükleme ve optimize edilmiş kod
- **Mobile First**: Tüm cihazlarda mükemmel görünüm

## 🛠️ Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasyonlar
- **Lucide React** - İkonlar

## 📦 Kurulum

1. **Bağımlılıkları yükle:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlat:**
```bash
npm run dev
```

3. **Tarayıcıda aç:**
```
http://localhost:3000
```

## 🚀 Deploy

### Vercel (Önerilen)

1. **Vercel'e git:** https://vercel.com
2. **GitHub hesabınla giriş yap**
3. **"New Project" butonuna tıkla**
4. **GitHub repository'ni seç**
5. **Deploy et**

### Manuel Deploy

```bash
npm run build
npm start
```

## 📁 Proje Yapısı

```
tale-farm-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
├── public/
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Özelleştirme

### Renkler
`tailwind.config.js` dosyasında renkleri özelleştirebilirsin:

```javascript
colors: {
  primary: {
    500: '#22c55e', // Ana yeşil renk
  },
  secondary: {
    500: '#14b8a6', // Ana turkuaz renk
  }
}
```

### İçerik
`src/app/page.tsx` dosyasında metinleri ve içeriği değiştirebilirsin.

## 📱 Responsive

Website tüm cihazlarda mükemmel görünür:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔧 Geliştirme

### Yeni Sayfa Ekleme
```bash
# src/app/ yeni-sayfa/page.tsx
```

### Yeni Component Ekleme
```bash
# src/components/ yeni-component.tsx
```

## 📄 Lisans

MIT License

## 🤝 Katkıda Bulunma

1. Fork yap
2. Feature branch oluştur (`git checkout -b feature/amazing-feature`)
3. Commit yap (`git commit -m 'Add amazing feature'`)
4. Push yap (`git push origin feature/amazing-feature`)
5. Pull Request aç

## 📞 İletişim

- **Website:** https://tale-farm.com
- **Email:** support@tale-farm.com
- **GitHub:** [@tale-farm](https://github.com/tale-farm)

---

**TaleFarm** - Hikaye yazmanın geleceği 🚀
