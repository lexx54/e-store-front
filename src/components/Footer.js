import { Box, Flex, Text, Grid, Link,Icon } from "@chakra-ui/react";
import {FaInstagram, FaWhatsapp, FaTwitter} from "react-icons/fa";

const Footer = () => (
    <Grid as="footer" height="25vh" templateColumns={["25% 1fr 25%",undefined,"30% 1fr 15%"]} py="1"
    bgColor="blue.600">
      <Flex direction="column" justify="space-around" align="center">
        <Text>Alto Barinas</Text>
        <Text>Cuatricentenaria</Text>
        <Text>Araure</Text>
      </Flex>

      <Flex direction="column" align="center" justify="space-evenly">
        <Box>Brand Name</Box>
        <Text fontSize="xs">Page built by <Link href="http://codelexx.mywebcommunity.org" 
          color="red" isExternal>Codelexx</Link>
        </Text>
      </Flex>

      <Flex direction={["column",undefined,"row"]} justify="space-around" align="center" >
        <Link><Icon as={FaInstagram} boxSize="2rem"/></Link>
        <Link><Icon as={FaWhatsapp} boxSize="2rem"/></Link>
        <Link><Icon as={FaTwitter} boxSize="2rem"/></Link>
      </Flex>

    </Grid>
  )


export default Footer;