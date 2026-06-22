'use client';

import React from 'react';
import Link from 'next/link';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-primary/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                VIVID<span className="text-primary">MEDIA</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Kurumsal B2B devleri ve hızlı büyüyen teknoloji girişimleri için yüksek dönüşümlü dijital pazarlama hunileri tasarlıyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/arama-motoru-optimizasyonu-seo" className="text-sm text-gray-400 hover:text-white transition-colors">
                  SEO Hizmeti
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads-yonetimi" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Google Ads Yönetimi
                </Link>
              </li>
              <li>
                <Link href="/services/sosyal-medya-yonetimi" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sosyal Medya
                </Link>
              </li>
              <li>
                <Link href="/services/icerik-pazarlama-content-marketing" className="text-sm text-gray-400 hover:text-white transition-colors">
                  İçerik Pazarlaması
                </Link>
              </li>
              <li>
                <Link href="/services/donusum-orani-optimizasyonu-cro" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Dönüşüm Optimizasyonu (CRO)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Levent, Büyükdere Cd. No:199, Şişli/İstanbul</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+90 (212) 555 0199</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>hello@vividmedia.co</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Abone Olun</h3>
            <p className="text-sm text-gray-400 mb-3">Haftalık B2B büyüme ve pazarlama ipuçlarını kaçırmayın.</p>
            <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="bg-navy border border-primary/20 rounded-xl px-3 py-2 text-sm w-full focus:outline-none focus:border-primary text-white"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-accent hover:bg-accent/80 text-white text-sm font-semibold hover:shadow-lg shadow-accent/25"
              >
                Katıl
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Vivid Media. Tüm hakları saklıdır.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
