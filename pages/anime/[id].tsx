import { GetServerSideProps, NextPage } from 'next'
import { Formats, SingleAnime, SingleManga } from '../../utils/types'
import { Layout } from '../../components/layouts'
import { MainContent } from '../../components'

interface AnimeProps {
  anime: { data: SingleAnime & SingleManga }
}

const Anime: NextPage<AnimeProps> = ({ anime }) => {
  const { data } = anime
  return (
    <Layout title={data.title}>
      <MainContent data={data} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/${Formats.Anime}/${id}/full`
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
