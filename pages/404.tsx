import { Flex, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
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
        <Heading p={2}>{text.title_404}</Heading>
        <Heading size='md'>{text.text_error_404}</Heading>
      </Flex>
    </Layout>
  )
}

export default ErrorPage
