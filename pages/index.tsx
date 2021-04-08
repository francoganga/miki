import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Link, Grid, Box, Flex, Center } from '@chakra-ui/react';
import Header from '../components/header';
import Image from 'next/image';
import Portaretrato from '../components/portaretrato';


const items = Array.from(new Array(20), () => "asd");



export default function Home() {
  return (
    <Box h="100vh">
      <Grid templateRows="auto 1fr auto" h="100%" gap={3}>
        <Header/>
        <Box w="100%">
          <Center>
              <Flex w={[300, 400, 560, "100%"]} flexWrap="wrap" border="1px" borderColor="red.200" justify="center">
                {items.map((i, idx) => <Portaretrato key={idx}/>) }
              </Flex>
          </Center>
        </Box>
        <Box w="100%" bg="blue.500">
          <p>asd</p>
        </Box>
      </Grid>
    </Box>
  )
}
