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
              transition={{ duration: 0.4 }}
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
              transition={{ duration: 0.4 }}
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
            transition={{ duration: 0.5 }}
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
              <span className="text-lg">Yürürlük Tarihi: 25 Eylül 2025</span>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TaleFarm olarak, kullanıcılarımızın ve özellikle çocukların gizliliğini korumak bizim için önceliklidir. 
              Bu gizlilik politikası, <strong>Çocukların Çevrimiçi Gizliliğini Koruma Yasası (COPPA)</strong>, 
              <strong>KVKK (6698 Sayılı Kişisel Verilerin Korunması Kanunu)</strong> ve diğer geçerli veri koruma düzenlemelerine uygun olarak hazırlanmıştır.
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
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">📊 Topladığımız Veriler</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">E-posta adresi:</strong> Hesap oluşturma, giriş yapma ve iletişim için
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Kullanıcı adı:</strong> Platformda kimliğinizi belirlemek için
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Doğum tarihi:</strong> Kullanıcının yaşını doğrulamak, 13 yaş altı çocuklar için ebeveyn onayı almak ve yaşa uygun içerik sağlamak için
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Ebeveyn e-posta adresi (13 yaş altı kullanıcılar için):</strong> Onay süreci ve bilgilendirme için
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Hikaye okuma geçmişi:</strong> Daha iyi içerik önerileri sunmak için
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Tercihler ve ayarlar:</strong> Kişiselleştirilmiş deneyim sağlamak için
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Uygulama kullanım verileri (log kayıtları, performans verileri):</strong> Uygulamanın işleyişini geliştirmek için
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Çizim görselleri (Çizim Canlandır özelliği):</strong> Kullanıcının çizdiği görseller betimlenip istenilen stilde görsel oluşturmak için kullanılır. Çizimler "Çizimlerim" sayfasında saklanır ve kullanıcı istediği zaman kalıcı olarak silebilir.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Oyuncak görselleri (Oyuncak Canlandır özelliği):</strong> Kullanıcı isterse oyuncağının fotoğrafını yükleyebilir. Bu görseller uygulama içindeki "Oyuncaklar" bölümünde saklanır ve hikayelerde kullanılır. Kullanıcı istediği zaman bu görselleri silebilir.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: 13 Yaş Altı Kullanıcılar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8 border-2 border-primary-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">👶 13 Yaş Altı Kullanıcılar</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>13 yaşından küçük kullanıcılar uygulamayı yalnızca <strong>ebeveyn onayı</strong> ile kullanabilir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kayıt sırasında <strong>doğum tarihi</strong> istenir. 13 yaş altı kullanıcılar için ebeveyn onayı zorunludur.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Ebeveyn onayı alınmadan <strong>kişisel veri toplanmaz, işlenmez veya saklanmaz</strong>.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Ebeveynler, çocuklarının verilerini istedikleri zaman görüntüleme, düzeltme veya silme hakkına sahiptir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Ebeveyn onayı geri çekildiğinde, çocuğun tüm verileri silinir ve hesap kapatılır.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 3: 13 Yaş Üstü Kullanıcılar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">👥 13 Yaş Üstü Kullanıcılar</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Doğum tarihi doğrulaması sonrası kullanıcı doğrudan kayıt olabilir. Yine de tüm kullanıcıların verileri aynı yüksek güvenlik standartları ile korunur.</p>
            </div>
          </motion.div>

          {/* Section 4: Verilerin Kullanım Amaçları */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">🎯 Verilerin Kullanım Amaçları</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Hesap oluşturma ve yönetimi</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Çocuğa uygun ve kişiselleştirilmiş hikaye önerileri sağlamak</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Eğitim amaçlı içerikler sunmak</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Uygulama performansını artırmak ve hataları gidermek</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Dolandırıcılık ve kötüye kullanımın önlenmesi</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Yasal yükümlülüklerin yerine getirilmesi</span>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Veri Güvenliği */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">🔒 Veri Güvenliği</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Tüm veriler <strong>SSL şifreleme</strong> ile korunur.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Veriler güvenli sunucularda saklanır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Erişim sadece yetkili personelle sınırlıdır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Düzenli güvenlik testleri ve denetimler yapılır.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Veri Silme Hakkı */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">🗑️ Veri Silme Hakkı</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcılar (veya ebeveynler) hesaplarını istedikleri zaman silebilir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Hesap silindiğinde tüm kişisel veriler, ebeveyn onay kayıtları ve kullanım geçmişi kalıcı olarak kaldırılır.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 7: Kullanıcı Hakları */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">⚖️ Kullanıcı Hakları</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="mb-4">KVKK ve COPPA kapsamında tüm kullanıcıların (ve ebeveynlerin) şu hakları vardır:</p>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Hangi verilerin toplandığını öğrenme</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Verilere erişme ve yanlış verileri düzeltme</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Verilerin silinmesini talep etme</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Veri işleme faaliyetlerine itiraz etme</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Yetkili kurumlara şikayette bulunma</span>
              </div>
            </div>
          </motion.div>

          {/* Section 8: Politika Değişiklikleri */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">🔄 Politika Değişiklikleri</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler, uygulama içi bildirimler veya e-posta aracılığıyla kullanıcılarla paylaşılır.</p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">📩 İletişim</h3>
            <p className="text-lg mb-6 opacity-90">
              Herhangi bir soru, talep veya şikayet için bize ulaşabilirsiniz:
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
