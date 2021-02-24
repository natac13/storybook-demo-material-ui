import {
  createMuiTheme,
  ThemeOptions,
  responsiveFontSizes,
} from '@material-ui/core'

const textPrimary = `#5d5d5d`
const textSecondary = `#707070`

const headerCommon = {
  fontWeight: 800,
  color: textPrimary,
}

const theme: ThemeOptions = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: `'Work Sans', sans-serif`,
      fontSize: 17,
      h1: {
        ...headerCommon,
      },
      h2: {
        ...headerCommon,
      },
      h3: {
        ...headerCommon,
      },
      h4: {
        ...headerCommon,
      },
      h5: {
        ...headerCommon,
      },
      h6: {
        ...headerCommon,
      },
      subtitle1: {
        ...headerCommon,
      },
      subtitle2: {
        ...headerCommon,
        fontWeight: 600,
        fontSize: `0.95rem`,
        color: textSecondary,
        lineHeight: 1.8,
      },
      body1: {
        fontWeight: 600,
        color: textSecondary,
        lineHeight: 1.6,
      },
      body2: {
        fontWeight: 600,
        color: textSecondary,
        lineHeight: 1.6,
      },
    },
    palette: {
      mode: `light`,
      primary: {
        main: `#0e5814`,
      },
      secondary: {
        main: `#EB4F00`,
      },
      text: {
        primary: `#5d5d5d`,
        secondary: `#707070`,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: `12px 18px !important`,
          },
          label: {
            fontWeight: 700,
            textTransform: `capitalize`,
          },
        },
      },
    },
  })
)

export default theme
