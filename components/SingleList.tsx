import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Formats, MultipleAnimes } from '../utils/types'
import { Card } from './'

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
    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setInfo(data.data)
        })
    }
    fetchData()
  }, [])

  return info ? (
    <Container maxW='container.xl' mt={6}>
      <Heading as='h3' size='md' pl={6} pb={4}>
        {section}
      </Heading>
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
      <Divider mt={4} />
    </Container>
  ) : null
}

export default SingleList
