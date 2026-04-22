import './globals.css';

export const metadata = {
  title: 'Dynamic Island Mac — by The Atom',
  description: 'Bring the Dynamic Island experience to your Mac. Free, beautiful, and powerful. Built by The Atom.',
  keywords: ['Dynamic Island', 'Mac', 'macOS', 'The Atom', 'notch', 'notifications', 'music player'],
  openGraph: {
    title: 'Dynamic Island Mac — by The Atom',
    description: 'Bring the Dynamic Island experience to your Mac. 100% Free.',
    type: 'website',
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
