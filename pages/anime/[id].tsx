import { GetServerSideProps, NextPage } from 'next'
import { Container, Flex, Heading, VStack } from '@chakra-ui/react'
import { SingleAnime } from '../../utils/types'
import Image from 'next/image'

interface AnimeProps {
  anime: { data: SingleAnime }
}

const Anime: NextPage<AnimeProps> = ({ anime }) => {
  const { data } = anime
  return (
    <Container maxW='container.xl' p={0}>
      <Flex>
        <VStack>
          <Image
            src={data.images.jpg.image_url}
            alt={data.title}
            height={300}
            width={225}
          />
        </VStack>
        <VStack
          w='full'
          h='full'
          p={10}
          spacing={10}
          alignItems='flex-start'
          bg='gray.50'
        >
          <Heading>{data.title}</Heading>
          <p>Synopsis: {data.synopsis}</p>
          <div>
            Genres:
            {data.genres.map((genre) => (
              <div key={genre.mal_id}>{genre.name}</div>
            ))}
          </div>
          <p>Aired: {data.aired.string}</p>
          <p>Episodes: {data.episodes}</p>
        </VStack>
      </Flex>
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
