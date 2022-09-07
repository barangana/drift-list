import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import AllLists from '../../components/AllLists'
import { Layout } from '../../components/layouts'
import PageHeading from '../../components/ui/PageHeading'
import { Formats, MultipleMangas } from '../../utils/types'

interface TopMangaProps {
  tops: { data: MultipleMangas }
  format: Formats
}

const TopMangas: NextPage<TopMangaProps> = ({ tops }) => {
  const { data } = tops
  return (
    <Layout title='Top Mangas'>
      <PageHeading title='Top Mangas' />
      <AllLists data={data} type={Formats.Manga} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/top/manga`
  )
  const tops = await response.json()
  return {
    props: { tops },
  }
}

export default TopMangas
