import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { Ubuntu_Mono } from 'next/font/google'

const ubuntuMono = Ubuntu_Mono({ 
    subsets: ['latin'],
    weight: '400',
});

export const metadata = {
    icons: {
      icon: '/favicon.ico',
    },
    title: 'Aka.sh',
    description: 'Gateway to Akash Gajjar',
    openGraph: {
      title: 'Aka.sh',
      description: 'Gateway to Akash Gajjar',
    },
}

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
        </body>
        {/* Site inspired from https://www.babbev.com/ */}
      </html>
    )
}