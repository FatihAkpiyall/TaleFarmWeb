'use client'

import { motion } from 'framer-motion'
import { BookOpen, Sparkles, Shield, Palette, Moon, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const features = [
    {
      id: 1,
      title: "Çizim Canlandırma",
      video: "/cizim_canlandir_kisim.mp4",
      description: "Bu mod, çocuğun yaratıcılığını ve el becerilerini desteklemek için tasarlandı. Çocuk uygulama içinde kendi çizimini yapabilir, ya da ebeveyn kağıda yapılmış bir çizimi uygulamaya yükleyebilir. Yapay zeka, bu çizimi analiz eder ve çocuğun çizdiği karakterleri ve ortamı canlandırır. Çocuk, kendi oluşturduğu karakterlerin canlandığını, hayalindeki ve hatta dahasının oluştuğu resimde yeni bir görsel gelişim gösterir. Bu, yalnızca bir çizim deneyimi değil; hayal gücünü somut bir biçimde yaşama dönüştürme fırsatıdır.",
      benefits: [
        "Beyin gelişimini destekler. El-göz koordinasyonu, planlama ve yaratıcılık merkezlerini aktive eder.",
        "Kalem tutma becerisi kazandırır. Özellikle okul öncesi dönemde çizim yapmak, yazma becerisine temel hazırlar.",
        "Ebeveyn-çocuk bağını kuvvetlendirir. Ebeveyn çocuğunun çizimini birlikte canlandırarak sürece dahil olur; bu da paylaşımı ve iletişimi derinleştirir."
      ]
    },
    {
      id: 2,
      title: "Hikaye Modu",
      video: "/hikaye_olustur_kisim.mp4",
      description: "Bu mod, ebeveynlerin çocukları için kişiselleştirilmiş ve ders çıkarılabilir hikayeler oluşturması için tasarlandı. Önce seslendirme ve stil teması seçilir, sonra hikayenin konusu kısa bir metinle belirlenir. Örneğin: 'Oğlum oyuncaklarını toplamıyor.' veya 'Kızım yaptığım ıspanak yemeğini yemiyor.' gibi. Yapay zeka, duruma uygun bir hikaye oluşturur, görsellerle zenginleştirilir ve seçilen seslendirme ile canlandırılır.",
      benefits: [
        "Çocuk, kendi davranışını hikaye içinde görerek empati kurar ve ders çıkarır.",
        "Soyut kavramlar (paylaşmak, sabretmek, dinlemek, düzenli olmak) hikaye diliyle somutlaşır.",
        "Ebeveyn, çocuğuna değerleri öğüt vermeden, hikaye aracılığıyla aktarabilir."
      ]
    },
    {
      id: 3,
      title: "Uyku Hikayeleri",
      video: "/uyku_hikayeleri_kisim.mp4",
      description: "Bu mod, çocukların uykuya geçiş sürecini desteklemek için tasarlandı. Ebeveynler önce seslendirme ve görsel stil seçer, sonra uyku hazırlığı teması seçer. Örneğin: 'Kızım Sema'ya tavşanlarla ilgili bir hikaye anlat' veya 'Oğlum Levent ay'da seyahat ediyor.' gibi. Yapay zeka, yumuşak ses tonları, sıcak görseller, sakinleştirici müzik ve anlatımla çocuğun yaşına ve seçilen temaya uygun kişiselleştirilmiş bir uyku hikayesi oluşturur. Bu hikayeler, çocukların günlük streslerden rahatlamasına yardımcı olur ve ayrıca duygusal farkındalık, özgüven ve güvenlik duygusu gibi değerleri destekler.",
      benefits: [
        "Her gece ebeveynle birlikte okunan bir hikaye; ebeveyn-çocuk bağını kuvvetlendirir, kelime dağarcığı ve erken okuryazarlık gelişimini destekler, duygusal düzenlemeyi kolaylaştırır ve düzenli bir uyku rutini oluşturarak çocuğun genel sağlığını iyileştirir."
      ]
    },
    {
      id: 4,
      title: "Eğitici Oyuncağım",
      video: "/oyuncak_kisim.mp4",
      description: "Bu mod, çocuğun favori oyuncağını öğrenme ve farkındalık sürecine dahil eder. Önce ebeveyn çocuğun favori oyuncağının fotoğrafını çeker ve ona bir isim verir - örneğin 'mavi ayıcık' veya 'itfaiye arabası' gibi. Sonra bir hikaye teması belirlenir: Eğitici Hikaye veya Macera. Daha sonra seslendirme ve görsel stil seçimi yapılır. Ardından kısa bir metin konusu verilir. Yapay zeka, bu bilgileri kullanarak çocuğun oyuncağından dinleyeceği bir hikaye oluşturur. Hikaye görselleştirilir, seslendirilir ve çocuğun en yakın bağ kurduğu karakter - yani kendi oyuncağı - hikayenin kahramanı olur.",
      benefits: [
        "Çocuk, hikayede sevdiği oyuncağıyla özdeşleştiği için içeriğe duygusal olarak bağlanır.",
        "Oyuncağı aracılığıyla verilen mesajlar daha kolay içselleştirilir — çocuk, \"ders alması gereken kişi\" değil, \"kahramanla birlikte öğrenen\" olur."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
                      <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Çizim Canlandırma</a>
                      <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Hikaye Modu</a>
                      <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Uyku Hikayeleri</a>
                      <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Eğitici Oyuncağım</a>
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
                      <a href="#parents" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">Ebeveyn Rehberi</a>
                      <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-open-sauce text-sm">İletişim</a>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section - İlk Açılış Ekranı */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dekoratif Arka Plan Şekilleri */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Sağ üst köşe - Koyu yeşil noktacıklar */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary-900 rounded-full opacity-10 blur-3xl"></div>
          
          {/* Sağ alt köşe - Koyu yeşil noktacıklar */}
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-900 rounded-full opacity-10 blur-2xl"></div>
          
          {/* Sol taraf - Açık yeşil büyük şekiller */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-20 top-1/4 w-96 h-96 bg-primary-400 rounded-full opacity-20 blur-3xl"
          ></motion.div>
          
          <motion.div
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -left-10 bottom-1/4 w-80 h-80 bg-primary-300 rounded-full opacity-15 blur-3xl"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - Metin İçeriği */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Ana Başlık */}
              <h1 className="text-5xl md:text-7xl font-bebas text-primary-900 leading-tight">
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Çocukların Hayal
                </span>
                <br />
                <span className="text-gray-800">Dünyasını Keşfedin</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-open-sauce text-gray-600 mb-8 max-w-2xl">
                TaleFarm, çocukların yaratıcılığını geliştiren, güvenli ve eğitici bir hikaye oluşturma uygulamasıdır. 
                Yapay zeka destekli teknolojimizle çocuklar kendi hikayelerini yazabilir, karakterler yaratabilir ve 
                hayal güçlerini sınırsızca kullanabilirler.
              </p>

              <motion.div 
                className="flex flex-col gap-4 justify-start items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Store Butonları */}
                <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                  {/* Apple App Store */}
                  <motion.a
                    href="https://apps.apple.com/tr/app/talefarm-hikaye-ve-%C3%A7izim/id6753679059?l=tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-8 py-4 rounded-xl font-open-sauce font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-3 min-w-[200px] justify-center"
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
                    className="bg-[#7ba64b] text-white px-8 py-4 rounded-xl font-open-sauce font-semibold text-lg hover:bg-[#6a9540] hover:shadow-lg transition-all duration-200 flex items-center space-x-3 min-w-[200px] justify-center opacity-75 cursor-not-allowed"
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

            {/* Sağ Taraf - Telefon Mockupları */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end items-center"
            >
              {/* Ana Telefon Mockup - Sağda */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                animate={{ opacity: 1, scale: 1.2, rotate: 35 }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ rotate: 37, scale: 1.25 }}
                className="relative z-10 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl ml-16 mt-16"
              >
                <img 
                  src="/mockup_anasayfa.png" 
                  alt="TaleFarm App Mockup" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* İkinci Telefon Mockup - Solda (opsiyonel) */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: 3, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, rotate: 15, scale: 1.1 }}
                transition={{ 
                  duration: 1,
                  delay: 0.4,
                  type: "spring"
                }}
                className="absolute left-8 top-10 max-w-3xl md:max-w-4xl lg:max-w-5xl opacity-90 -z-0 hidden lg:block"
              >
                <div className="w-full h-auto blur-[2px]">
                  <img 
                    src="/mockup_anasayfa_2.png" 
                    alt="TaleFarm App Mockup" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bebas text-gray-800 mb-4">
              Uygulama Özellikleri
            </h2>
            <p className="text-xl font-open-sauce text-gray-600 max-w-3xl mx-auto">
              TaleFarm'in gelişmiş özellikleriyle çocuklar hikaye yazmanın keyfini çıkarır.
            </p>
          </motion.div>

          {/* Features List */}
          <div className="space-y-20">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0
              const videoOnLeft = isEven
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                    videoOnLeft ? '' : 'lg:grid-flow-dense'
                  }`}>
                    {/* Video - Solda (çift index) veya Sağda (tek index) */}
                    <div className={`relative w-full ${videoOnLeft ? 'lg:pr-20' : 'lg:col-start-2 lg:pl-44'}`}>
                      {feature.video ? (
                        <div className="relative rounded-2xl overflow-hidden bg-white w-full">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto block"
                            onError={(e) => {
                              console.error('Video yükleme hatası:', e);
                            }}
                          >
                            <source src={feature.video} type="video/mp4" />
                            Tarayıcınız video oynatmayı desteklemiyor.
                          </video>
                        </div>
                      ) : (
                        <div className="relative rounded-2xl overflow-hidden bg-white aspect-video flex items-center justify-center min-h-[300px]">
                          <p className="text-gray-400 font-open-sauce">Video yakında eklenecek</p>
                        </div>
                      )}
                    </div>

                    {/* Açıklamalar - Sağda (çift index) veya Solda (tek index) */}
                    <div className={`space-y-4 pt-0 ${videoOnLeft ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-primary-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-base md:text-lg font-open-sauce text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {feature.benefits && feature.benefits.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-xl md:text-2xl font-bebas text-primary-900 mb-3">Neden Faydalı?</h4>
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm md:text-base font-open-sauce text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bebas text-gray-800 mb-6">
                Ebeveynler İçin <br />
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Güvenli Seçim
                </span>
              </h2>
              <p className="text-xl font-open-sauce text-gray-600 mb-8">
                TaleFarm, çocuklarınızın dijital dünyada güvenle vakit geçirmesi için tasarlanmıştır. 
                Eğitici içerik, güvenlik önlemleri ve ebeveyn kontrolü ile tam güvenlik sağlar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="font-open-sauce text-gray-700">Yaş grubuna uygun içerik</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="font-open-sauce text-gray-700">Reklamsız deneyim</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bebas mb-4">Ebeveyn Kontrolü</h3>
                <p className="font-open-sauce mb-6">Çocuklarınızın aktivitelerini takip edin ve güvenli bir ortam sağlayın.</p>
              </div>
            </motion.div>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bebas text-gray-800 mb-6">
                Hikaye İzlemenin <br />
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Yeni Yolu
                </span>
              </h2>
              <p className="text-xl font-open-sauce text-gray-600 mb-8">
                TaleFarm, çocukların yaratıcılığını geliştiren, güvenli ve eğitici bir platformdur. 
                Yapay zeka teknolojisi ile desteklenen araçlarımızla çocuklar hayal güçlerini 
                sınırsızca kullanabilir ve kendi hikayelerini yaratabilirler.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="font-open-sauce text-gray-700">Kolay kullanım arayüzü</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="font-open-sauce text-gray-700">Gelişmiş AI destekli özellikler</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="font-open-sauce text-gray-700">Ebeveyn kontrolü</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bebas mb-4">Hemen Başlayın</h3>
                <p className="font-open-sauce mb-6">Uygulamayı indirin ve çocuklarınızın yaratıcılığını keşfedin!</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Apple App Store */}
                  <motion.a
                    href="https://apps.apple.com/tr/app/talefarm-hikaye-ve-%C3%A7izim/id6753679059?l=tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-6 py-3 rounded-xl font-open-sauce font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2 justify-center"
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
                    className="bg-[#7ba64b] text-white px-6 py-3 rounded-xl font-open-sauce font-semibold hover:bg-[#6a9540] hover:shadow-lg transition-all duration-200 flex items-center space-x-2 justify-center opacity-75 cursor-not-allowed"
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
      <footer id="contact" className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="TaleFarm Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bebas text-white">TaleFarm</span>
              </div>
              <p className="text-white font-open-sauce">
                Çocukların yaratıcılığını geliştiren güvenli dijital platform.
              </p>
            </div>
            
            <div>
              <h4 className="font-bebas text-white mb-4 text-lg">Ürün</h4>
              <ul className="space-y-2 text-white font-open-sauce">
                <li><a href="#features" className="hover:text-primary-300 transition-colors">Özellikler</a></li>
                <li><a href="#parents" className="hover:text-primary-300 transition-colors">Güvenlik</a></li>
                <li><a href="#about" className="hover:text-primary-300 transition-colors">Güncellemeler</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bebas text-white mb-4 text-lg">Destek</h4>
              <ul className="space-y-2 text-white font-open-sauce">
                <li><a href="/support" className="hover:text-primary-300 transition-colors">Yardım Merkezi</a></li>
                <li><a href="#parents" className="hover:text-primary-300 transition-colors">Ebeveyn Rehberi</a></li>
                <li><a href="/contact" className="hover:text-primary-300 transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bebas text-white mb-4 text-lg">Yasal</h4>
              <ul className="space-y-2 text-white font-open-sauce">
                <li><a href="/privacy" className="hover:text-primary-300 transition-colors">Gizlilik Politikası</a></li>
                <li><a href="/terms" className="hover:text-primary-300 transition-colors">Kullanım Şartları</a></li>
                <li><a href="/kvkk" className="hover:text-primary-300 transition-colors">KVKK</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-800 mt-12 pt-8 text-center text-white">
            <p className="font-open-sauce">
              &copy; 2024 TaleFarm. Tüm hakları saklıdır. Çocuklar için güvenli dijital deneyim.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
