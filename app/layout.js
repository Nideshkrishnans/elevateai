import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";



const inter = Inter({subsets: ["latin"],preload:true})


export const metadata = {
  title: "ElevateAI",
  description: "AI Career coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            
            enableSystem
            disableTransitionOnChange
          >
           {/*  header */}
           <Header/>
           <main className="min-h-screen">
           {children}
           </main>
           <Toaster richColors/>
          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200 ">
              <p> © 2025 Elevate AI · Empowering Your Career with Intelligence</p>
            </div>
            
          </footer>
          </ThemeProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
