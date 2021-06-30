import {Flex, Text} from "@chakra-ui/react";

const CategoryItem = ({name,Icon}) =>(
  <Flex direction="column" alignItems="center" justify="center"
  border="1px" borderColor="black" borderRadius="10px" py="1rem" as="button">
    {Icon}
    <Text fontSize="4xl">{name}</Text>
  </Flex>
)

export default CategoryItem;