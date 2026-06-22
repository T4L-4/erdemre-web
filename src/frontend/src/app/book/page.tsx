'use client';

import React, { useState, useEffect } from 'react';
import { getAvailableSlots, submitAppointment } from '@/lib/api';
import { Calendar as CalendarIcon, Clock, Video, User, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function BookAppointment() {
  const [date, setDate] = useState('');
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Fetch available slots when date changes
  useEffect(() => {
    if (!date) return;
    
    const fetchSlots = async () => {
      setSlotsLoading(true);
      setSelectedSlot('');
      try {
        const available = await getAvailableSlots(date);
        setSlots(available);
      } catch (e) {
        setSlots([]);
      } finally {
        setSlotsLoading(false);
      }
    };

    fetchSlots();
  }, [date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      setError('Lütfen bir saat aralığı seçiniz.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      await submitAppointment({
        ...formData,
        date,
        time_slot: selectedSlot
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Randevu kaydı başarısız oldu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  // Prevent selecting past dates
  const todayStr = new Date().toISOString().split('T')[0];

  if (success) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-extrabold text-white">Toplantınız Planlandı!</h1>
        <p className="text-gray-400 font-light leading-relaxed">
          {date} tarihinde saat {selectedSlot} aralığındaki görüşmeniz onaylandı. Görüşme detayları ve Google Meet linki e-posta adresinize gönderilmiştir.
        </p>
        
        <div className="p-4 rounded-xl bg-navy border border-primary/20 max-w-sm mx-auto flex items-center space-x-3 text-left">
          <Video className="w-6 h-6 text-primary shrink-0" />
          <div>
            <span className="text-xs text-gray-400 block font-semibold">Google Meet Görüşme Odası</span>
            <a href="https://meet.google.com/mock-appointment-link" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline font-bold">
              meet.google.com/mock-appointment-link
            </a>
          </div>
        </div>

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
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Randevu Oluştur</h1>
        <p className="text-gray-400 font-light max-w-lg mx-auto">
          Pazarlama ekibimizle 15 dakikalık ücretsiz dijital büyüme analizi planlayın.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-navy border border-primary/10 backdrop-blur-md space-y-6">
        {error && (
          <div className="p-4 rounded-xl bg-accent/15 border border-accent/30 flex items-center space-x-3 text-accent text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-4">
          <h3 className="font-bold text-white text-base flex items-center space-x-2">
            <CalendarIcon className="w-5 h-5 text-primary" />
            <span>1. Tarih ve Saat Seçimi</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">Tarih Seçin *</label>
              <input
                type="date"
                required
                min={todayStr}
                className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">Müsait Saat Dilimleri *</label>
              {slotsLoading ? (
                <div className="text-sm text-gray-400 py-3">Slotlar sorgulanıyor...</div>
              ) : date ? (
                slots.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition-all text-center ${
                          selectedSlot === slot
                            ? 'bg-primary border-primary text-white shadow-md'
                            : 'bg-navy border-primary/20 text-gray-400 hover:border-primary/60 hover:text-white'
                        }`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-accent py-3">Bu tarihte müsait slot bulunmamaktadır.</div>
                )
              ) : (
                <div className="text-sm text-gray-500 py-3">Lütfen önce bir tarih seçiniz.</div>
              )}
            </div>
          </div>
        </div>

        <hr className="border-primary/10 my-6" />

        <div className="space-y-4">
          <h3 className="font-bold text-white text-base flex items-center space-x-2">
            <User className="w-5 h-5 text-accent" />
            <span>2. Kişisel ve Şirket Bilgileri</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">İsim / Soyisim *</label>
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
              <label className="text-sm font-medium text-gray-300 block">Şirket Adı</label>
              <input
                type="text"
                placeholder="Örn: Acme Inc."
                className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">Telefon Numarası *</label>
              <input
                type="tel"
                required
                placeholder="Örn: +90 (555) 123 4567"
                className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 block">Toplantı İçin Özel Notlar (Opsiyonel)</label>
            <textarea
              rows={3}
              placeholder="Görüşmede odaklanmak istediğiniz konular veya hedefleriniz..."
              className="w-full bg-navy border border-primary/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !date || !selectedSlot}
          className="w-full py-4 rounded-xl bg-accent hover:bg-accent/80 text-white font-bold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          <Clock className="w-4 h-4" />
          <span>{loading ? 'Randevu Kaydediliyor...' : 'Görüşmeyi Rezerve Et'}</span>
        </button>
      </form>
    </div>
  );
}
