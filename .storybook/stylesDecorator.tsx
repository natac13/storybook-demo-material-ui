import * as React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Story as IStory } from '@storybook/react/types-6-0'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import theme from '../src/theme'
import { StylesProvider } from '@material-ui/core'

const StyledDecorator: React.VFC = (Story: IStory) => {
  // TODO v5: remove StyledEngineProvider once migration to emotion is completed
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        {/* <EmotionThemeProvider theme={theme}> */}
        <CssBaseline />
        <Story />
        {/* </EmotionThemeProvider> */}
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default StyledDecorator
