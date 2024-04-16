import { chakra, HTMLChakraProps, useColorModeValue, Box } from '@chakra-ui/react';
import Image from 'next/image'; // Import Image component from Next.js

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff');
  
  return (
    <Box display="flex" alignItems="center" {...props}>
      <Image src="/static/favicons/Frame 3.png" alt="MitiGrater Logo" width={45} height={35} />
      <chakra.span ml="2" fontSize="lg" fontWeight="bold" color={color}>
        Mitigrater
      </chakra.span>
    </Box>
  )
}
