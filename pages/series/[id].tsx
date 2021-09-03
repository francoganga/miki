
import { Link, Grid, Box, Flex, Center, Container, Text } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Header from '../../components/header';
import SERIES from '../../src/images';


const Serie = () => {
  const router = useRouter();
  const { id } = router.query;
  const serie = SERIES.filter(s => s.name === id)[0];
  return (
   <Grid templateRows="auto 1fr auto" h="100%" gap={3} border="1px">
    <Header/>
    <Box border="1px solid black">
    {
      serie && serie.images.map((i,k) => <Image key={k} src={i}/>)
    }
    </Box>

  </Grid>
  )
};

export default Serie;
