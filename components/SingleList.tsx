import { Container, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Formats, MultipleAnimes } from '../utils/types'
import { Card } from './'

//TODO: Fix issue where after first page load it is fine but not on refresh.
// Add async await into useEffect when fetching data from the api.

interface SingleListProps {
  url: string
  type: Formats
  section: string
}

export const SingleList: React.FC<SingleListProps> = ({
  url,
  type,
  section,
}) => {
  const [info, setInfo] = useState<MultipleAnimes>()

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data)
        setInfo(data.data)
      })
  }, [])

  return info ? (
    <Container maxW='container.xl'>
      {section}
      <SimpleGrid columns={[1, 3, 6]}>
        {info.map((single) => (
          <Card
            key={single.mal_id}
            id={single.mal_id}
            title={single.title}
            image_url={single.images.jpg.image_url}
            type={type}
          />
        ))}
      </SimpleGrid>
    </Container>
  ) : null
}

export default SingleList
