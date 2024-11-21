import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: 'Felix Guerrero - Security Engineer',
  description: 'Security Engineer specializing in Threat Hunting and Incident Response',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>
      {children}
      </body>
      </html>
  )
}

