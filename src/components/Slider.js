import { Grid, Box, Image} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Slider = () => {
  const [movement,setMovement] = useState(0);
  const imgStyle = {
    width:"100%",
    height:"inherit"
  }
  const boxStyle = {
    transform:`translateX(${movement}%)`,
    height:"350px"
  }

  useEffect(()=>{
    let timer;
    movement === -200
      ? timer = setTimeout(()=>{setMovement(prev=> 0)},5000)
      : timer = setTimeout(()=>{setMovement(prev=>prev-100)},5000); 
    return timer;
  },[movement])

  return (
    <Grid height="350px" templateColumns="repeat(3,100%)"
    border="1px" borderColor="red">
    <Box className="slide" style={boxStyle}>
      <Image src="https://picsum.photos/800/400" alt="Slider image" style={imgStyle}/>
    </Box>
    <Box className="slide" style={boxStyle}>
      <Image src="https://picsum.photos/900/500" alt="Slider image" style={imgStyle}/>
    </Box>
    <Box className="slide" style={boxStyle}>
      <Image src="https://picsum.photos/1000/600" alt="Slider image" style={imgStyle}/>
    </Box>
    </Grid>
  )
}

export default Slider;