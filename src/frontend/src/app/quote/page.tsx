'use client';

import React, { useState } from 'react';
import { submitLead } from '@/lib/api';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function GetQuote() {
  const [formData, setFormData] = useState({
    company_name: '',
    sector: '',
    budget: '',
    needs: '',
    contact_name: '',
    contact_email: '',
    contact_phone: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const budgetOptions = [
    "₺20.000 - ₺50.000 / ay",
    "₺50.000 - ₺100.000 / ay",
    "₺100.000 - ₺250.000 / ay",
    "₺250.000+ / ay",
    "Belirsiz / Bütçe Yok"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await submitLead({
        ...formData,
        source: 'seo' // Mocking frontend source, view will parse utm or use this
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-extrabold text-white">Teklif Talebiniz Alındı!</h1>
        <p className="text-gray-400 font-light leading-relaxed">
          Pazarlama uzmanlarımız talebinizi inceleyip, en geç 24 saat içerisinde size özel bir teklif taslağı ile dönüş yapacaktır.
        </p>
        <div className="pt-4">
          <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-accent hover:bg-accent/80 text-white font-semibold hover:shadow-lg transition-transform hover:scale-105">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Fiyat Teklifi Al</h1>
        <p className="text-gray-400 font-light max-w-lg mx-auto">
          İhtiyaçlarınızı ve bütçe aralığınızı belirtin, sizin için en doğru growth modelini çıkartalım.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-navy border border-primary/10 backdrop-blur-md space-y-6">
        {error && (
          <div className="p-4 rounded-xl bg-accent/15 border border-accent/30 flex items-center space-x-3 text-accent text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 block">Şirket Adı *</label>
            <input
              type="text"
              required
              placeholder="Örn: Acme Tech"
              className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              value={formData.company_name}
              onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 block">Sektör *</label>
            <input
              type="text"
              required
              placeholder="Örn: FinTech, E-ticaret"
              className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              value={formData.sector}
              onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 block">Aylık Dijital Pazarlama Bütçesi *</label>
          <select
            required
            className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          >
            <option value="" disabled>Bütçe Aralığı Seçiniz</option>
            {budgetOptions.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 block">Hangi Alanlarda Destek İstiyorsunuz? *</label>
          <textarea
            required
            rows={4}
            placeholder="İhtiyaçlarınızı, hedeflerinizi veya sormak istediklerinizi buraya yazın..."
            className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
            value={formData.needs}
            onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
          />
        </div>

        <hr className="border-primary/10 my-6" />

        <h3 className="font-bold text-white text-base">İrtibat Bilgileri</h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 block">Yetkili İsim / Soyisim *</label>
            <input
              type="text"
              required
              placeholder="Örn: Caner Yılmaz"
              className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              value={formData.contact_name}
              onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">E-posta Adresi *</label>
              <input
                type="email"
                required
                placeholder="Örn: caner@company.com"
                className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                value={formData.contact_email}
                onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">Telefon Numarası *</label>
              <input
                type="tel"
                required
                placeholder="Örn: +90 (555) 123 4567"
                className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                value={formData.contact_phone}
                onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-accent hover:bg-accent/80 text-white font-bold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>{loading ? 'Talep Gönderiliyor...' : 'Teklif Talebini Gönder'}</span>
        </button>
      </form>
    </div>
  );
}
