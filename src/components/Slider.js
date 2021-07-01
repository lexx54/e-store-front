import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Slider = () => {
  const [movement,setMovement] = useState(0);

  useEffect(()=>{
    let timer;
    movement === -200
      ? timer = setTimeout(()=>{setMovement(prev=> 0)},3000)
      : timer = setTimeout(()=>{setMovement(prev=>prev-100)},3000); 
    return timer;
  },[movement])

  return (
    <Grid height="350px" templateColumns="repeat(3,100%)"
    border="1px" borderColor="red">
    <h1 className="slide" style={{transform:`translateX(${movement}%)`}}>Slider 1</h1>
    <h1 className="slide" style={{transform:`translateX(${movement}%)`}}>Slider 2</h1>
    <h1 className="slide" style={{transform:`translateX(${movement}%)`}}>Slider 3</h1>
    </Grid>
  )
}

export default Slider;