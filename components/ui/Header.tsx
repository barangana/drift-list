import React from 'react'
import NextLink from 'next/link'
import { Box, Link, Stack } from '@chakra-ui/react'

interface ItemLinkProps {
  href: string
  children: React.ReactNode
}

const ItemLink: React.FC<ItemLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link p={2} color='white'>
        {children}
      </Link>
    </NextLink>
  )
}

export const Header: React.FC = () => {
  return (
    <Box w='100%' as='nav' bg='black.50' mb={16}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <ItemLink href='/'>Home</ItemLink>
        <ItemLink href='/anime/top-animes'>Top Animes</ItemLink>
        <ItemLink href='/manga/top-mangas'>Top Mangas</ItemLink>
      </Stack>
    </Box>
  )
}
