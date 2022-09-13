import React from 'react'
import NextLink from 'next/link'
import { Flex, Link, Text } from '@chakra-ui/react'

export const Footer: React.FC = () => {
  return (
    <Flex as='footer' direction='column' p={6} mt='6' bg='black.50'>
      <Text align='center' p={2} color='white.50'>
        All data belong to{' '}
        <NextLink href='https://jikan.moe/' passHref>
          <Link>Jikan API</Link>
        </NextLink>
      </Text>
    </Flex>
  )
}
