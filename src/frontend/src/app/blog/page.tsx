import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { getBlogPosts } from '@/lib/api';

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Blog & Kaynaklar</h1>
        <p className="text-lg text-gray-400 font-light leading-relaxed">
          B2B dijital pazarlama, SEO trendleri, Google Ads bütçe optimizasyonu ve CRO hakkında en güncel stratejileri öğrenin.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post: any) => (
          <article key={post.slug} className="group flex flex-col justify-between p-8 rounded-2xl bg-navy border border-primary/10 hover:border-primary/40 transition-all duration-300">
            <div>
              <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.publish_date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <User className="w-3.5 h-3.5" />
                  <span>{post.author}</span>
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {post.summary}
              </p>
            </div>

            <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors mt-auto">
              <span>Devamını Oku</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
