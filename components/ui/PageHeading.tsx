import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

interface PageHeadingProps {
  title: string
}

const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <Box bg='white' w='100%' p={16}>
      <Container maxW='container.xl'>
        <Heading pl={4}>{title}</Heading>
      </Container>
    </Box>
  )
}

export default PageHeading
