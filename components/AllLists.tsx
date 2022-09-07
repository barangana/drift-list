import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Formats, MultipleAnimes, MultipleMangas } from '../utils/types'
import { Card } from './'

interface AllListsProps {
  data: MultipleAnimes | MultipleMangas
  type: Formats
}

const AllLists: React.FC<AllListsProps> = ({ data, type }) => {
  return (
    <Container maxW='container.xl'>
      <SimpleGrid columns={[1, 3, 5]} alignItems='center'>
        {data.map((single) => (
          <Card
            key={single.mal_id}
            title={single.title}
            image_url={single.images.jpg.image_url}
            id={single.mal_id}
            type={type}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default AllLists
