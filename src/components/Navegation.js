import { Flex, Spacer , Input, InputRightAddon, InputGroup, Icon } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";
import {FiShoppingCart} from "react-icons/fi"

const Navegation = () => {

  return (
    <Flex as="nav" direction="column" h="90px" bg="blue.600" color="white">
      <Flex flex="1" px={["1rem",undefined,"2rem"]}>
        <Flex align="center" px="0.5rem">Logo</Flex>
        <Spacer/>
        <Flex align="center" px="0.5rem">Contact</Flex>
        <Flex align="center" px="0.5rem">Register</Flex>
        <Flex align="center" px="0.5rem">Location</Flex>
      </Flex>
      <Flex flex="1">
        <Flex align="center" px={["1rem",undefined,"2rem"]}>
          Location 1
        </Flex>
        <Flex align="center" flex="1">
        <InputGroup size="sm">
          <Input placeholder="Search" />
          <InputRightAddon children={<button><SearchIcon/></button>} bg="blue.300"/>
        </InputGroup>
        </Flex>
        <Flex align="center" px={["1rem",undefined,"2rem"]}>
          <button >
            <Icon as={FiShoppingCart } boxSize="1.5rem"/>
          </button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navegation;