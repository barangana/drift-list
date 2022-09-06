import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

interface CardProps {
  id: number
  title: string
  image_url?: string
}

const Card: React.FC<CardProps> = ({ title, image_url, id }) => {
  return (
    <Box p={6}>
      <NextLink href={`/anime/${id}`} passHref>
        <a>
          <Image
            src={image_url ? image_url : ''}
            alt={title}
            width={200}
            height={200}
          />
        </a>
      </NextLink>
      <Text align='center'>{title}</Text>
    </Box>
  )
}

export default Card
