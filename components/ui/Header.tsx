import React from 'react'
import NextLink from 'next/link'

export const Header: React.FC = () => {
  return (
    <div>
      <NextLink href='/' passHref>
        Home
      </NextLink>
      <NextLink href='anime/top-animes'>Top Animes</NextLink>
    </div>
  )
}
