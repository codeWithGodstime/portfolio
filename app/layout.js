import "./globals.css"
import Navigation from "@/components/Navigation"
import { NavigationProvider } from "@/context/navigation-context"
import { Inter, Montserrat, Fira_Code } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code'
})

export const metadata = {
  title: "Mgboawaji Williamson | Software Backend Engineer",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${firaCode.variable}`}>
      <body className={`font-sans bg-zinc-950`}>
        <NavigationProvider>
          <Navigation />
          <main className="transition-all duration-300 ease-in-out">
            {children}
          </main>
        </NavigationProvider>
      </body>
    </html>
  )
}