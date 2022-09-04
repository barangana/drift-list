import { Box } from '@chakra-ui/react'
import React from 'react'
import { TopAnimes } from '../utils/types'
import Card from './Card'

interface AllListsProps {
  data: TopAnimes
}

const AllLists: React.FC<AllListsProps> = ({ data }) => {
  return (
    <div>
      {data.map((single) => (
        <Box key={single.mal_id}>
          <Card
            alt={single.title}
            image_url={single.images.jpg.image_url}
            id={single.mal_id}
          />
        </Box>
      ))}
    </div>
  )
}

export default AllLists
