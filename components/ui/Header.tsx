import React from 'react'
import NextLink from 'next/link'
import {
  Flex,
  Link,
  Stack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

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
    <Flex w='100%' as='nav' bg='black.50' p={6} mb={12}>
      <Stack direction='row' display={{ sm: 'none', md: 'flex' }}>
        <ItemLink href='/'>Home</ItemLink>
        <ItemLink href='/anime/top-animes'>Top Animes</ItemLink>
        <ItemLink href='/manga/top-mangas'>Top Mangas</ItemLink>
        <ItemLink href='/about'>About</ItemLink>
      </Stack>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          bg='black.50'
          color='white.50'
          variant='outline'
          icon={<HamburgerIcon />}
          aria-label='Options'
          display={{ sm: 'flex', md: 'none' }}
          _hover={{
            background: 'black',
          }}
        />
        <MenuList bg='black.50'>
          <ItemLink href='/'>
            <MenuItem>Home</MenuItem>
          </ItemLink>
          <ItemLink href='/anime/top-animes'>
            <MenuItem>Top Animes</MenuItem>
          </ItemLink>
          <ItemLink href='/manga/top-mangas'>
            <MenuItem>Top Mangas</MenuItem>
          </ItemLink>
          <ItemLink href='/about'>
            <MenuItem>About</MenuItem>
          </ItemLink>
        </MenuList>
      </Menu>
    </Flex>
  )
}
