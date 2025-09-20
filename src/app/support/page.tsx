'use client'

import { motion } from 'framer-motion'
import { BookOpen, AlertTriangle, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Support() {
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
              <Link href="/#features" className="text-gray-600 hover:text-primary-600 transition-colors">Özellikler</Link>
              <Link href="/#kids" className="text-gray-600 hover:text-primary-600 transition-colors">Çocuklar İçin</Link>
              <Link href="/#parents" className="text-gray-600 hover:text-primary-600 transition-colors">Ebeveynler</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">İletişim</Link>
              <Link href="/support" className="text-primary-600 font-semibold">Destek</Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ana Sayfaya Dön</span>
            </Link>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Destek
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <span>Hesap Silme</span>
              </h2>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Uygulamamızda oluşturduğunuz hesabı dilediğiniz zaman kalıcı olarak silebilirsiniz. 
                Hesap silme işlemi yalnızca <strong className="text-primary-600">uygulama içinden</strong> gerçekleştirilebilir. 
                Web sitemiz üzerinden veya başka bir iletişim kanalıyla hesap silme talebi alınmamaktadır.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Hesabınızı Silmek İçin İzlemeniz Gereken Adımlar:
              </h3>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 mb-8">
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                    <span>Uygulamayı açın ve <strong>Profil</strong> sayfasına gidin.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                    <span><strong>Hesap Detayları</strong> bölümüne giriş yapın.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                    <span>Sayfanın altında yer alan <strong>"Hesabı Kalıcı Olarak Sil"</strong> seçeneğine tıklayın.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</span>
                    <span>Çıkan onay ekranında işleminizi doğrulayın.</span>
                  </li>
                </ol>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl mb-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-red-800 font-semibold mb-2">⚠️ Önemli Uyarı</h4>
                    <p className="text-red-700 text-sm leading-relaxed">
                      Hesabınızı kalıcı olarak sildikten sonra tüm kişisel verileriniz, hikayeleriniz ve 
                      uygulama içi kayıtlarınız geri getirilemeyecek şekilde silinecektir. Bu işlem geri alınamaz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 opacity-90" />
                <p className="text-lg mb-4">
                  Herhangi bir sorunuz olması halinde
                </p>
                <a 
                  href="mailto:destek@tale-farm.com" 
                  className="inline-block bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                >
                  Destek Ekibimizle İletişime Geçin
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
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
                <li><Link href="/#features" className="hover:text-white transition-colors">Özellikler</Link></li>
                <li><Link href="/#kids" className="hover:text-white transition-colors">Güvenlik</Link></li>
                <li><Link href="/#about" className="hover:text-white transition-colors">Güncellemeler</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/support" className="hover:text-white transition-colors">Yardım Merkezi</Link></li>
                <li><Link href="/#parents" className="hover:text-white transition-colors">Ebeveyn Rehberi</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">İletişim</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Kullanım Şartları</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">KVKK</Link></li>
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
