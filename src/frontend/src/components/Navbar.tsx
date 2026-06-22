'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/85 backdrop-blur-md border-b border-primary/20 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-white via-primary-light to-accent bg-clip-text text-transparent">
              VIVID<span className="text-primary">MEDIA</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Ana Sayfa</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">Biz Kimiz</Link>
            <Link href="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">Case Studies</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">İletişim</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/book" className="flex items-center space-x-1 px-4 py-2 rounded-xl border border-primary/30 hover:border-primary/80 transition-all duration-300 text-sm font-semibold text-primary hover:bg-primary/10">
              <Calendar className="w-4 h-4" />
              <span>Randevu Al</span>
            </Link>
            <Link href="/quote" className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/80 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105">
              Teklif Al
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy/95 border-b border-primary/20 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10">Ana Sayfa</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10">Biz Kimiz</Link>
            <Link href="/case-studies" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10">Case Studies</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10">Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10">İletişim</Link>
            
            <div className="pt-4 flex flex-col space-y-3 px-3">
              <Link href="/book" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl border border-primary/40 text-center text-primary text-sm font-semibold hover:bg-primary/10">
                <Calendar className="w-4 h-4" />
                <span>Randevu Al</span>
              </Link>
              <Link href="/quote" onClick={() => setIsOpen(false)} className="w-full py-2.5 rounded-xl bg-accent hover:bg-accent/80 text-center text-white text-sm font-semibold hover:shadow-lg shadow-accent/25">
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
