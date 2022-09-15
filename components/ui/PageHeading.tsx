import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

interface PageHeadingProps {
  title: string
  pre_title?: string
}

export const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <Box w='100%' pt={16} pb={16} pl={{ sm: 0, lg: 8 }}>
      <Container maxW='container.xl'>
        <Flex justify={{ sm: 'center', md: 'center', lg: 'flex-start' }}>
          <Heading>{title}</Heading>
        </Flex>
      </Container>
    </Box>
  )
}
