'use client'

import { motion } from 'framer-motion'
import { BookOpen, Sparkles, Download, Star, Users, Zap, Heart, Brain, Smile, Shield, Globe, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                TaleFarm
              </span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Özellikler</a>
              <a href="#kids" className="text-gray-600 hover:text-primary-600 transition-colors">Çocuklar İçin</a>
              <a href="#parents" className="text-gray-600 hover:text-primary-600 transition-colors">Ebeveynler</a>
              <a href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">İletişim</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Ücretsiz İndir</span>
              </button>
              
              <button className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-200 flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Demo İzle</span>
              </button>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI Destekli Yazım",
                description: "Yapay zeka ile hikaye fikirleri üretin ve yazım sürecini hızlandırın."
              },
              {
                icon: BookOpen,
                title: "Karakter Oluşturma",
                description: "Kendi karakterlerinizi tasarlayın ve hikayelerinize hayat verin."
              },
              {
                icon: Shield,
                title: "Güvenli İçerik",
                description: "Tüm içerikler çocuk dostu ve eğitici değerlerle kontrol edilir."
              },
              {
                icon: Globe,
                title: "Çoklu Dil",
                description: "Türkçe ve İngilizce dil desteği ile geniş kitlelere ulaşın."
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
                  <span className="text-gray-700">Ebeveyn kontrol paneli</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Reklamsız deneyim</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Gelişim raporları</span>
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
                <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Daha Fazla Bilgi
                </button>
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
                Hikaye Yazmanın <br />
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
                <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Ücretsiz İndir
                </button>
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
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
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
                <li><a href="#" className="hover:text-white transition-colors">Yardım Merkezi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ebeveyn Rehberi</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a></li>
                <li><a href="#" className="hover:text-white transition-colors">KVKK</a></li>
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
