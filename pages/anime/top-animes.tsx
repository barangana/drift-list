import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import AllLists from '../../components/AllLists'
import { TopAnimes } from '../../utils/types'

interface TopAnimesProps {
  tops: { data: TopAnimes }
}

const TopAnimes: NextPage<TopAnimesProps> = ({ tops }) => {
  const { data } = tops
  console.log(data[0].images.jpg.image_url)
  return (
    <div>
      <AllLists data={data} />
    </div>
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
