import Header from '@/components/Header/Header'
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
};