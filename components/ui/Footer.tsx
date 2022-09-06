import React from 'react'
import NextLink from 'next/link'
import { Box, Link, Text } from '@chakra-ui/react'

export const Footer: React.FC = () => {
  return (
    <Box w='100%' as='footer' bg='black.50' mt={16}>
      <Text align='center' p={2} color='white'>
        All data belong to{' '}
        <NextLink href='https://jikan.moe/' passHref>
          <Link>Jikan API</Link>
        </NextLink>
      </Text>
    </Box>
  )
}
