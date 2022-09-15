import { Button, Container, HStack, Input, Select } from '@chakra-ui/react'
import { Genres, AnimeFormats } from '../../utils/data'
import { useState } from 'react'
import { SearchAnime } from '../../utils/data/search'

//TODO: Figure out in the future how to have the search bar function on each page
export const SearchBar: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [genre, setGenre] = useState<string>('')
  const [format, setFormat] = useState<string>('')

  return (
    <Container maxW='container.xl'>
      <HStack>
        <Input placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <Select placeholder='Any' onChange={(e) => setGenre(e.target.value)}>
          {Genres.map((genre) => (
            <option key={genre.id}>{genre.name}</option>
          ))}
        </Select>
        <Select placeholder='Any' onChange={(e) => setFormat(e.target.value)}>
          {AnimeFormats.map((format) => (
            <option key={format.id}>{format.name}</option>
          ))}
        </Select>
        <Button
          onClick={() => SearchAnime(name, genre, format)}
          size='md'
          p={6}
        >
          Search
        </Button>
      </HStack>
    </Container>
  )
}
