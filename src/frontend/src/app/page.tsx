import React from 'react';
import Link from 'next/link';
import { Search, TrendingUp, Share2, BookOpen, Target, ChevronRight, Zap, Users, Trophy } from 'lucide-react';
import { getServices, getCaseStudies } from '@/lib/api';

const ICON_MAP: Record<string, any> = {
  Search,
  TrendingUp,
  Share2,
  BookOpen,
  Target
};

export default async function Home() {
  const services = await getServices();
  const caseStudies = await getCaseStudies();

  return (
    <div className="relative">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-28 md:pb-36 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>2026 Kurumsal Dijital Büyüme Ortağınız</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Yeni Nesil Karar Vericiler İçin <br />
            <span className="bg-gradient-to-r from-primary via-[#5C8CFF] to-accent bg-clip-text text-transparent">
              Yüksek Dönüşümlü Pazarlama
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Sadece trafik çekmiyoruz; 20-35 yaş arası B2B alıcıları ve yöneticileri hedefleyerek şirketiniz için nitelikli lead ve randevular üretiyoruz.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <Link href="/quote" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent hover:bg-accent/80 text-white font-bold transition-all duration-300 shadow-lg shadow-accent/25 hover:scale-105">
              Fiyat Teklifi Al
            </Link>
            <Link href="/book" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy border border-primary/30 hover:border-primary/80 transition-all duration-300 font-bold text-primary hover:bg-primary/10">
              Toplantı Planla (Müsait Slotlar)
            </Link>
          </div>
        </div>

        {/* Floating Metrics Box */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto p-8 rounded-2xl bg-navy/60 border border-primary/10 backdrop-blur-md">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3.5x</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-2">Ortalama Yatırım Getirisi (ROI)</div>
          </div>
          <div className="text-center border-l border-primary/10">
            <div className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10M+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-2">Yönetilen Yıllık Reklam Bütçesi</div>
          </div>
          <div className="text-center border-l border-primary/10">
            <div className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">%85</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-2">Yıllık Müşteri Sadakat Oranı</div>
          </div>
          <div className="text-center border-l border-primary/10">
            <div className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">250+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-2">Başarıyla Tamamlanan B2B Funnel</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-navy/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Neler Yapıyoruz?</h2>
            <p className="text-gray-400 font-light">
              Şirketinizin dijital varlığını güçlendiren, arama motorlarında görünürlük sağlayan ve dönüşümleri tetikleyen uçtan uca pazarlama çözümleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service: any) => {
              const Icon = ICON_MAP[service.icon] || Zap;
              return (
                <div key={service.slug} className="group relative p-8 rounded-2xl bg-navy border border-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:translate-y-[-4px]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    <span>Detayları İncele</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-semibold">
              <span>NEDEN BİZİ SEÇMELİSİNİZ?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Geleneksel Ajanslardan Farklıyız: Biz Sonuç Odaklıyız.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Çoğu ajans sadece klik ve impression (gösterim) sayılarını raporlar. Vivid Media olarak biz doğrudan şirketinizin alt çizgisine, yani <strong>gelir artışına, nitelikli lead sayısına ve ROI değerlerine</strong> odaklanırız.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary mt-1 shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">20-35 Yaş Hedef Kitle Uzmanlığı</h4>
                  <p className="text-sm text-gray-400 mt-1">Y ve Z kuşağı karar vericileri satın almaya ikna eden taze, dinamik diller ve akıcı tasarımlar kullanıyoruz.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center text-accent mt-1 shrink-0">
                  <Trophy className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Veri ve KPI Odaklı Raporlama</h4>
                  <p className="text-sm text-gray-400 mt-1">Her ay doğrudan Google Analytics 4, CRM ve reklam verilerinizi anlaşılır raporlar halinde size sunuyoruz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical/Visual Feature presentation */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/25 blur-3xl rounded-full" />
            <h3 className="font-bold text-white text-lg mb-6">Ajans Performans Grafiği (Ortalama)</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Dönüşüm Hunisi Hızı</span>
                  <span className="text-primary font-bold">%94</span>
                </div>
                <div className="h-2 bg-navy rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '94%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>SEO Organik Büyüme</span>
                  <span className="text-primary font-bold">%88</span>
                </div>
                <div className="h-2 bg-navy rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '88%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Google Ads ROI Başarısı</span>
                  <span className="text-accent font-bold">%91</span>
                </div>
                <div className="h-2 bg-navy rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: '91%' }} />
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-navy/60 border border-primary/10 text-center">
              <span className="text-xs text-gray-400 block">Son 12 ayda kurumsal markalara kazandırılan toplam değer</span>
              <span className="text-2xl font-black text-white mt-1 block">₺24,500,000+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="py-20 bg-navy/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Başarı Hikayelerimiz</h2>
              <p className="text-gray-400 font-light mt-2">Ortak çalıştığımız markalarla yakaladığımız somut pazarlama başarıları.</p>
            </div>
            <Link href="/case-studies" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
              <span>Tüm Vaka Çalışmalarını Gör</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study: any) => (
              <div key={study.slug} className="p-8 rounded-2xl bg-navy border border-primary/10 flex flex-col justify-between hover:border-primary/30 transition-all duration-300">
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{study.client_name}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">{study.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{study.description}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-primary/15 mt-auto">
                  <div className="text-center">
                    <span className="text-xs text-gray-400 block">Trafik</span>
                    <span className="text-sm font-bold text-primary mt-1 block">{study.kpi_traffic}</span>
                  </div>
                  <div className="text-center border-l border-primary/15">
                    <span className="text-xs text-gray-400 block">Dönüşüm</span>
                    <span className="text-sm font-bold text-accent mt-1 block">{study.kpi_conversion}</span>
                  </div>
                  <div className="text-center border-l border-primary/15">
                    <span className="text-xs text-gray-400 block">Yatırım Getirisi</span>
                    <span className="text-sm font-bold text-primary mt-1 block">{study.kpi_roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified CTA Section */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Şirketinizin Dijital Büyümesini Bugün Başlatın</h2>
          <p className="text-gray-400 max-w-xl mx-auto font-light">
            Hedeflerinizi paylaşın, ekibimiz size özel 15 dakikalık ücretsiz bir SEO ve Ads büyüme analizi sunsun.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link href="/quote" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent hover:bg-accent/80 text-white font-bold transition-all duration-300 shadow-lg shadow-accent/25">
              Ücretsiz Fiyat Teklifi Al
            </Link>
            <Link href="/book" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy border border-primary/30 text-primary font-bold transition-all duration-300 hover:bg-primary/10">
              15 Dk Büyüme Toplantısı Planla
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
