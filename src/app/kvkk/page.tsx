'use client'

import { motion } from 'framer-motion'
import { BookOpen, Shield, Mail, Calendar, Users, Lock, Eye, Database, FileText, AlertTriangle, Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function KVKK() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
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
              <span className="text-xl font-bebas text-primary-900">
                TALEFARM
              </span>
            </motion.a>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-6"
            >
              <a href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-open-sauce">Ana Sayfa</a>
              
              {/* Özellikler Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown('features')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors font-open-sauce">
                  <span>Özellikler</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'features' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'features' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onMouseEnter={() => setOpenDropdown('features')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-56 z-50"
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      <a href="/#features" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Çizim Canlandırma</a>
                      <a href="/#features" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Hikaye Modu</a>
                      <a href="/#features" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Uyku Hikayeleri</a>
                      <a href="/#features" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Eğitici Oyuncağım</a>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Yasal Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown('legal')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors font-open-sauce">
                  <span>Yasal</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'legal' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'legal' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onMouseEnter={() => setOpenDropdown('legal')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-56 z-50"
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      <a href="/privacy" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Gizlilik Politikası</a>
                      <a href="/terms" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Kullanım Şartları</a>
                      <a href="/kvkk" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">KVKK</a>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Destek Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown('support')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors font-open-sauce">
                  <span>Destek</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'support' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'support' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onMouseEnter={() => setOpenDropdown('support')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-56 z-50"
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      <a href="/support" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Yardım Merkezi</a>
                      <a href="/#parents" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Ebeveyn Rehberi</a>
                      <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">İletişim</a>
                    </div>
                  </motion.div>
                )}
              </div>
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
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                KVKK Aydınlatma Metni
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">Yürürlük Tarihi: 25 Eylül 2025</span>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TaleFarm uygulaması kullanıcılarının kişisel verilerinin korunması ve işlenmesi hakkında 
              bilgilendirme metnidir. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanmıştır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: Veri Sorumlusu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">1. Veri Sorumlusu</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Veri sorumlusu:</strong> TaleFarm uygulaması geliştiricisi
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">İletişim e-posta adresi:</strong> talefarm.app@gmail.com
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Toplanan Kişisel Veriler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">2. Toplanan Kişisel Veriler</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="mb-4">TaleFarm uygulaması kullanıcılarından aşağıdaki kişisel veriler toplanmaktadır:</p>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>E-posta adresi</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcı adı</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Doğum tarihi (yaş doğrulama ve 13 yaş altı kullanıcılar için ebeveyn onayı amacıyla)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Hikaye okuma geçmişi</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Tercihler ve ayarlar</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Uygulama kullanım verileri (log kayıtları, performans verileri)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcının uygulamaya yüklediği fotoğraflar ve görseller</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Çizim görselleri (Çizim Canlandır özelliği): Kullanıcının çizdiği görseller betimlenip istenilen stilde görsel oluşturmak için kullanılır. Çizimler "Çizimlerim" sayfasında saklanır ve kullanıcı istediği zaman kalıcı olarak silebilir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Oyuncak görselleri (Oyuncak Canlandır özelliği): Kullanıcı isterse oyuncağının fotoğrafını yükleyebilir. Bu görseller uygulama içindeki "Oyuncaklar" bölümünde saklanır ve hikayelerde kullanılır. Kullanıcı istediği zaman bu görselleri silebilir.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Kişisel Verilerin İşlenme Amaçları */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">3. Kişisel Verilerin İşlenme Amaçları</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Hesap oluşturma ve yönetimi</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kişiselleştirilmiş hikaye ve görsel önerileri sunmak</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Uygulama performansını izlemek ve iyileştirmek</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Güvenlik ve dolandırıcılığı önlemek</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Hizmetlerin ve içeriklerin geliştirilmesi</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Yasal yükümlülükleri yerine getirmek</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcıların yüklediği görselleri içerik üretimi ve görselleştirme amacıyla işlemek</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Çizim Canlandır özelliği ile kullanıcı çizimlerini AI destekli görsel oluşturma için işlemek</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Oyuncak Canlandır özelliği ile oyuncak görsellerini hikaye içeriklerinde kullanmak</span>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Kişisel Verilerin Aktarılması */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border-2 border-blue-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">4. Kişisel Verilerin Aktarılması</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Kullanıcı verileri, uygulama içi içerik üretimi ve hizmet geliştirme amacıyla anonim olarak üçüncü taraf yapay zekâ servis sağlayıcılarına geçici olarak iletilebilir (ör. Vertex AI, OpenRouter). Bu servisler verileri yalnızca işlem süresince işler, kalıcı olarak saklamaz.</p>
            </div>
          </motion.div>

          {/* Section 5: Kişisel Verilerin Saklanma Süresi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">5. Kişisel Verilerin Saklanma Süresi</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Toplanan kişisel veriler, kullanıcı hesabı aktif olduğu sürece saklanır. Hesap silindiğinde veya KVKK kapsamında silme talebi geldiğinde, tüm veriler kalıcı olarak silinir.</p>
            </div>
          </motion.div>

          {/* Section 6: Kullanıcı Hakları */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border-2 border-green-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">6. Kullanıcı Hakları</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="mb-4">Kullanıcılar KVKK kapsamında aşağıdaki haklara sahiptir:</p>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Kişisel verilerinin işlenip işlenmediğini öğrenme</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>İşlenen verilerine erişme</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Yanlış veya eksik verileri düzeltme</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Verilerin silinmesini veya yok edilmesini talep etme</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Veri işleme faaliyetlerine itiraz etme</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Yetkili kurumlara şikayette bulunma</span>
              </div>
            </div>
          </motion.div>

          {/* Section 7: Veri Güvenliği */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">7. Veri Güvenliği</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Tüm veriler SSL şifreleme ile korunur.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Veriler güvenli sunucularda saklanır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Düzenli güvenlik testleri ve denetimler yapılır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Erişim yetkileri sadece yetkili personelle sınırlıdır.</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">📩 İletişim</h3>
            <p className="text-lg mb-6 opacity-90">
              KVKK ile ilgili her türlü soru, talep veya şikayet için bizimle iletişime geçebilirsiniz:
            </p>
            <div className="text-lg mb-6">
              <p><strong>E-posta:</strong> talefarm.app@gmail.com</p>
            </div>
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
