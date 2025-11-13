'use client';

import { useLanguage } from './components/LanguageContext';
import Link from 'next/link';

export default function NotFound() {
  const { translate } = useLanguage(); // true = EN, false = FR

  const t = {
    title: translate ? '404' : '404',
    message: translate
      ? 'Page not found.'
      : 'Page non trouvée.',
    description: translate
      ? 'Check the URL or try another page.'
      : 'Vérifiez l’URL ou essayez une autre page.',
    back: translate ? 'Go Back' : 'Retour',
    home: translate ? 'Home' : 'Accueil',
  };

  return (
    <div className="min-h-screen bg-(--background) flex flex-col items-center justify-center px-6 text-center">
      {/* 404 mare */}
      <h1 className="text-9xl md:text-[12rem] font-black text-(--primary) tracking-tighter">
        {t.title}
      </h1>

      {/* Mesaj clar */}
      <p className="mt-6 text-xl md:text-2xl font-medium text-white">
        {t.message}
      </p>
      <p className="mt-2 text-sm text-gray-500 max-w-md">
        {t.description}
      </p>

      {/* Butoane simple */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-xs">
        <button
          onClick={() => window.history.back()}
          className="py-3 px-6 bg-(--primary) text-black font-medium rounded-full hover:bg-(--primaryHover) transition-colors"
        >
          {t.back}
        </button>
        <Link
          href="/"
          className="py-3 px-6 border border-(--border2-color) text-white rounded-full hover:bg-white/10 transition-colors"
        >
          {t.home}
        </Link>
      </div>
    </div>
  );
}