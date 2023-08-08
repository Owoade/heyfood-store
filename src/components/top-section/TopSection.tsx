import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import Tabs from './Tabs'
import Tags from './Tags'
import Cards from './Cards'

type Props = {}

function TopSection({}: Props) {
  return (
    <Box position={"relative"}>
      <Header />
      <Tabs />
      <Tags />
      <Cards />
    </Box>
  )
}

export default TopSection