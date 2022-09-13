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

interface MangaProps {
  manga: { data: SingleAnime }
}

const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

const Manga: NextPage<MangaProps> = ({ manga }) => {
  const { data } = manga
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
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/manga/${id}/full`
  )
  const manga = await response.json()

  if (manga.status === 404) {
    return { notFound: true }
  }

  return {
    props: { manga },
  }
}

export default Manga
