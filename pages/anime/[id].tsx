import { GetServerSideProps, NextPage } from 'next'
import { Box, Container, Heading } from '@chakra-ui/react'
import { SingleAnime } from '../../utils/types'
import Image from 'next/image'

interface AnimeProps {
  anime: { data: SingleAnime }
}

const Anime: NextPage<AnimeProps> = ({ anime }) => {
  const { data } = anime
  // console.log(data)
  console.log(data.aired.string)
  return (
    <Container>
      <Box>
        <Heading>{data.title}</Heading>
        <Image
          src={data.images.jpg.image_url}
          alt={data.title}
          width={200}
          height={200}
        />
        <p>Synopsis: {data.synopsis}</p>
        <div>
          Genres:
          {data.genres.map((genre) => (
            <div key={genre.mal_id}>{genre.name}</div>
          ))}
        </div>
        <p>Aired: {data.aired.string}</p>
        <p>Episodes: {data.episodes}</p>
      </Box>
    </Container>
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
