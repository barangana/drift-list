import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import SearchBar from '../components/ui/SearchBar'
import text from '../utils/data/text.json'

const Home: NextPage = () => {
  return (
    <Layout title={text.branding}>
      Main Page
      <SearchBar />
    </Layout>
  )
}

export default Home
