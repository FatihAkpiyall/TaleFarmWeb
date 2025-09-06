'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Heart, 
  Sparkles, 
  BookOpen, 
  ArrowLeft,
  CheckCircle,
  Star,
  Smile
} from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simüle edilmiş form gönderimi
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Teşekkürler! 🎉
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 mb-8"
          >
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ana Sayfaya Dön</span>
            </Link>
            
            <button 
              onClick={() => setIsSubmitted(false)}
              className="border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-all duration-200"
            >
              Yeni Mesaj Gönder
            </button>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                TaleFarm
              </span>
            </Link>
            
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ana Sayfa</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <MessageSquare className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Bizimle İletişime
              </span>
              <br />
              <span className="text-gray-800">Geçin! 🌟</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya sadece merhaba demek için bize ulaşın. 
              Size yardımcı olmaktan mutluluk duyarız!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-4 right-4 w-8 h-8 bg-primary-200 rounded-full opacity-60"
            />
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-4 left-4 w-6 h-6 bg-secondary-200 rounded-full opacity-60"
            />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-lg"
                  placeholder="ornek@email.com"
                />
              </motion.div>

              {/* Reason Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Heart className="w-4 h-4 inline mr-2" />
                  İletişime Geçme Sebebi
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-lg"
                >
                  <option value="">Seçiniz...</option>
                  <option value="genel">Genel Soru</option>
                  <option value="teknik">Teknik Destek</option>
                  <option value="oneriler">Öneriler</option>
                  <option value="sikayet">Şikayet</option>
                  <option value="isbirligi">İş Birliği</option>
                  <option value="diger">Diğer</option>
                </select>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-lg resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Mesajı Gönder</span>
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Neden TaleFarm? 🌈
            </h2>
            <p className="text-lg text-gray-600">
              Çocuklarınız için en iyisini sunuyoruz!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "5 Yıldız Deneyim",
                description: "Binlerce mutlu çocuk ve ebeveyn"
              },
              {
                icon: Heart,
                title: "Güvenli Ortam",
                description: "Çocuk dostu güvenlik önlemleri"
              },
              {
                icon: Sparkles,
                title: "Sürekli Gelişim",
                description: "Her gün yeni özellikler ekliyoruz"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TaleFarm</span>
            </div>
            <p className="text-gray-400 mb-4">
              Çocukların yaratıcılığını geliştiren güvenli dijital platform.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>•</span>
              <span>İletişim</span>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="fixed top-1/4 left-10 w-16 h-16 bg-primary-200 rounded-full opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="fixed top-1/3 right-10 w-12 h-12 bg-secondary-200 rounded-full opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4
        }}
        className="fixed bottom-1/4 left-1/4 w-8 h-8 bg-primary-300 rounded-full opacity-30 pointer-events-none"
      />
    </div>
  )
}
