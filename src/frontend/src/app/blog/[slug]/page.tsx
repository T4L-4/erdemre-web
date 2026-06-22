import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { getBlogPostBySlug } from '@/lib/api';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  return {
    title: `${post.meta_title || post.title} | Vivid Media Blog`,
    description: post.meta_description || post.summary,
  };
}

export default async function BlogPostDetail({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span>Geri Dön</span>
      </Link>

      <header className="space-y-6 mb-12">
        <div className="flex items-center space-x-4 text-xs text-gray-400">
          <span className="flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.publish_date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <User className="w-3.5 h-3.5" />
            <span>{post.author}</span>
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          {post.title}
        </h1>
        
        <p className="text-lg text-gray-400 font-light italic leading-relaxed">
          {post.summary}
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed text-base sm:text-lg">
        {post.content.split('\n\n').map((paragraph: string, index: number) => (
          <p key={index} className="whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
