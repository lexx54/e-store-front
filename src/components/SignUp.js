import { Link } from "react-router-dom";
import {Flex, Button} from "@chakra-ui/react";
import FormInput from "./FormInput";
import {Controller, useForm } from "react-hook-form";


const SignUp = () => {
  const {control,handleSubmit} = useForm();
  const onSubmit = data => console.log(data)

  return(
    <Flex as="form" direction="column" onSubmit={handleSubmit(onSubmit)}>
      <Controller name="username" defaultValue="" control={control}
        render={({field})=><FormInput data={field} title="User Name" placeholder="e.g Jol33"/>}/>

      <Controller name="firstname" defaultValue="" control={control}
        render={({field})=><FormInput data={field} title="First Name" placeholder="e.g Jose"/>}/>

      <Controller name="lastname" defaultValue="" control={control}
        render={({field})=><FormInput data={field} title="Last Name" placeholder="e.g Lopez"/>}/>

      <Controller name="phonenumber" defaultValue="" control={control}
        render={({field})=><FormInput data={field} title="Phonenumber" placeholder="0414-5769412"/>}/>

      <Button type="submit" my="4" bgColor="blue.300">Sign up</Button>
      <Link to="/register/in">Do you alrady have an account?</Link>
    </Flex>
  )
}

export default SignUp;