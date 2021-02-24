import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Navbar from './Navbar'

export default {
  title: 'Score Card Navbar',
  component: Navbar,
}

const Template = (args) => <Navbar {...args} />

export const InitialState = Template.bind({})
InitialState.args = {
  percentComplete: 0,
  title: 'Initial State',
}
