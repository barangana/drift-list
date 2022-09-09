import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    black: {
      50: '#23252b',
      100: '#647380',
      900: '#000000',
    },
    white: {
      50: '#edf1f5',
      900: '#ffffff',
    },
    branding: {
      50: '#a7c7e7',
    },
  },
  fonts: {
    heading: `"Roboto", sans-serif`,
    body: `"Roboto", sans-serif`,
  },
})

export default theme
