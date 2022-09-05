import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { TopAnimes } from '../utils/types'
import Card from './Card'

interface AllListsProps {
  data: TopAnimes
}

const AllLists: React.FC<AllListsProps> = ({ data }) => {
  return (
    <Container maxW='container.xl' mt={16}>
      <SimpleGrid
        columns={[1, 3, 5]}
        alignItems='center'
        ml={{ base: 32, md: 16, sm: 0 }}
        mr={{ md: 16 }}
      >
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
