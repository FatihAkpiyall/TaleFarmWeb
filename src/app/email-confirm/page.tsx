'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function EmailConfirmContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    const type = searchParams.get('type');
    
    if (type === 'signup') {
      setStatus('success');
      setMessage('E-posta adresiniz başarıyla onaylandı!');
    } else {
      setStatus('error');
      setMessage('Geçersiz onay bağlantısı');
    }
  }, [searchParams]);

  const handleOpenApp = () => {
    // Android için intent URL
    const androidIntent = 'intent://email-confirmed#Intent;scheme=oyk;package=com.talefarm.hikaye_uygulamasi;end';
    
    // iOS için custom URL scheme
    const iosUrl = 'oyk://email-confirmed';
    
    // Önce Android'i dene
    window.location.href = androidIntent;
    
    // 2 saniye sonra iOS'u dene
    setTimeout(() => {
      window.location.href = iosUrl;
    }, 2000);
    
    // 5 saniye sonra Play Store'a yönlendir
    setTimeout(() => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.talefarm.hikaye_uygulamasi';
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-8 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            {status === 'loading' && (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            )}
            {status === 'success' && (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {status === 'error' && (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            {status === 'loading' && 'Kontrol Ediliyor...'}
            {status === 'success' && 'Hesap Onaylandı!'}
            {status === 'error' && 'Hata Oluştu'}
          </h1>
          <p className="text-green-100 text-sm">
            {status === 'loading' && 'E-posta onayı kontrol ediliyor...'}
            {status === 'success' && 'Artık uygulamaya giriş yapabilirsiniz'}
            {status === 'error' && 'Onay işlemi tamamlanamadı'}
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {status === 'success' && (
            <div className="text-center">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 text-sm leading-relaxed">
                  ✅ {message}<br/>
                  Artık TaleFarm uygulamasına giriş yapabilirsiniz!
                </p>
              </div>
              
              <button
                onClick={handleOpenApp}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                📱 TaleFarm Uygulamasını Aç
              </button>
              
              <p className="text-gray-500 text-xs mt-4">
                Uygulama açılmazsa Play Store'dan indirebilirsiniz
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 text-sm leading-relaxed">
                  ❌ {message}<br/>
                  Lütfen tekrar deneyin veya destek ekibiyle iletişime geçin.
                </p>
              </div>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-700 transition-colors duration-200"
              >
                🔄 Tekrar Dene
              </button>
            </div>
          )}

          {status === 'loading' && (
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                E-posta onayı durumu kontrol ediliyor...
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-gray-500 text-xs">
            TaleFarm - Çocuklar için Hikaye Uygulaması
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EmailConfirmPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-8 text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Yükleniyor...</h1>
          </div>
        </div>
      </div>
    }>
      <EmailConfirmContent />
    </Suspense>
  );
}
