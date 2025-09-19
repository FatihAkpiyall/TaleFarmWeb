'use client'

import { motion } from 'framer-motion'
import { BookOpen, Shield, ArrowLeft, Mail, Calendar, Users, Lock, Eye, Heart, Globe } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Gizlilik Politikası
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">Yürürlük Tarihi: 19 Eylül 2025</span>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tale Farm uygulaması, kullanıcılarının gizliliğine büyük önem vermektedir. 
              Bu Gizlilik Politikası, uygulamamızın topladığı bilgileri, kullanım amaçlarını ve kullanıcı haklarını açıklamaktadır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: Toplanan Veriler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">1. Toplanan Veriler</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">E-posta Adresi:</strong> Sadece kayıt ve giriş işlemleri için toplanır.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Kullanıcı İçeriği:</strong> Kullanıcının kendi isteğiyle galerisinden yüklediği görseller ve oluşturduğu hikayeler.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Kullanım Amaçları */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">2. Kullanım Amaçları</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcı hesabı oluşturmak ve yönetmek.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Uygulama içi deneyimi geliştirmek ve kişiselleştirmek.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Galeri erişimi yalnızca kullanıcının kendi yüklediği görsellerle sınırlıdır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Teknik sorunların çözülmesi ve uygulama performansının artırılması.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Verilerin Paylaşımı */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">3. Verilerin Paylaşımı</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcı verileri üçüncü taraflarla paylaşılmaz veya satılmaz.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Yalnızca yasal zorunluluk hallerinde resmi makamlarla paylaşılabilir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Hizmet sağlayıcılarımız, uygulama işlevselliğini sağlamak için sınırlı ve güvenli veri erişimine sahip olabilir.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Veri Güvenliği */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">4. Veri Güvenliği</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>E-posta adresleri ve kullanıcı içerikleri güvenli ortamlarda saklanır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcı verilerine izinsiz erişimi engellemek için gerekli teknik önlemler alınır.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Çocukların Gizliliği */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8 border-2 border-primary-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">5. Çocukların Gizliliği</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Tale Farm, COPPA (Children's Online Privacy Protection Act) ve KVKK hükümlerine uygun olarak çocukların gizliliğini korumayı taahhüt eder.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Uygulama 13 yaş ve üzeri kullanıcılar için tasarlanmıştır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>13 yaş altı kullanıcılar, velilerinin veya yasal vasilerinin onayı olmadan uygulamayı kullanamaz.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Reklamlar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">6. Reklamlar</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Reklamlar yalnızca yükleme ekranında gösterilir. Reklam sağlayıcıları kullanıcı verilerini kullanabilir, ancak bizim tarafımızdan üçüncü taraflarla paylaşılmaz.</p>
            </div>
          </motion.div>

          {/* Section 7: Haklarınız */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">7. Haklarınız</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcılar, verilerinin silinmesini, düzeltilmesini veya güncellenmesini talep edebilir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcılar dilediği zaman uygulama içinden hesabını ve kendisine ait tüm verileri kalıcı olarak silebilir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <span>Bunun için </span>
                  <a 
                    href="mailto:talefarm.app@gmail.com" 
                    className="text-primary-600 hover:text-primary-700 font-semibold underline"
                  >
                    talefarm.app@gmail.com
                  </a>
                  <span> üzerinden de bizimle iletişime geçebilirsiniz.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 8: Değişiklikler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">8. Değişiklikler</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeler uygulama üzerinden veya e-posta ile duyurulacaktır.</p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Sorularınız mı var?</h3>
            <p className="text-lg mb-6 opacity-90">
              Gizlilik politikamız hakkında herhangi bir sorunuz varsa, bizimle iletişime geçmekten çekinmeyin.
            </p>
            <a 
              href="mailto:talefarm.app@gmail.com"
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>İletişime Geç</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
