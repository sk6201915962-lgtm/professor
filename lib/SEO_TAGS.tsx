import { Metadata } from "next";

export const SEO_METADATA_HOME: Metadata = {
  title: 'DR SR NAYAK',
  description: 'DR. SR Nayak - Experienced medical professional specializing in healthcare excellence. Explore comprehensive medical services, expertise, and patient care solutions.',
  generator: 'Next.js',
  applicationName: 'DR SR NAYAK Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['DR SR NAYAK', 'medical doctor', 'healthcare', 'medical professional', 'doctor portfolio', 'medical services'],
  authors: [{ name: 'DR SR NAYAK' }],
  creator: 'DR SR NAYAK',
  publisher: 'DR SR NAYAK',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.soumyaranjannayak.com/',
    title: 'DR SR NAYAK - Medical Professional & Healthcare Expert',
    description: 'DR. SR Nayak - Experienced medical professional specializing in healthcare excellence. Explore comprehensive medical services, expertise, and patient care solutions.',
    siteName: 'DR SR NAYAK Portfolio',
    images: [
      {
        url: 'https://www.soumyaranjannayak.com/android-chrome-512x512.png',
        width: 1200,
        height: 630,
        alt: 'DR SR NAYAK - Medical Professional',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.soumyaranjannayak.com/android-chrome-512x512.png',
        width: 1080,
        height: 1080,
        alt: 'DR SR NAYAK - Medical Professional',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SoumyaR28911292',
    creator: '@SoumyaR28911292',
    title: 'DR SR NAYAK - Medical Professional & Healthcare Expert',
    description: 'DR. SR Nayak - Experienced medical professional specializing in healthcare excellence. Explore comprehensive medical services and patient care.',
    images: [
      {
        url: 'https://www.soumyaranjannayak.com/android-chrome-512x512.png',
        alt: 'DR SR NAYAK - Medical Professional',
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb',
      },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#ffffff',
    'msapplication-TileColor': '#2563eb',
    'msapplication-TileImage': '/mstile-144x144.png',
    'msapplication-config': '/browserconfig.xml',
    'canonical': 'https://www.soumyaranjannayak.com/',
    'language': 'English',
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=1',
    'twitter:domain': 'soumyaranjannayak.com/',
    'twitter:url': 'https://www.soumyaranjannayak.com/',
    'og:url': 'https://www.soumyaranjannayak.com/',
    'og:site_name': 'DR SR NAYAK Portfolio',
    'medical-professional': 'true',
    'healthcare-provider': 'DR SR NAYAK',
    'referrer': 'origin-when-cross-origin',
  },
  alternates: {
    canonical: 'https://www.soumyaranjannayak.com/',
    languages: {
      'en-US': 'https://www.soumyaranjannayak.com/'
    },
  }
};