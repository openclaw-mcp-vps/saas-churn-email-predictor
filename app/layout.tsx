import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnRadar — Predict Churn from Email Patterns',
  description: 'Analyzes customer support email sentiment, frequency, and keywords to predict churn risk 7-30 days early. Built for SaaS founders with 100+ customers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e519a5ed-1313-416f-a122-2d56a3920bb7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
