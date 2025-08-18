// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  hasLocale
} from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { getMessages } from 'next-intl/server';
import { ReactNode } from "react";

import './globals.css';
import Header from '@/app/[locale]/components/Header';
import { ThemeProvider } from '@/app/[locale]/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Blog Task App',
  description: 'A modern blog built with Next.js 15, optimized for performance and SEO.',
  metadataBase: new URL('https://blogapp.com'),
  openGraph: {
    title: 'Blog Task App',
    description: 'Read modern blog posts powered by Next.js',
    url: 'https://blogapp.com',
    siteName: 'Blog Task App',
    images: [
      {
        url: 'https://blogapp.com/og-image.png',
        width: 800,
        height: 600
      }
    ],
    locale: 'en',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Task App',
    description: 'Explore trending blog content in one place',
    site: '@yourtwitterhandle',
    images: ['https://yourdomain.com/og-image.png']
  },
  icons: {
    icon: '/favicon.ico'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages: AbstractIntlMessages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="bg-gray-100 text-[#181A2A] dark:bg-[#181A2A] dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
