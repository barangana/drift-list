import Head from 'next/head'
import React from 'react'
import { Footer } from '../ui/Footer'
import { Header } from '../ui/Header'
import text from '../../utils/data/text.json'

interface LayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={text.description} />
        <meta name='author' content={text.author} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
