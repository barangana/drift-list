import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/layouts'
import text from '../utils/data/text.json'

const ErrorPage: NextPage = () => {
  return (
    <Layout title='Error'>
      <Flex
        direction='column'
        align='center'
        justify='center'
        h='calc(100vh - 288px)'
      >
        <Heading p={2}>Error 404</Heading>
        <Heading size='md'>Page not found</Heading>
      </Flex>
    </Layout>
  )
}

export default ErrorPage
