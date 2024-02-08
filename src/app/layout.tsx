import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Ubuntu_Mono } from 'next/font/google'
// import metadata from './metadata.json';

const ubuntuMono = Ubuntu_Mono({ 
    subsets: ['latin'],
    weight: '400',
});

export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en">
        <body>
            <main className={ubuntuMono.className}>
                {children}
            </main>
            <Analytics />
            <SpeedInsights />
        </body>
        {/* Site inspired from https://www.babbev.com/ */}
      </html>
    )
}