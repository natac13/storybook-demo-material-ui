import '@fontsource/work-sans/latin.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider'
import { ThemeProvider } from '@material-ui/core/styles'
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from './theme'

ReactDOM.render(
  // TODO v5: remove once migration to emotion is completed
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>,
  document.querySelector('#root')
)
