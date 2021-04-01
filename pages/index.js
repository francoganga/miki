import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Link, Grid, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box h="100vh">
      <Grid templateRows="auto 1fr auto" h="100%" gap={3}>
        <Box w="100%" bg="blue.500">
          <p>Header</p>
        </Box>
        <Box w="100%">
          <Grid
            templateColumns="minmax(150px, 20%) 1fr"
            h="100%"
            w="100%"
            gap={3}
          >
            <Box w="100%" bg="green.500">
              <Link></Link>
            </Box>
            <Box w="100%" h="100%">
            </Box>
          </Grid>
        </Box>
        <Box w="100%" bg="blue.500">
          <p>asd</p>
        </Box>
      </Grid>
    </Box>
  )
}
