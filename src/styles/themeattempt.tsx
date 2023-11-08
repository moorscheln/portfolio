import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import useColorMode from "@chakra-ui/theme"
import { theme as chakraTheme } from "@chakra-ui/theme";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { useColorModeValue } from "@chakra-ui/react";

const themeattempt = extendTheme(
  {
    colors: {
      ...chakraTheme.colors,
      brand: chakraTheme.colors.blue,
      darkGray:
      {
        50: '#f2f2f2',
        100: '#d9d9d9',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#262626',
        900: '#0d0d0d',
        1000: "#111111",
      },
      betterBlack:
      {
        50: '#f8f0f2',
        100: '#d9d9d9',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#262626',
        900: '#120b0d',
      }
    },
    semanticTokens: {
      colors: {
        "chakra-body-text": { _light: "darkGray.800", _dark: "whiteAlpha.900" },
        "chakra-body-bg": { _light: "white", _dark: "darkGray.800" },
        "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
        "chakra-subtle-bg": { _light: "darkGray.100", _dark: "darkGray.700" },
        "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
      }
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          // color: '#cef542',
          // bg: {_light: 'white',_dark: 'white'},
          // bg: useColorModeValue("white", "darkGray.900"),
          bg: { _light: 'white', _dark: 'darkGray.900' }
        },
      }),
    },
    sizes: {
      ...chakraTheme.space,
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      '3xs': '14rem',
      '2xs': '16rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '90rem',
      container: {
        max: 'max-content',
        min: 'min-content',
        full: '100%',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px'
      },
    },
  },
  // components: {
  //   Button: {
  //     // 1. We can update the base styles
  //     /* baseStyle: {
  //       fontWeight: 'bold', // Normally, it is "semibold"
  //     }, */
  //     // 2. We can add a new button size or extend existing
  //     /* sizes: {
  //       xl: {
  //         h: '56px',
  //         fontSize: 'lg',
  //         px: '32px',
  //       },
  //     }, */
  //     // 3. We can add a new visual variant
  //     variants: {
  //       /* 'with-shadow': {
  //         bg: 'red.400',
  //         boxShadow: '0 0 2px 2px #efdfde',
  //       }, */
  //       // 4. We can override existing variants
  //       outline: {
  //         width: "140px",
  //         borderColor: "#000000",
  //         color: "#2962FF",
  //         _hover: {
  //           borderColor: "#0634B5",
  //           color: "#0634B5"
  //         }
  //       },
  //       /* primary: (props: StyleFunctionProps) => ({
  //         bgColor: props.borderColor === "#2962FF"? 'red.300' : 'red.500',
  //         color: props.color === "#2962FF"? 'red.300' : 'red.500'
  //       }), */
  //       primary:{
  //         width: "140px",
  //         bgColor: "#2962FF",
  //         _hover: {
  //           bgColor: "#0634B5",
  //         }
  //       },
  //       /* outline: {
  //         borderColor="#2962FF",
  //         color="#2962FF"
  //       } */
  //       /* (props: StyleFunctionProps) => ({
  //         bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
  //       }), */
  //       // 5. We can add responsive variants
  //       sm: {
  //         bg: 'teal.500',
  //         fontSize: 'md',
  //       },
  //     },
  //     // 6. We can overwrite defaultProps
  //     defaultProps: {
  //       /* size: 'lg', */ // default is md
  //       /* variant: 'sm', */ // default is solid
  //       // colorScheme: 'green', // default is gray
  //       _hover: {
  //         color: "#0634B5",
  //       }
  //     },
  //   },
  // },
  chakraTheme
);

export default themeattempt;