import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import AllLists from '../../components/AllLists'
import { Layout } from '../../components/layouts'
import { Formats, MultipleAnimes } from '../../utils/types'

interface TopAnimesProps {
  tops: { data: MultipleAnimes }
  type: Formats
}

const TopAnimes: NextPage<TopAnimesProps> = ({ tops }) => {
  const { data } = tops
  return (
    <Layout title='Top Animes'>
      <AllLists data={data} type={Formats.Anime} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/top/anime`
  )
  const tops = await response.json()
  return {
    props: { tops },
  }
}

export default TopAnimes
