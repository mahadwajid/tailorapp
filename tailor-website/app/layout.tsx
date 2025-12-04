import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';


export const metadata = {
  title: 'Tailor Website',
  description: 'A simple tailor service website built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
