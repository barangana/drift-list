import { GetServerSideProps, NextPage } from 'next'
import { Formats, SingleAnime, SingleManga } from '../../utils/types'
import { Layout } from '../../components/layouts'
import { MainContent } from '../../components'

interface MangaProps {
  manga: { data: SingleManga & SingleAnime }
}

const Manga: NextPage<MangaProps> = ({ manga }) => {
  const { data } = manga
  return (
    <Layout title={data.title}>
      <MainContent data={data} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/${Formats.Manga}/${id}/full`
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
