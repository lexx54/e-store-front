import { Center, Grid, Heading} from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";
import { InfoIcon,CheckIcon,ChatIcon,DeleteIcon,EmailIcon } from "@chakra-ui/icons";

const categories=[
  {name:"Electronics",Icon:<InfoIcon boxSize="2rem"/>,id:1},
  {name:"Food",Icon:<CheckIcon boxSize="2rem"/>,id:2},
  {name:"Home",Icon:<ChatIcon boxSize="2rem"/>,id:3},
  {name:"Plummery",Icon:<DeleteIcon boxSize="2rem"/>,id:4},
  {name:"Construction",Icon:<EmailIcon boxSize="2rem"/>,id:5},
  {name:"All",Icon:<DeleteIcon boxSize="2rem"/>,id:6}
]

const CategoriesContainer = () => (
  <>
    <Center py="2">
      <Heading>Categories</Heading>
    </Center>
    <Grid templateColumns="repeat(auto-fill, minmax(250px,1fr));" gap={2} pb="4">
      {
        categories.map( category => <CategoryItem {...category} key={category.id}/>)
      }
    </Grid>
  </>
)

export default CategoriesContainer;