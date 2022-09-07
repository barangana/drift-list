import { Box, Container, Link, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

const About: NextPage = () => {
  return (
    <Container maxW='container.xl' h='78vh'>
      <Box>
        Insert name here is currently in development. It is used to search
        information about animes, mangas and its other namings.
      </Box>
      <Text>
        Insert name here is created with NextJS, TypeScript, ChakraUI and
        consumes the unofficial MyAnimeList API, JikanAPI. Future iterations
        will have Prisma and PostgreSQL.
      </Text>
      <Text>
        Created by{' '}
        <Link href='https://github.com/barangana'>Adriel Barangan</Link>
      </Text>
      <Text>
        Project Repository:{' '}
        <Link href='https://github.com/barangana/anime-site'>
          Insert name here
        </Link>
      </Text>
    </Container>
  )
}

export default About
