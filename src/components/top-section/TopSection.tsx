import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import Tabs from './Tabs'
import Tags from './Tags'
import Cards from './Cards'
import { useSelector } from 'react-redux'
import { getQuery } from 'redux/store'

type Props = {}

function TopSection({}: Props) {
  const { query } = useSelector( getQuery )
  return (
    <Box position={"relative"}>
      <Header />
      <Tabs />
      <Tags />
     { !query.active_param && <Cards />}
    </Box>
  )
}

export default TopSection