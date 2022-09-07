import { Box, Container, Link, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/layouts'
import text from '../utils/data/text.json'

const About: NextPage = () => {
  return (
    <Layout title='About' description={text.description}>
      <Container maxW='container.xl'>
        <Box>{text.description}</Box>
        <Text>{text.about}</Text>
        <Text>
          Created by{' '}
          <Link href='https://github.com/barangana'>{text.author}</Link>
        </Text>
        <Text>
          Project Repository:{' '}
          <Link href='https://github.com/barangana/anime-site'>
            Insert name here
          </Link>
        </Text>
      </Container>
    </Layout>
  )
}

export default About
