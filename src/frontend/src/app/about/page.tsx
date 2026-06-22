import React from 'react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Şeffaf Raporlama",
      description: "Bizde makyajlanmış sayılar yok. Ne harcadıysanız ve ne kazandıysanız doğrudan CRM panelinizdeki verilerle eşleşir.",
      icon: ShieldCheck
    },
    {
      title: "Hız ve Çeviklik",
      description: "Piyasa koşulları hızlı değişiyor. Bütçe ve kreatif optimizasyonlarını haftalarca değil, saatler içerisinde gerçekleştiriyoruz.",
      icon: Target
    },
    {
      title: "B2B Focus",
      description: "Karar verici Y ve Z kuşağının dilinden anlıyoruz. B2B alıcı yolculuğundaki sürtünmeleri sıfıra indiriyoruz.",
      icon: Eye
    },
    {
      title: "Yüksek Tutku",
      description: "Müşterilerimizin büyüme hedeflerini kendi hedeflerimiz olarak benimser, gece gündüz dönüşüm odaklı çalışırız.",
      icon: Heart
    }
  ];

  const team = [
    {
      name: "Mert Yılmaz",
      role: "Kurucu & SEO Stratejisti",
      bio: "10 yılı aşkın süredir B2B markaların organik büyüme stratejilerini yönetiyor."
    },
    {
      name: "Elif Demir",
      role: "Google Ads & PPC Uzmanı",
      bio: "Yapay zeka hedefleme algoritmaları ve bütçe yönetimi konusunda uzman."
    },
    {
      name: "Can Kaya",
      role: "Kreatif Direktör",
      bio: "20-35 yaş kitleyi çeken dinamik arayüz ve sosyal medya dillerinin mimarı."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* Introduction */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Biz Kimiz?</h1>
        <p className="text-lg text-gray-400 font-light leading-relaxed">
          Vivid Media, dijital çağda büyüyen kurumsal firmaların ve teknoloji girişimlerinin (SaaS) büyüme ortağıdır. Bütçenizi en verimli şekilde kullanarak nitelikli müşteri edinmenizi sağlıyoruz.
        </p>
      </section>

      {/* Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-navy/60 p-8 sm:p-12 rounded-3xl border border-primary/10">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Hikayemiz</h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            2021 yılında, klasik ajansların karmaşık ve klik odaklı raporlama süreçlerinden sıkılarak kurulduk. Amacımız, kurumsal firmalara dijital pazarlamanın gerçek gücünü, yani <strong>gelir getiren dönüşüm odaklı hunileri</strong> göstermekti.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Bugün, İstanbul merkezli ekibimizle birlikte Avrupa ve Türkiye genelinde 40'tan fazla kurumsal markanın dijital reklam, SEO ve dönüşüm oranlarını yönetiyoruz.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-navy border border-primary/20 text-center">
            <span className="text-3xl font-black text-primary">5+</span>
            <span className="text-xs text-gray-400 block mt-2">Yıllık Tecrübe</span>
          </div>
          <div className="p-6 rounded-2xl bg-navy border border-accent/20 text-center">
            <span className="text-3xl font-black text-accent">40+</span>
            <span className="text-xs text-gray-400 block mt-2">Aktif B2B Marka</span>
          </div>
          <div className="p-6 rounded-2xl bg-navy border border-accent/20 text-center">
            <span className="text-3xl font-black text-accent">₺50M+</span>
            <span className="text-xs text-gray-400 block mt-2">Yönetilen Toplam Bütçe</span>
          </div>
          <div className="p-6 rounded-2xl bg-navy border border-primary/20 text-center">
            <span className="text-3xl font-black text-primary">%98</span>
            <span className="text-xs text-gray-400 block mt-2">Zamanında Teslimat</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="space-y-12">
        <h2 className="text-3xl font-extrabold text-white text-center">Değerlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-navy border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold text-white">Büyüme Ekibimiz</h2>
          <p className="text-gray-400 font-light">
            Sizin için çalışan, sertifikalı ve tecrübeli pazarlama profesyonellerimizle tanışın.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="p-6 rounded-2xl bg-navy border border-primary/10 text-center space-y-4 hover:border-accent/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-accent mx-auto flex items-center justify-center text-white text-2xl font-black">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <span className="text-xs text-primary font-semibold block mt-1">{member.role}</span>
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
