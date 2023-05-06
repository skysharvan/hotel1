import { Box, Typography, styled } from '@mui/material'
import React from 'react'


const Box1 = styled(Box)({
   width:'100%',
   position:'relative',
   
})
const Box2 = styled(Box)({
   position:'absolute',
   top:'0',
   right:'0',
   left:'0',
   bottom:'0',
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   width:'100%',
   height:'100%',

})
const Image = styled('img')(({theme})=>({
  width:'100%',
  height:'520px',
  [theme.breakpoints.down('md')]:{
    height:'420px',
  }
}))


const Block1 = () => {
  return (
    <>
        <Box1>
          <Image src="https://img.freepik.com/premium-vector/hands-with-smart-phone-taxi-application-taxi-service-yellow-taxi-cab-city-silhouette-with-skyscrapers-tower-background-vector-illustration_610956-855.jpg?size=626&ext=jpg" alt="Taxi" />
      
        </Box1>
        <Box2>
          <Typography sx={{color:'#fff',fontSize:{md:'90px',sm:'60px',xs:'50px'}}}>TAXI BLOG</Typography>
        </Box2>
    </>
  )
}

export default Block1;
