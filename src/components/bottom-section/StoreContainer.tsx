import React from 'react'
import { Box, Typography } from "@mui/material"
import Stores from './Stores'
import AllStores from './AllStores'

const StoreContainer = () => {
  return (
   <Box sx={{ overflowX: "hidden" }} width={"80%"}>
    <Stores category='all' title='Currently Opened'  />
    <Stores category='all' title='New on Heyfood'  />
    <AllStores   />
   </Box>
  )
}

export default StoreContainer