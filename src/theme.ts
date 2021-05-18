import { extendTheme, theme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '900px',
  md: '1020px',
  lg: '1020px',
  xl: '1020px'
})

export const chakraTheme = extendTheme({
  breakpoints,
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'web.button'
      }
    },
    Heading: {
      baseStyle: {
        color: '#F2994A',
        paddingBottom: '10px'
      }
    },
    Text: {
      baseStyle: {
        color: theme.colors.white
      }
    },
    FormLabel: {
      baseStyle: {
        color: theme.colors.white
      }
    },
    FormControl: {
      defaultProps: {
        paddingBottom: '10px'
      }
    },
    Input: {
      defaultProps: {
        color: 'blue.500',
        focusBorderColor: '#F2994A'
      }
    },
    Textarea: {
      defaultProps: {
        color: theme.colors.white,
        focusBorderColor: '#F2994A'
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: theme.colors.black
      }
    }
  },
  colors: {
    web: {
      primary: '#F2994A',
      button: { 500: '#F2994A' }
    }
  }
})
