'use client'

import { motion } from 'framer-motion'
import { BookOpen, FileText, ArrowLeft, Mail, Calendar, Users, Shield, CreditCard, AlertTriangle, Lock, Trash2, Globe, Settings, Eye } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Kullanım Şartları
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">Yürürlük Tarihi: 25 Eylül 2025</span>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bu Kullanıcı Sözleşmesi, TaleFarm uygulaması hizmetlerini kullanımınıza ilişkin koşulları belirler. 
              Uygulamayı indirerek, yükleyerek veya kullanarak bu Sözleşmeyi kabul etmiş sayılırsınız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: Tanımlar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">1. Tanımlar</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Geliştirici:</strong> Bu uygulamayı geliştiren kişi veya ekip.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Kullanıcı:</strong> Uygulamayı yükleyip kullanan gerçek kişiler.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">İçerik:</strong> Uygulama aracılığıyla oluşturulan yazılı, görsel, işitsel materyaller.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-gray-800">Jeton:</strong> Dijital içerik üretiminde kullanılan sanal birim; Hikaye Jetonu (HJ) ve Çizim Jetonu (ÇJ) olmak üzere ikiye ayrılır.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Uygulamanın Amacı */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">2. Uygulamanın Amacı</h2>
            </div>
            
            <div className="text-gray-600">
              <p>TaleFarm, ebeveynlerin çocuklarına yönelik kısa hikâyeler oluşturmasına ve çocukların çizimlerini çeşitli stillerde (gerçekçi, anime, animatif, çizgi film, yağlı boya, sulu boya) görselleştirmesine imkân sağlar. Ayrıca, oyuncak fotoğraflarına dayalı eğitici veya macera temalı hikâyeler oluşturulabilir.</p>
            </div>
          </motion.div>

          {/* Section 3: Kullanım Koşulları */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">3. Kullanım Koşulları</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Uygulama esas olarak ebeveyn kullanımı için tasarlanmıştır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Hikaye oluşturmak için metin (prompt) yazılması gerektiğinden temel okuma-yazma bilgisi gereklidir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcılar, uygulamada sunulan içerikleri yalnızca kişisel ve eğitsel amaçla kullanmalıdır.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcı tarafından oluşturulan içerikler uygulama sunucusunda geçici olarak saklanabilir.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Yaş Sınırı ve Çocuk Kullanıcılar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8 border-2 border-primary-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">4. Yaş Sınırı ve Çocuk Kullanıcılar</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Uygulama kaydı sırasında <strong>doğum tarihi</strong> istenir. 13 yaş altı kullanıcılar yalnızca ebeveyn onayı ile kayıt olabilir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>13 yaş altı kullanıcılar için jeton alımı ve içerik üretimi ebeveyn onayı gerektirir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Hikaye Kütüphanesi, daha önce oluşturulmuş hikâyeleri oynatmak isteyen küçük yaştaki kullanıcılar için erişime açıktır ve ebeveyn gözetimi önerilir.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Jeton Sistemi ve Ödeme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">5. Jeton Sistemi ve Ödeme</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Uygulama, iki tür jeton kullanır: Hikaye Jetonu (HJ) ve Çizim Jetonu (ÇJ).</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcı, ihtiyacına uygun jeton paketini satın alabilir veya aylık abonelik ile düzenli olarak jeton alabilir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Jetonlar üçüncü şahıslara devredilemez veya nakde çevrilemez.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>13 yaş altı kullanıcılar, jeton alımı için ebeveyn onayı vermelidir.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Jeton İade Politikası */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 mb-8 border-2 border-red-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">6. Jeton İade Politikası</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Kullanıcı, satın alma işlemini onayladığında <strong>"İade yapılmayacaktır"</strong> uyarısını görür. Hiçbir koşulda jeton iadesi yapılmaz.</p>
            </div>
          </motion.div>

          {/* Section 7: Reklamlar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">7. Reklamlar</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Uygulama çocuk gelişimi odaklıdır; reklam kullanımı minimum düzeyde tutulur. Reklamlar yalnızca içerik yüklenme ekranlarında gösterilir. Rahatsız edici veya bölücü reklamlar içermez.</p>
            </div>
          </motion.div>

          {/* Section 8: İçerik Sorumluluğu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">8. İçerik Sorumluluğu</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcılar, oluşturdukları içeriklerden tamamen kendileri sorumludur.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Uygulama, çocuklara uygun olmayan içerikleri filtrelemek için yapay zekâ denetimleri uygular ancak %100 başarı garantisi vermez.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcı, kasıtlı olarak uygunsuz içerik üretirse (şiddet, cinsellik, +18 içerik), oluşacak tüm hukuki ve etik sorumluluk kendisine aittir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Geliştirici, kullanıcı kaynaklı içeriklerden dolayı sorumlu tutulamaz.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcı içerikleri, anonim olarak uygulama geliştirme ve analiz amaçlı üçüncü taraf hizmet sağlayıcılarına geçici olarak iletilebilir.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 9: Fikri Mülkiyet Hakları */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">9. Fikri Mülkiyet Hakları</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Uygulamanın tüm yazılım, tasarım, içerik altyapısı ve markaları geliştiriciye aittir. Kullanıcının oluşturduğu içerikler kişisel kullanım içindir; ticari amaçla paylaşımı yasaktır.</p>
            </div>
          </motion.div>

          {/* Section 10: Sözleşme Değişiklikleri */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">10. Sözleşme Değişiklikleri</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Geliştirici, bu sözleşmede dilediği zaman güncelleme yapabilir. Güncellenmiş sözleşme uygulama içinde yayınlandığı anda yürürlüğe girer ve kullanıcılar bilgilendirilir.</p>
            </div>
          </motion.div>

          {/* Section 11: Hesap ve Veri Silme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">11. Hesap ve Veri Silme</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcı, uygulamayı silerek hesabını pasifleştirebilir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>E-posta adresi ile yapılan kayıtlarda, kullanıcı veya ebeveyn talep ederse tüm veriler sistemden silinir.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <span>Kullanıcılar KVKK kapsamında verilerine erişebilir, yanlış veya eksik verileri düzeltebilir, verilerin silinmesini talep edebilir ve veri işleme faaliyetlerine itiraz edebilir.</span>
              </div>
            </div>
          </motion.div>

          {/* Section 12: Üçüncü Taraf Hizmetler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">12. Üçüncü Taraf Hizmetler</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Uygulama, içerik üretim süreçlerinde üçüncü taraf yapay zekâ sağlayıcılarıyla (ör. Vertex AI, OpenRouter) entegre çalışabilir. Kullanıcı, içerik oluşturduğunda bu servislerle anonim veri paylaşımını kabul eder. Bu servisler yalnızca işlem süresince verileri işler, kalıcı olarak saklamaz.</p>
            </div>
          </motion.div>

          {/* Section 13: Hizmet Kesintileri ve Garanti Reddi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8 border-2 border-yellow-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">13. Hizmet Kesintileri ve Garanti Reddi</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Uygulama, üçüncü taraf hizmetlere bağlı çalıştığından dolayı geçici erişim kesintileri yaşanabilir. Geliştirici, hizmetin sürekli ve kesintisiz çalışacağını garanti etmez. Sunucu hatası, bakım veya bağlantı problemlerinden doğacak zararlardan geliştirici sorumlu tutulamaz.</p>
            </div>
          </motion.div>

          {/* Section 14: Hesap Güvenliği ve Yetkisiz Erişim */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">14. Hesap Güvenliği ve Yetkisiz Erişim</h2>
            </div>
            
            <div className="text-gray-600">
              <p>Kullanıcı, hesabında kullanılan e-posta adresinin gizliliğinden ve güvenliğinden kendisi sorumludur. Başkasına ait e-posta adresiyle yapılan işlemlerden doğacak tüm sorumluluk kullanıcıya aittir.</p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">📩 İletişim</h3>
            <p className="text-lg mb-6 opacity-90">
              Her türlü soru, öneri ve destek talepleri için bizimle iletişime geçebilirsiniz:
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
