import { GetServerSideProps, NextPage } from 'next'
import {
  Box,
  chakra,
  Container,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react'
import { SingleAnime } from '../../utils/types'
import Image from 'next/image'
import { Layout } from '../../components/layouts'

interface AnimeProps {
  anime: { data: SingleAnime }
}

const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

//TODO: Create a reusable component for both anime and manga that takes in data. Like AllLists
const Anime: NextPage<AnimeProps> = ({ anime }) => {
  const { data } = anime
  return (
    <Layout title={data.title}>
      <Container maxW='container.xl' p={0} h='calc(100vh - 295px)' mt={24}>
        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(6, 1fr)'>
          <GridItem>
            <ChakraImage
              src={data.images.jpg.image_url}
              alt={data.title}
              width={200}
              height={300}
              rounded='md'
            />
          </GridItem>
          <GridItem colSpan={5} ml={6}>
            <Heading pb={6}>{data.title}</Heading>
            {data.synopsis}
          </GridItem>
          <GridItem mt={4}>
            <Heading size='sm'>Genres:</Heading>
            {data.genres.map((genre) => (
              <Box key={genre.mal_id}>{genre.name}</Box>
            ))}
            <Heading size='sm' pt={2}>
              Aired:
            </Heading>
            {data.aired.string}
            <Heading size='sm' pt={2}>
              Episodes
            </Heading>
            {data.episodes}
          </GridItem>
          <GridItem colSpan={5} ml={6} mt={4}>
            {/* reviews component should go in this grid */}
          </GridItem>
        </Grid>
      </Container>
    </Layout>
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
