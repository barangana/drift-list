import { GetServerSideProps, NextPage } from 'next'
import { SingleManga } from '../../utils/types'
import { Layout } from '../../components/layouts'
import { MainContent } from '../../components'

interface MangaProps {
  manga: { data: SingleManga }
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
