import {
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Input,
  Select,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react'
import { AllLists } from '../components'
import { Layout } from '../components/layouts'
import { AnimeFormats, Genres } from '../utils/data'
import text from '../utils/data/text.json'
import { Formats, MultipleAnimes } from '../utils/types'
import { SearchIcon } from '@chakra-ui/icons'

// TODO: Fix Genres, Fix footer when there is no search results
const Search: NextPage = () => {
  const [name, setName] = useState<string>('')
  // const [genre, setGenre] = useState<string>('')
  const [format, setFormat] = useState<string>('')
  const [data, setData] = useState<MultipleAnimes>([])

  const searchAnime = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/${Formats.Anime}?q=${name}&type=${format}`
    )
    const animeInfo = await response.json()
    setData(animeInfo.data)
    console.log(data)
  }

  return (
    <Layout title={text.branding}>
      <Container maxW='container.xl'>
        <HStack>
          <Input placeholder='Name' onChange={(e) => setName(e.target.value)} />
          {/* <Select
            placeholder='Genres'
            onChange={(e) => setGenre(e.target.value)}
          >
            {Genres.map((genre) => (
              <option key={genre.id}>{genre.name}</option>
            ))}
          </Select> */}
          <Select
            placeholder='Type'
            onChange={(e) => setFormat(e.target.value)}
          >
            {AnimeFormats.map((format) => (
              <option key={format.id}>{format.name}</option>
            ))}
          </Select>
          <IconButton
            icon={<SearchIcon />}
            size='md'
            p={4}
            onClick={() => searchAnime()}
            aria-label='Search'
          />
        </HStack>
        {data ? (
          <AllLists data={data} type={Formats.Anime} />
        ) : (
          <Heading>{text.begin_search}</Heading>
        )}
      </Container>
    </Layout>
  )
}

export default Search
