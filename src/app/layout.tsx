import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import ContentContainer from '@/components/container/Container';
import Header from '@/components/header/Header';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || 'https://www.google.com'),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !TODO-NADEEM generate an favicon icon
  // !TODO-NADEEM to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence', // !TODO-NADEEM
  },
  // !TODO-NADEEM
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        <ContentContainer>
          <ContentContainer.Main>{children}</ContentContainer.Main>
          <ContentContainer.Summary>Summary</ContentContainer.Summary>
        </ContentContainer>
      </body>
    </html>
  );
}
