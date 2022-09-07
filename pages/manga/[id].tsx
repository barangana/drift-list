import { GetServerSideProps, NextPage } from 'next'
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react'
import { SingleAnime } from '../../utils/types'
import Image from 'next/image'
import { Layout } from '../../components/layouts'

interface MangaProps {
  manga: { data: SingleAnime }
}

const Manga: NextPage<MangaProps> = ({ manga }) => {
  const { data } = manga
  return (
      <Layout title={data.title}>
        <Container maxW='container.xl' p={0}>
          <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(6, 1fr)'>
            <GridItem>
              <Image
                src={data.images.jpg.image_url}
                alt={data.title}
                height={300}
                width={225}
              />
            </GridItem>
            <GridItem colSpan={5} ml={6}>
              <Heading pb={6}>{data.title}</Heading>
              {data.synopsis}
            </GridItem>
            <GridItem mt={4}>
              <Heading size='sm'>Genres:</Heading>
              {data.genres.map((genre) => (
                <div key={genre.mal_id}>{genre.name}</div>
              ))}
            </GridItem>
            <GridItem colSpan={5} ml={6} mt={4}>
              reviews component should go in this grid
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
