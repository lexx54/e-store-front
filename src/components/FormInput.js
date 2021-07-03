import { Input,Box } from "@chakra-ui/react";

const FormInput = ({title, data, placeholder}) => {
  return(
  <Box>
    <label htmlFor={data.name}>{title}</label>
    <Input {...data} id={data.name} borderColor="blue.300" placeholder={placeholder}/>
  </Box>
)}

export default FormInput;