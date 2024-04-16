import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const theme = useTheme()

  let fallbackBackground = `radial-gradient(at top left, black 30%, transparent 80%), radial-gradient(at bottom, black 0%, transparent 60%), radial-gradient(at bottom left, black 0%, transparent 50%), radial-gradient(at top right, black, transparent), radial-gradient(at bottom right, black 0%, transparent 50%);`

  let gradientOverlay = `linear-gradient(0deg, var(--chakra-colors-${useColorModeValue(
    'white',
    '#FCFFFF'
  )}) 60%, rgba(0, 0, 0, 0) 100%);`;
  

  return (
    <Box
      backgroundImage={fallbackBackground}
      backgroundBlendMode="saturation"
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
      opacity={useColorModeValue('0.3', '0.5')}
      height="100vh"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      <Box
        backgroundImage={!hideOverlay ? gradientOverlay : undefined}
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="1"
      ></Box>
    </Box>
  )
}
