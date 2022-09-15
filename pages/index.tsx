import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { SingleList } from '../components'
import text from '../utils/data/text.json'
import { Formats } from '../utils/types'

const Home: NextPage = () => {
  return (
    <Layout title={text.branding}>
      <SingleList
        url={`${process.env.NEXT_PUBLIC_BASE_API_URL}/top/${Formats.Anime}?filter=upcoming&limit=6`}
        section='Upcoming'
        type={Formats.Anime}
      />
      <SingleList
        url={`${process.env.NEXT_PUBLIC_BASE_API_URL}/top/${Formats.Anime}?filter=airing&limit=6`}
        section='Airing'
        type={Formats.Anime}
      />
      <SingleList
        url={`${process.env.NEXT_PUBLIC_BASE_API_URL}/top/${Formats.Anime}?filter=bypopularity&limit=6`}
        section='All time popular'
        type={Formats.Anime}
      />
    </Layout>
  )
}

export default Home
