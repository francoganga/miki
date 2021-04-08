import { Box, Flex } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Portaretrato() {
  const random = Math.floor(getRandomArbitrary(1,4));
  const path = `/assets/images/${random}.jpg`
  console.log(path);
  return (
    <Flex boxSize="sm" align="center" justify="center">
      <Image src={path} alt="me" width="80%" height="80%" />
    </Flex>
  )
}
