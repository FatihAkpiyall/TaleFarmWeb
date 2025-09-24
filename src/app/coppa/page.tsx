'use client'

import { motion } from 'framer-motion'
import { BookOpen, Shield, ArrowLeft, Mail, Calendar, Users, Lock, Eye, Heart, Globe, Baby } from 'lucide-react'
import Link from 'next/link'

export default function CoppaPolicy() {
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
              className="flex items-center space-x-4"
            >
              <Link 
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Ana Sayfaya Dön</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Baby className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                COPPA Gizlilik Politikası
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">Yürürlük Tarihi: 19 Eylül 2025</span>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tale Farm, çocukların çevrimiçi gizliliğini korumak için COPPA (Children's Online Privacy Protection Act) 
              yasalarına tam uyum sağlamaktadır. Bu politika, 13 yaş altı çocuklar için özel olarak hazırlanmıştır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: COPPA Nedir? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">COPPA Nedir?</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                COPPA (Children's Online Privacy Protection Act), 13 yaş altındaki çocukların çevrimiçi gizliliğini 
                korumak için ABD'de kabul edilmiş federal bir yasadır. Bu yasa, çocuklardan kişisel bilgi toplayan 
                web sitelerinin ve uygulamaların belirli gereklilikleri yerine getirmesini zorunlu kılar.
              </p>
              <p>
                Tale Farm olarak, bu yasaya tam uyum sağlıyor ve çocukların güvenliğini öncelikli tutuyoruz.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Çocuklar İçin Özel Koruma */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8 border-2 border-primary-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Çocuklar İçin Özel Koruma</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span><strong>Ebeveyn Onayı:</strong> 13 yaş altı çocuklar için ebeveyn onayı gereklidir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span><strong>Sınırlı Veri Toplama:</strong> Sadece uygulama işlevselliği için gerekli minimum veri toplanır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span><strong>Güvenli Depolama:</strong> Tüm veriler güvenli sunucularda şifrelenmiş olarak saklanır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span><strong>Üçüncü Taraf Paylaşımı Yok:</strong> Çocuk verileri hiçbir üçüncü taraf ile paylaşılmaz.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Toplanan Veriler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">13 Yaş Altı Çocuklardan Toplanan Veriler</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 font-semibold">⚠️ Önemli: Sadece ebeveyn onayı ile toplanan veriler:</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">E-posta Adresi:</strong> Sadece ebeveyn e-posta adresi (çocuğun değil)
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Kullanıcı İçeriği:</strong> Çocuğun kendi isteğiyle oluşturduğu hikayeler ve çizimler
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Galeri Görselleri:</strong> Sadece çocuğun kendi cihazından seçtiği görseller
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Ebeveyn Hakları */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Ebeveyn Hakları</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Çocuğunuzun verilerinin silinmesini talep edebilirsiniz.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Çocuğunuzun verilerinin nasıl kullanıldığını öğrenebilirsiniz.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Çocuğunuzun verilerinin üçüncü taraflarla paylaşılmasını engelleyebilirsiniz.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Çocuğunuzun hesabının tamamen kapatılmasını talep edebilirsiniz.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Veri Güvenliği */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Veri Güvenliği</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Tüm veriler SSL şifreleme ile korunur.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Veriler güvenli, şifrelenmiş sunucularda saklanır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Düzenli güvenlik denetimleri yapılır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Sadece yetkili personel verilere erişebilir.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 6: İletişim */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Sorularınız mı var?</h3>
            <p className="text-lg mb-6 opacity-90">
              COPPA politikamız hakkında herhangi bir sorunuz varsa veya çocuğunuzun verileriyle ilgili bir talebiniz varsa, 
              bizimle iletişime geçmekten çekinmeyin.
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:talefarm.app@gmail.com"
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>İletişime Geç</span>
              </a>
              <div className="text-sm opacity-80">
                <p>E-posta: talefarm.app@gmail.com</p>
                <p>Konu: COPPA - Çocuk Verileri</p>
              </div>
            </div>
          </motion.div>

          {/* Section 7: Tam Gizlilik Politikası Linki */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-gray-200"
          >
            <Globe className="w-12 h-12 mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-bold mb-4 text-gray-800">Tam Gizlilik Politikası</h3>
            <p className="text-gray-600 mb-6">
              Genel gizlilik politikamızı okumak için aşağıdaki linke tıklayın.
            </p>
            <Link 
              href="/privacy"
              className="bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
            >
              <Shield className="w-5 h-5" />
              <span>Gizlilik Politikası</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
