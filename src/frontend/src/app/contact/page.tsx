'use client';

import React, { useState } from 'react';
import { submitContactMessage } from '@/lib/api';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'contact' | 'feedback'>('contact');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Customize subject if it is a feedback form
    const dataToSend = {
      ...formData,
      subject: activeTab === 'feedback' ? `[İSTEK/ÖNERİ] ${formData.subject}` : formData.subject
    };

    try {
      await submitContactMessage(dataToSend);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Gönderim sırasında hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setSuccess(false);
    setError('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Bizimle İletişime Geçin</h1>
        <p className="text-lg text-gray-400 font-light leading-relaxed">
          Bir projeniz mi var? Veya sadece soru sormak, öneride bulunmak mı istiyorsunuz? Ekibimiz dinlemeye hazır.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Area */}
        <div className="lg:col-span-5 space-y-8 bg-navy p-8 rounded-3xl border border-primary/10">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">İletişim Bilgileri</h2>
            <p className="text-sm text-gray-400 font-light">Bizimle doğrudan e-posta veya telefon üzerinden de iletişime geçebilirsiniz.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Ofis Adresi</h4>
                <p className="text-xs text-gray-400 mt-1">Levent, Büyükdere Cd. No:199, Şişli/İstanbul</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Telefon</h4>
                <p className="text-xs text-gray-400 mt-1">+90 (212) 555 0199</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">E-posta</h4>
                <p className="text-xs text-gray-400 mt-1">hello@vividmedia.co</p>
              </div>
            </div>
          </div>

          <hr className="border-primary/10" />

          {/* Map Mockup */}
          <div className="p-4 rounded-xl bg-navy border border-primary/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-30" />
            <span className="text-xs text-gray-400 font-semibold block">Google Maps Konum Haritası</span>
            <div className="h-32 bg-navy/60 rounded-lg border border-primary/15 mt-3 flex items-center justify-center text-xs text-gray-500">
              [Harita Simülasyonu - Büyükdere Caddesi 199]
            </div>
          </div>
        </div>

        {/* Form Area */}
        <div className="lg:col-span-7 space-y-6">
          {/* Tabs */}
          <div className="flex border-b border-primary/10">
            <button
              onClick={() => { setActiveTab('contact'); handleReset(); }}
              className={`pb-4 px-6 text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeTab === 'contact' ? 'border-b-2 border-primary text-primary' : 'text-gray-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>İletişim Formu</span>
            </button>
            
            <button
              onClick={() => { setActiveTab('feedback'); handleReset(); }}
              className={`pb-4 px-6 text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeTab === 'feedback' ? 'border-b-2 border-accent text-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>İstek / Öneri / Bilgi Formu</span>
            </button>
          </div>

          {success ? (
            <div className="p-8 rounded-3xl bg-navy border border-primary/10 text-center space-y-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Mesajınız İletildi!</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {activeTab === 'contact' 
                  ? 'Mesajınız başarıyla alınmıştır. En kısa sürede sizinle irtibata geçeceğiz.' 
                  : 'Geri bildiriminiz bizim için çok değerli. İlettiğiniz istek/öneri geliştirme ekibimiz tarafından değerlendirilecektir.'}
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-accent hover:bg-accent/80 text-white text-sm font-semibold"
              >
                Yeni Mesaj Gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-navy border border-primary/10 space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-accent/15 border border-accent/30 flex items-center space-x-3 text-accent text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 block">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Caner Yılmaz"
                    className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 block">E-posta Adresi *</label>
                  <input
                    type="email"
                    required
                    placeholder="Örn: caner@company.com"
                    className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 block">Telefon Numarası</label>
                  <input
                    type="tel"
                    placeholder="Örn: +90 (555) 123 4567"
                    className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 block">Konu *</label>
                  <input
                    type="text"
                    required
                    placeholder={activeTab === 'feedback' ? 'İstek, öneri veya bilgi almak istediğiniz konu' : 'Görüşmek istediğiniz konu başlığı'}
                    className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Mesajınız *</label>
                <textarea
                  required
                  rows={5}
                  placeholder={activeTab === 'feedback' ? 'İsteklerinizi, şikayet veya önerilerinizi detaylıca buraya yazın...' : 'Sorularınızı veya projenizin detaylarını buraya yazın...'}
                  className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                  className="w-full py-4 rounded-xl text-white font-bold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 bg-accent hover:bg-accent/80"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Gönderiliyor...' : 'Gönder'}</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
