import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Toaster } from "sonner";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
                <main className="container">
                      
                      {children}
                </main>
                <Toaster />

              </ThemeProvider>

            
          </body>
        </html>
    </ClerkProvider>
  );
}
