import Image from 'next/image'
import React from 'react'

interface CardProps {
  alt: string
  image_url?: string
}

const Card: React.FC<CardProps> = ({ alt, image_url }) => {
  return (
    <Image
      src={image_url ? image_url : ''}
      alt={alt}
      width={200}
      height={200}
    />
  )
}

export default Card
