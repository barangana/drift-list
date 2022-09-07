import { Box, Text } from '@chakra-ui/react'
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

export const Card: React.FC<CardProps> = ({ title, image_url, id, type }) => {
  return (
    <Box p={6}>
      <NextLink href={`/${type}/${id}`} passHref>
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
