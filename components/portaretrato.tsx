import { Box, Flex } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";

import styles from '../styles/index.module.css';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Portaretrato() {
  const random = Math.floor(getRandomArbitrary(1,4));
  const path = `/assets/images/${random}.jpg`
  const name = `Hikari ${random}`;
  return (
    <Flex w="400px" h="500px" align="center" justify="center">
      <Box className={styles.retratoContainer} w="90%" h="90%">
        <Image src={path} alt="me" width="100%" height="100%" />
        <Box className={styles.overlay}>
          <Box className={styles.text}>
          {name}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
