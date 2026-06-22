import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ShieldAlert, Award, Star, Compass } from 'lucide-react';
import { getServiceBySlug } from '@/lib/api';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  return {
    title: service.meta_title || `${service.title} Hizmeti - Vivid Media`,
    description: service.meta_description || service.description,
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <Link href="/" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span>Ana Sayfaya Dön</span>
      </Link>

      <section className="space-y-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
          {service.title}
        </h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">
          {service.description}
        </p>
      </section>

      {/* Problem & Solution Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-navy border border-accent/20 space-y-4">
          <div className="flex items-center space-x-2 text-accent">
            <ShieldAlert className="w-5 h-5" />
            <h3 className="text-lg font-bold">Yaşadığınız Problem Ne?</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {service.problem}
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-navy border border-primary/20 space-y-4">
          <div className="flex items-center space-x-2 text-primary">
            <CheckCircle className="w-5 h-5" />
            <h3 className="text-lg font-bold">Nasıl Çözüyoruz?</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {service.solution}
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="space-y-8 bg-navy/60 p-8 sm:p-12 rounded-3xl border border-primary/10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">İşleyiş Sürecimiz</h2>
        <div className="space-y-4 text-gray-300">
          {service.process.split('\n').map((step: string, index: number) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p className="text-sm sm:text-base font-light">{step.replace(/^\d+\.\s*/, '')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Box */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/20 text-center space-y-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase">
          <Award className="w-4 h-4" />
          <span>GARANTİ EDİLEN HEDEF</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Beklenen Sonuçlar</h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          {service.results}
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Bu Çözüm Şirketiniz İçin Uygun Mu?</h2>
        <p className="text-gray-400 max-w-xl mx-auto font-light">
          Gelin, bütçenizi ve hedeflerinizi değerlendirelim. Size özel bir büyüme stratejisi tasarlayalım.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/quote" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent hover:bg-accent/80 text-white font-bold transition-all duration-300 hover:scale-105">
            Teklif Formunu Doldur
          </Link>
          <Link href="/book" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy border border-primary/30 text-primary font-bold hover:bg-primary/10">
            Randevu Ayarla
          </Link>
        </div>
      </section>
    </div>
  );
}
