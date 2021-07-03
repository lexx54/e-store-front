import { useRouteMatch,Switch, Route, useParams } from "react-router";
import {Flex} from "@chakra-ui/react";
import SignIn from "../components/Register/SignIn";
import SignUp from "../components/Register/SignUp";

const Register = () => {
  const { path} = useRouteMatch();
  const {state} = useParams();
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Switch>
        {
          state === "in"
            ? <Route to={`${path}/in`} component={SignIn}/>
            : <Route to={`${path}/up`} component={SignUp}/>
        }
      </Switch>
    </Flex>
  )
}

export default Register;