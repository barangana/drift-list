import React from 'react'
import NextLink from 'next/link'

//TODO: Fix bug when on 'anime/top-animes', the link can send user to 'anime/anime/top-animes'
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
