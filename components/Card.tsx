import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardProps {
  id: number
  title: string
  image_url?: string
}

//TODO: Think about if it is a useless component or not. To either refactor or delete.
const Card: React.FC<CardProps> = ({ title, image_url, id }) => {
  return (
    <Link href={`/anime/${id}`} passHref>
      <a>
        <Image
          src={image_url ? image_url : ''}
          alt={title}
          width={200}
          height={200}
        />
        <Box>{title}</Box>
      </a>
    </Link>
  )
}

export default Card
