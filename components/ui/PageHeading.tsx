import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

interface PageHeadingProps {
  title: string
  pre_title?: string
}

export const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <Box w='100%' mt={6} mb={6} pl={[0, 0, 4, 8]}>
      <Container maxW='container.xl'>
        <Flex justify={['center', 'center', 'flex-start']}>
          <Heading>{title}</Heading>
        </Flex>
      </Container>
    </Box>
  )
}
