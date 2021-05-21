import { extendTheme, textDecoration, theme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  // sm: '360px',
  // md: '375px',
  // lg: '980px',
  // xl: '1020px'
  sm: '360px',
  md: '760px',
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
    Link: {
      variants: {
        textLink: {
          _hover: { color: 'white' }
        },
        iconLink: {
          _hover: { transform: 'scale(1.2)' }
        }
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
        focusBorderColor: '#F2994A'
      }
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: '#F2994A'
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: theme.colors.black
      },
      input: {
        paddingLeft: '5px'
      },
      textArea: {
        paddingLeft: '5px'
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
