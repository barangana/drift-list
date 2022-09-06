import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { TopAnimes } from '../utils/types'
import Card from './Card'

interface AllListsProps {
  data: TopAnimes
}

const AllLists: React.FC<AllListsProps> = ({ data }) => {
  return (
    <Container maxW='container.xl'>
      <SimpleGrid columns={[1, 3, 5]} alignItems='center'>
        {data.map((single) => (
          <Card
            key={single.mal_id}
            title={single.title}
            image_url={single.images.jpg.image_url}
            id={single.mal_id}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default AllLists
