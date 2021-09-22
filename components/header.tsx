import { Box, Flex, Heading, Text, Link, useMediaQuery, Center } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Image } from "@chakra-ui/react";
import styles from '../styles/Header.module.css'

export default function Header() {

  const [isSmallerThan610px] = useMediaQuery("(max-width: 610px)");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true)
  }, []);

  return (
    <Box px="5" border="1px">
      {mounted && !isSmallerThan610px ?
       <Flex textStyle="h2" w="100%" h="100px" alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/" className={styles.header}>
            MICA GANGA
          </Link>
        </Box>
        <Box>
          <Flex h="100px" justifyContent="center" alignItems="center">
            <Link mr="2">
              <Text className={styles.linksText}>Animacion</Text>
            </Link>
            <Link href="/bio" mr="2"><Text className={styles.linksText}>Bio</Text></Link>
            <Link mr="2"><Text className={styles.linksText}>Contacto</Text></Link>
          </Flex>
        </Box>
      </Flex>
        :
        <Flex h="100px" justifyContent="center" alignItems="center">
          <Link mr="2">
            <Text className={styles.linksText}>Animacion</Text>
          </Link>
          <Link href="/bio" mr="2" className={styles.linksText}>Bio</Link>
          <Link mr="2"><Text className={styles.linksText}>Contacto</Text></Link>
        </Flex>
      }
    </Box>
  )
}
