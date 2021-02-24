import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'
import Link from '@material-ui/core/Link'
import Slide from '@material-ui/core/Slide'
import { fade, useTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import { animated, useSpring, config as rsConfig } from 'react-spring'
import logo from '../../assets/images/logo.png'

interface Props {
  title: string
  percentComplete: number
  ImageComponent?: React.FC<unknown>
}

interface DefaultImageProps {
  onClick?: () => void
}

const DefaultImage: React.FC<DefaultImageProps> = ({
  onClick,
}: DefaultImageProps) => (
  <Link
    href="/"
    onClick={onClick}
    css={{ height: '55px', width: '190px', display: 'inline-block' }}
  >
    <img src={logo} alt="Harness Software Logo" />
  </Link>
)

const Header: React.FC<Props> = (props: Props) => {
  const theme = useTheme()
  console.log({ theme })
  const { title, percentComplete, ImageComponent = DefaultImage } = props

  const [slide, setSlide] = useSpring(() => ({
    transform: `translateY(-30px)`,
    opacity: 0,
    reset: false,
  }))

  const open = React.useMemo(() => percentComplete > 0, [percentComplete])

  React.useEffect(() => {
    setSlide({
      opacity: open ? 1 : 0,
      transform: `translateY(${open ? `0` : `30`}px)`,
    })
  }, [open])

  return (
    <AppBar color="default">
      <Toolbar>
        <Box
          css={{
            flex: 1,
            alignItems: 'center',
            display: 'flex',
            padding: theme.spacing(1, 0),
          }}
        >
          <ImageComponent />
        </Box>
        <Box
          css={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography align="center" variant="h4" component="h1">
            {title}
          </Typography>
        </Box>
        <Box
          flex="1"
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Typography variant="body1">{`${percentComplete}% Completed!`}</Typography>
        </Box>
      </Toolbar>
      {percentComplete > 0 && (
        <LinearProgress
          css={{ height: `10px` }}
          variant="determinate"
          value={percentComplete}
        />
      )}
      {/* I think it would be wise to make a test for this slide out part of the header. Can be done with unit testing or with integration testing cypress.io. This would depend on if we want this specific component re-used in many(3+) locations */}
      <animated.div style={slide}>
        <Box
          display={open ? 'flex' : 'none'}
          alignItems="center"
          justifyContent="center"
          css={{
            backgroundColor: fade(theme.palette.primary.main, 0.2),
          }}
        >
          <Typography align="center">
            Note: To view your previously answered questions, simply scroll up.
          </Typography>
        </Box>
      </animated.div>
    </AppBar>
  )
}

export default Header
