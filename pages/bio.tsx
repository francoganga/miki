import { Grid, Box, Container, Flex, Center, useMediaQuery, Text } from '@chakra-ui/react';
import Header from '../components/header';


export default function Bio() {
  return (
    <Box h="100vh">
      <Grid templateRows="auto 1fr auto" h="100%">
        <Header/>
        <Container maxW="90%" h="100%">
          <Flex h="100%">
            <Center flex="1" w="300px" h="300px" padding="8px">
              <Box h="100%" w="100%" backgroundColor="red">
                ASD
              </Box>
            </Center>
            <Box flex="1">
              <Text>Sit velit eius eos commodi ipsam vel.
                Similique dolore enim aperiam ullam ex! Expedita modi soluta blanditiis cum quis cum accusamus Odio
              inventore unde qui debitis officia rerum Dolor delectus.
             </Text>
            </Box>
          </Flex>
        </Container>
        <Box w="100%" bg="blue.500">
          <p>asd</p>
        </Box>
      </Grid>
    </Box>
  )
}
