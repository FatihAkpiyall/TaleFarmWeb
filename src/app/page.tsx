'use client'

import { motion } from 'framer-motion'
import { BookOpen, Sparkles, Download, Star, Users, Zap, Heart, Brain, Smile, Shield, Globe, Award, Smartphone, Palette, Gift, Moon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <img 
                src="/logo.png" 
                alt="TaleFarm Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                TaleFarm
              </span>
            </motion.a>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Özellikler</a>
              <a href="#kids" className="text-gray-600 hover:text-primary-600 transition-colors">Çocuklar İçin</a>
              <a href="#parents" className="text-gray-600 hover:text-primary-600 transition-colors">Ebeveynler</a>
              <a href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">İletişim</a>
              <a href="/support" className="text-gray-600 hover:text-primary-600 transition-colors">Destek</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Büyük Animasyonlu Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0 
            }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Glow efekti */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-3xl -z-10"
              />
              <img 
                src="/logo.png" 
                alt="TaleFarm Logo" 
                className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl filter brightness-110"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Çocukların Hayal
              </span>
              <br />
              <span className="text-gray-800">Dünyasını Keşfedin</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              TaleFarm, çocukların yaratıcılığını geliştiren, güvenli ve eğitici bir hikaye oluşturma uygulamasıdır. 
              Yapay zeka destekli teknolojimizle çocuklar kendi hikayelerini yazabilir, karakterler yaratabilir ve 
              hayal güçlerini sınırsızca kullanabilirler.
            </p>

            <motion.div 
              className="flex flex-col gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Store Butonları */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Apple App Store */}
                <motion.a
                  href="https://apps.apple.com/tr/app/talefarm-hikaye-ve-%C3%A7izim/id6753679059?l=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-3 min-w-[200px] justify-center"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs leading-tight">App Store'dan</span>
                    <span className="text-lg leading-tight font-semibold">İndir</span>
                  </div>
                </motion.a>

                {/* Google Play Store */}
                <motion.button
                  disabled
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#01875f] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-3 min-w-[200px] justify-center opacity-75 cursor-not-allowed"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs leading-tight">Google Play'den</span>
                    <span className="text-lg leading-tight font-semibold">İndir</span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-60 right-10 w-16 h-16 bg-secondary-200 rounded-full opacity-20"
          />
        </div>
      </section>

      {/* Kids Section */}
      <section id="kids" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Çocuklar İçin Özel Tasarım
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TaleFarm, çocukların yaş grubuna özel olarak tasarlanmış, güvenli ve eğlenceli bir deneyim sunar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Yaratıcılığı Geliştirir",
                description: "Çocuklar kendi hikayelerini yazarak hayal güçlerini geliştirir ve yaratıcı düşünme becerilerini artırır."
              },
              {
                icon: Heart,
                title: "Güvenli Ortam",
                description: "Çocuk dostu arayüz ve güvenlik önlemleriyle tamamen güvenli bir dijital ortam."
              },
              {
                icon: Smile,
                title: "Eğlenceli Öğrenme",
                description: "Oyunlaştırılmış özelliklerle çocuklar eğlenirken öğrenir ve gelişir."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Uygulama Özellikleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TaleFarm'in gelişmiş özellikleriyle çocuklar hikaye yazmanın keyfini çıkarır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Yapay Zeka Destekli Hikaye",
                description: "Yapay zeka ile çocuklar için özelleştirilmiş hikayeler üretirler."
              },
              {
                icon: Palette,
                title: "Çizim Canlandırma",
                description: "Çocuklarınızın çizimlerini renkli temalarda canlandırır."
              },
              {
                icon: Shield,
                title: "Güvenli İçerik",
                description: "Tüm içerikler çocuk dostu ve eğitici değerlerle kontrol edilir."
              },
              {
                icon: BookOpen,
                title: "Eğitici Oyuncağım",
                description: "Çocuğunuzun en sevdiği oyuncağının hikayelerde yer almasına imkan tanır."
              },
              {
                icon: Moon,
                title: "Uyku Hikayeleri",
                description: "Çocuğun uyku rutinine geçmesini sağlayan uyku hikayeleri anlatır."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parents Section */}
      <section id="parents" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Ebeveynler İçin <br />
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Güvenli Seçim
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                TaleFarm, çocuklarınızın dijital dünyada güvenle vakit geçirmesi için tasarlanmıştır. 
                Eğitici içerik, güvenlik önlemleri ve ebeveyn kontrolü ile tam güvenlik sağlar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Yaş grubuna uygun içerik</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Reklamsız deneyim</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ebeveyn Kontrolü</h3>
                <p className="mb-6">Çocuklarınızın aktivitelerini takip edin ve güvenli bir ortam sağlayın.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Mutlu Çocuk" },
              { number: "50K+", label: "Oluşturulan Hikaye" },
              { number: "4.9", label: "Ebeveyn Puanı", icon: Star },
              { number: "100%", label: "Güvenli İçerik", icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-white"
              >
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold">{stat.number}</span>
                  {stat.icon && <stat.icon className="w-6 h-6" />}
                </div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Ebeveynler Ne Diyor?
            </h2>
          </motion.div>
          
          <div className="relative">
            {/* Mobile: Scrollable horizontal container */}
            <div className="flex gap-6 overflow-x-auto pb-4 md:hidden scrollbar-hide snap-x snap-mandatory">
              {[
                {
                  name: "Ayşe Yılmaz",
                  comment: "Çocuğum bu uygulamayı çok seviyor! Her gece uyku öncesi hikayeler dinliyor ve çok mutlu. Artık uyku rutini çok daha kolay geçiyor. Kesinlikle tavsiye ederim!",
                  stars: 5
                },
                {
                  name: "Mehmet Demir",
                  comment: "Harika bir uygulama! Çocuğumun yaratıcılığını geliştirdiğini gözlemliyorum. Hem eğitici hem de eğlenceli. 5 yıldızı hak ediyor!",
                  stars: 5
                },
                {
                  name: "Zeynep Kaya",
                  comment: "Uygulamadan çok memnunuz! Özellikle uyku hikayeleri özelliği çok faydalı oldu. Çocuğum artık rahatça uyuyor. Teşekkürler TaleFarm!",
                  stars: 5
                },
                {
                  name: "Can Özkan",
                  comment: "Çocuğum için çok faydalı oldu. Hem hayal gücü gelişti hem de dil becerileri arttı. Eğitici içerikler gerçekten kaliteli. Çok mutluyuz!",
                  stars: 5
                },
                {
                  name: "Elif Şahin",
                  comment: "Kesinlikle harika! Çocuğum artık hikaye yazmayı çok seviyor. Güvenli içerik sayesinde rahatça kullanabiliyoruz. Mükemmel bir uygulama!",
                  stars: 5
                },
                {
                  name: "Burak Arslan",
                  comment: "Uygulama gerçekten çocuk dostu ve eğitici. Özellikle AI destekli hikayeler çok yaratıcı. Çocuğumun gelişimine çok katkı sağladı!",
                  stars: 5
                },
                {
                  name: "Selin Yıldız",
                  comment: "Çok memnunuz! Çocuğumun uyku rutini artık çok daha keyifli. Uyku hikayeleri sayesinde rahatça uyuyor. Herkese tavsiye ederim!",
                  stars: 5
                }
              ].map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] sm:w-96 snap-start bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-4 flex-wrap">
                    <div className="flex space-x-1 mr-4 mb-2">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-800">{review.name}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
            
            {/* Desktop: Animated scrolling */}
            <div className="hidden md:block relative overflow-hidden">
              <div className="flex gap-6 animate-scroll-reviews">
                {[
                  {
                    name: "Ayşe Yılmaz",
                    comment: "Çocuğum bu uygulamayı çok seviyor! Her gece uyku öncesi hikayeler dinliyor ve çok mutlu. Artık uyku rutini çok daha kolay geçiyor. Kesinlikle tavsiye ederim!",
                    stars: 5
                  },
                  {
                    name: "Mehmet Demir",
                    comment: "Harika bir uygulama! Çocuğumun yaratıcılığını geliştirdiğini gözlemliyorum. Hem eğitici hem de eğlenceli. 5 yıldızı hak ediyor!",
                    stars: 5
                  },
                  {
                    name: "Zeynep Kaya",
                    comment: "Uygulamadan çok memnunuz! Özellikle uyku hikayeleri özelliği çok faydalı oldu. Çocuğum artık rahatça uyuyor. Teşekkürler TaleFarm!",
                    stars: 5
                  },
                  {
                    name: "Can Özkan",
                    comment: "Çocuğum için çok faydalı oldu. Hem hayal gücü gelişti hem de dil becerileri arttı. Eğitici içerikler gerçekten kaliteli. Çok mutluyuz!",
                    stars: 5
                  },
                  {
                    name: "Elif Şahin",
                    comment: "Kesinlikle harika! Çocuğum artık hikaye yazmayı çok seviyor. Güvenli içerik sayesinde rahatça kullanabiliyoruz. Mükemmel bir uygulama!",
                    stars: 5
                  },
                  {
                    name: "Burak Arslan",
                    comment: "Uygulama gerçekten çocuk dostu ve eğitici. Özellikle AI destekli hikayeler çok yaratıcı. Çocuğumun gelişimine çok katkı sağladı!",
                    stars: 5
                  },
                  {
                    name: "Selin Yıldız",
                    comment: "Çok memnunuz! Çocuğumun uyku rutini artık çok daha keyifli. Uyku hikayeleri sayesinde rahatça uyuyor. Herkese tavsiye ederim!",
                    stars: 5
                  }
                ].concat([
                  {
                    name: "Ayşe Yılmaz",
                    comment: "Çocuğum bu uygulamayı çok seviyor! Her gece uyku öncesi hikayeler dinliyor ve çok mutlu. Artık uyku rutini çok daha kolay geçiyor. Kesinlikle tavsiye ederim!",
                    stars: 5
                  },
                  {
                    name: "Mehmet Demir",
                    comment: "Harika bir uygulama! Çocuğumun yaratıcılığını geliştirdiğini gözlemliyorum. Hem eğitici hem de eğlenceli. 5 yıldızı hak ediyor!",
                    stars: 5
                  },
                  {
                    name: "Zeynep Kaya",
                    comment: "Uygulamadan çok memnunuz! Özellikle uyku hikayeleri özelliği çok faydalı oldu. Çocuğum artık rahatça uyuyor. Teşekkürler TaleFarm!",
                    stars: 5
                  },
                  {
                    name: "Can Özkan",
                    comment: "Çocuğum için çok faydalı oldu. Hem hayal gücü gelişti hem de dil becerileri arttı. Eğitici içerikler gerçekten kaliteli. Çok mutluyuz!",
                    stars: 5
                  },
                  {
                    name: "Elif Şahin",
                    comment: "Kesinlikle harika! Çocuğum artık hikaye yazmayı çok seviyor. Güvenli içerik sayesinde rahatça kullanabiliyoruz. Mükemmel bir uygulama!",
                    stars: 5
                  },
                  {
                    name: "Burak Arslan",
                    comment: "Uygulama gerçekten çocuk dostu ve eğitici. Özellikle AI destekli hikayeler çok yaratıcı. Çocuğumun gelişimine çok katkı sağladı!",
                    stars: 5
                  },
                  {
                    name: "Selin Yıldız",
                    comment: "Çok memnunuz! Çocuğumun uyku rutini artık çok daha keyifli. Uyku hikayeleri sayesinde rahatça uyuyor. Herkese tavsiye ederim!",
                    stars: 5
                  }
                ]).map((review, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-96 bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-1 mr-4">
                        {[...Array(review.stars)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-bold text-gray-800">{review.name}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Hikaye İzlemenin <br />
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Yeni Yolu
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                TaleFarm, çocukların yaratıcılığını geliştiren, güvenli ve eğitici bir platformdur. 
                Yapay zeka teknolojisi ile desteklenen araçlarımızla çocuklar hayal güçlerini 
                sınırsızca kullanabilir ve kendi hikayelerini yaratabilirler.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Kolay kullanım arayüzü</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Gelişmiş AI destekli özellikler</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Ebeveyn kontrolü</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Hemen Başlayın</h3>
                <p className="mb-6">Uygulamayı indirin ve çocuklarınızın yaratıcılığını keşfedin!</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Apple App Store */}
                  <motion.a
                    href="https://apps.apple.com/tr/app/talefarm-hikaye-ve-%C3%A7izim/id6753679059?l=tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2 justify-center"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span>App Store'dan İndir</span>
                  </motion.a>
                  
                  {/* Google Play Store */}
                  <motion.button
                    disabled
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#01875f] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2 justify-center opacity-75 cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>Google Play'den İndir</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="TaleFarm Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">TaleFarm</span>
              </div>
              <p className="text-gray-400">
                Çocukların yaratıcılığını geliştiren güvenli dijital platform.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ürün</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Özellikler</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Güvenlik</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Güncellemeler</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/support" className="hover:text-white transition-colors">Yardım Merkezi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ebeveyn Rehberi</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Kullanım Şartları</a></li>
                <li><a href="/kvkk" className="hover:text-white transition-colors">KVKK</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TaleFarm. Tüm hakları saklıdır. Çocuklar için güvenli dijital deneyim.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
