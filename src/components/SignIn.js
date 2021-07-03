import { Link } from "react-router-dom";
import {Flex, Button} from "@chakra-ui/react";
import FormInput from "./FormInput";
import {Controller, useForm } from "react-hook-form";


const SignIn = () => {
  const {control, handleSubmit}=useForm();
  const onSubmit = (data) => console.log(data);
  return(
  <Flex w={["300px",undefined,"450px"]} as="form" onSubmit={handleSubmit(onSubmit)} py="4" px="6"
   border="4px" borderRightColor="red" borderBottomColor="red" borderRadius="10px"
   borderTopColor="green" borderLeftColor="green" direction="column">

    <Controller control={control} name="username" defaultValue=""
      render={({field})=><FormInput data={field} title="User Name"/>}/>

    <Controller control={control} name="password" defaultValue=""
      render={({field})=><FormInput data={field} title="Password"/>}/>

    <Button type="submit" bg="blue.300" my="3">
      SignIn
    </Button>
    <Link to="/register/up">Don't You Have an account Yet?</Link>
  </Flex>
)}

export default SignIn;