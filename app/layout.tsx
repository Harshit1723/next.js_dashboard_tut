import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({children,}: {children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={`${inter.className} antialiased bg-black `}>{children}
      <h1 className='text-white' >Harshit Singh Bahedi</h1>
      </body>

    </html>
  );
}