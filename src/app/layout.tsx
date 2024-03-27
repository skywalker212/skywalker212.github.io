import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inconsolata } from 'next/font/google'
// import metadata from './metadata.json';

const inconsolata = Inconsolata({ 
    subsets: ['latin']
});

export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en">
        <body>
            <main className={inconsolata.className}>
                {children}
            </main>
            <Analytics />
            <SpeedInsights />
        </body>
        {/* Site inspired from https://www.babbev.com/ */}
      </html>
    )
}