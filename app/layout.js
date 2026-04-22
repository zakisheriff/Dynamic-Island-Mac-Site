import './globals.css';
import SmoothScroll from './components/SmoothScroll';

export const metadata = {
  metadataBase: new URL('https://dynamicislandmac.theatom.lk'),
  title: 'Dynamic Island Mac Free Download — by The Atom',
  description: 'Get the best Dynamic Island Mac Free app. Bring the iOS Dynamic Island experience to your macOS for free. Music controls, notifications, timers, and more. 100% Free download by The Atom.',
  keywords: [
    'Dynamic Island Mac',
    'Dynamic Island Mac Free',
    'Dynamic Island Mac Free Download',
    'Dynamic Island for Mac Free',
    'Dynamic Island macOS Free',
    'Free Dynamic Island Mac App',
    'The Atom Dynamic Island',
    'Dynamic Island by The Atom',
    'Dynamic Island Mac by The Atom',
    'Mac Notch App Free',
    'Macbook Dynamic Island Free',
    'macOS Productivity Tools',
    'Free Mac Customization',
    'Free Mac Apps',
  ],
  authors: [{ name: 'The Atom', url: 'https://www.theatom.lk' }],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Dynamic Island Mac Free Download — by The Atom',
    description: 'Bring the Dynamic Island experience to your Mac for free. 100% Free App by The Atom.',
    url: 'https://dynamicislandmac.theatom.lk',
    siteName: 'Dynamic Island Mac Free by The Atom',
    images: [
      {
        url: '/Logo-Dynamic.png',
        width: 1024,
        height: 1024,
        alt: 'Dynamic Island Mac Free Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamic Island Mac Free Download — by The Atom',
    description: 'Bring the Dynamic Island experience to your Mac for free. 100% Free App by The Atom.',
    images: ['/Logo-Dynamic.png'],
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
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
