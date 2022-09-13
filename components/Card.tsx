import { Box, Text, chakra, Link } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { Formats } from '../utils/types'

interface CardProps {
  id: number
  title: string
  image_url?: string
  type: Formats
}

// Allows Next optimized images to be styled with Chakra.
const AnimeImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

export const Card: React.FC<CardProps> = ({ title, image_url, id, type }) => {
  return (
    <Box p={6} _hover={{ textColor: 'black.100', bg: 'white.50' }} rounded='md'>
      <NextLink href={`/${type}/${id}`} passHref>
        <Link>
          <AnimeImage
            src={image_url ? image_url : ''}
            alt={title}
            width={200}
            height={300}
            rounded='md'
          />
        </Link>
      </NextLink>
      <Text align='center'>{title}</Text>
    </Box>
  )
}

export default Card
