import StyledDecorator from './stylesDecorator'
import { muiTheme } from 'storybook-addon-material-ui'
import theme from '../src/theme'

import '@fontsource/work-sans/latin.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

// export const decorators = [muiTheme([theme])]
export const decorators = [StyledDecorator]
