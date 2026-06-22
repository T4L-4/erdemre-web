import React from 'react';
import Link from 'next/link';
import { Trophy, TrendingUp, Award, ArrowLeft } from 'lucide-react';
import { getCaseStudies } from '@/lib/api';

export default async function CaseStudies() {
  const studies = await getCaseStudies();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Case Studies</h1>
        <p className="text-lg text-gray-400 font-light leading-relaxed">
          Verilerle kanıtlanmış başarı hikayelerimiz. Birlikte çalıştığımız kurumsal markalar için ulaştığımız KPI hedefleri.
        </p>
      </section>

      <section className="space-y-12">
        {studies.map((study: any, index: number) => (
          <div key={study.slug} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-8 rounded-3xl bg-navy border border-primary/10 hover:border-primary/30 transition-all duration-300 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}>
            {/* Context & Description */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">{study.client_name}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{study.title}</h2>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">{study.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-white text-sm">Nasıl Başardık?</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{study.results_detail}</p>
              </div>
            </div>

            {/* KPI Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4 bg-navy/60 p-6 rounded-2xl border border-primary/10">
              <div className="p-4 rounded-xl bg-navy border border-primary/15 flex items-center space-x-4">
                <TrendingUp className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Organik Trafik Büyümesi</span>
                  <span className="text-lg font-black text-white">{study.kpi_traffic}</span>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-navy border border-accent/15 flex items-center space-x-4">
                <Trophy className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Kazanılan Dönüşüm Oranı</span>
                  <span className="text-lg font-black text-white">{study.kpi_conversion}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy border border-primary/15 flex items-center space-x-4">
                <Award className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Yatırım Getirisi (ROI)</span>
                  <span className="text-lg font-black text-white">{study.kpi_roi}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-br from-primary/10 to-accent/10 p-12 rounded-3xl border border-primary/20 space-y-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Sıradaki Başarı Hikayesi Sizin Markanız Olsun</h2>
        <p className="text-gray-400 max-w-xl mx-auto font-light">
          Rakiplerinizin önüne geçmek ve veri odaklı pazarlama kanalları kurmak için ücretsiz strateji seansı planlayın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/quote" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent hover:bg-accent/80 text-white font-bold transition-all duration-300">
            Fiyat Teklifi Al
          </Link>
          <Link href="/book" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy border border-primary/30 text-primary font-bold hover:bg-primary/10">
            Toplantı Planla
          </Link>
        </div>
      </section>
    </div>
  );
}
