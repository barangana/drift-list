import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { SingleAnime, SingleManga } from '../../utils/types'

interface MainContentProps {
  data: SingleAnime & SingleManga
}

const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

export const MainContent: React.FC<MainContentProps> = ({ data }) => {
  return (
    <Container
      maxW='container.xl'
      p={0}
      mt={{ sm: 12, md: 24 }}
      mb={{ sm: 12, md: 24 }}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        spacingY={4}
        ml={{ md: 32, lg: 0 }}
      >
        <Flex justify={['center', 'center', 'flex-start', 'center']}>
          <ChakraImage
            src={data.images.jpg.image_url}
            alt={data.title}
            width={200}
            height={300}
            rounded='md'
          />
        </Flex>
        <Box
          position={{ sm: 'static', md: 'relative' }}
          right={{ md: 20 }}
          ml={4}
          mr={4}
        >
          <Heading pb={6}>{data.title}</Heading>
          <Text>{data.synopsis}</Text>
        </Box>
        <Flex ml={4} direction='column' align='center'>
          <Heading size='sm'>Genres:</Heading>
          {data.genres.map((genre) => (
            <Box key={genre.mal_id}>{genre.name}</Box>
          ))}
          {data.status.includes('air') || data.status.includes('Air') ? (
            <>
              <Heading size='sm' pt={2}>
                Aired
              </Heading>
              {data.aired.string}
              <Heading size='sm' pt={2}>
                Episodes
              </Heading>
              {data.episodes}
            </>
          ) : (
            <>
              <Heading size='sm' pt={2}>
                Chapters
              </Heading>
              {data.chapters ? data.chapters : data.status}
            </>
          )}
        </Flex>
        <Box
          ml={4}
          mr={4}
          bg='white.50'
          position={{ sm: 'static', md: 'relative' }}
          right={{ md: 20 }}
        >
          Work In Progress
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default MainContent
