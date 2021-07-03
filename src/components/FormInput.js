import { Input,Box } from "@chakra-ui/react";

const FormInput = ({title,data}) => {
  console.log(data)
  return(
  <Box>
    <label htmlFor="username">{title}</label>
    <Input {...data} id={data.name} borderColor="blue.300"/>
  </Box>
)}

export default FormInput;