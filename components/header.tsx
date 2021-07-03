import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <Box px="5" border="1px">
      <Flex textStyle="h2" w="100%" h="100px" alignItems="center" justifyContent="space-between">
      <Text className={styles.header}  ml="1em">MICA GANGA</Text>
      <Box>
        <Link mr="2">Animacion</Link>
        <Link mr="2">Bio</Link>
        <Link mr="2">Contacto</Link>
      </Box>
      </Flex>
    </Box>
  )
}
