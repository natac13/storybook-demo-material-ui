import Container from '@material-ui/core/Container'
import * as React from 'react'
import Navbar from './components/ScoreCard/Navbar'

export default function App() {
  return (
    <Container maxWidth="sm">
      <Navbar percentComplete={25} title="The Basics" />
    </Container>
  )
}
