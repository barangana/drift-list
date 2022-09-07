import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import AllLists from '../../components/AllLists'
import { Formats, MultipleMangas } from '../../utils/types'

interface TopMangaProps {
  tops: { data: MultipleMangas }
  format: Formats
}

const TopAnimes: NextPage<TopMangaProps> = ({ tops }) => {
  const { data } = tops
  return (
    <div>
      <AllLists data={data} type={Formats.Manga} />
    </div>
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

export default TopAnimes
