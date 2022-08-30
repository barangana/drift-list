import { GetServerSideProps, NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import { SingleAnime } from '../../utils/types'

interface AnimeProps {
  anime: { data: SingleAnime }
}

const Anime: NextPage<AnimeProps> = ({ anime }) => {
  const { data } = anime
  return (
    <div>
      Single Anime Page
      <Heading>{data.title}</Heading>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/anime/${id}/full`
  )
  const anime = await response.json()

  if (anime.status === 404) {
    return { notFound: true }
  }

  return {
    props: { anime },
  }
}

export default Anime
