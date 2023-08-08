import { Box, Typography, } from '@mui/material'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <Box mt={"5em"} py={"4em"} bgcolor={"black"} color={"white"}>
       <Typography textAlign={"center"}>
        Created with 💚 by <a target='blank' href="https://my-portfolio-beige-phi.vercel.app/" style={{ fontWeight: "bolder"}}>Owoade</a>
       </Typography>
    </Box>
  )
}

export default Footer