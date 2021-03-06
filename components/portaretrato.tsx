import { Box, Flex, Link } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";

import styles from '../styles/index.module.css';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Portaretrato({url, id, nombre}) {
  return (
    <Flex w="400px" h="500px" align="center" justify="center">
      <Box className={styles.retratoContainer} w="90%" h="90%">
        <a href={"/series/" + id}>
          <Image src={url} alt="me" width="100%" height="100%" />
          <Box className={styles.overlay}>
            <Box className={styles.text}>
            {nombre}
            </Box>
          </Box>
        </a>
      </Box>
    </Flex>
  )
}
