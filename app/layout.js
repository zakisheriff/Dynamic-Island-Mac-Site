import './globals.css';

export const metadata = {
  metadataBase: new URL('https://dynamicisland.theatom.lk'),
  title: 'Dynamic Island Mac — by The Atom',
  description: 'The Best Dynamic Island for Mac. Bring the iOS Dynamic Island experience to your macOS. Music controls, notifications, timers, and more. 100% Free by The Atom.',
  keywords: [
    'Dynamic Island Mac',
    'Dynamic Island for Mac',
    'Dynamic Island macOS',
    'The Atom Dynamic Island',
    'Dynamic Island by The Atom',
    'Mac Notch',
    'Macbook Dynamic Island',
    'macOS Productivity Tools',
    'Mac Customization',
    'Free Mac Apps',
  ],
  authors: [{ name: 'The Atom', url: 'https://www.theatom.lk' }],
  openGraph: {
    title: 'Dynamic Island Mac — by The Atom',
    description: 'Bring the Dynamic Island experience to your Mac. 100% Free.',
    url: 'https://dynamicisland.theatom.lk',
    siteName: 'Dynamic Island Mac by The Atom',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Dynamic Island Mac by The Atom',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamic Island Mac — by The Atom',
    description: 'Bring the Dynamic Island experience to your Mac. 100% Free.',
    images: ['/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
