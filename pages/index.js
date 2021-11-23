import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <main>
        <Header title="Bem-vindo ao meu app!" />
      </main>
    </div>
  )
}
