import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from '@mui/material'
import TopSection from '../src/components/top-section/TopSection'
import BottomSection from '@components/bottom-section/BottomSection'
import Footer from '@components/Footer'

const Home: NextPage = () => {
  return (
  <Box  height={"100vh"}>
    <TopSection />
    <BottomSection />
    <Footer/>
  </Box>
  )
}

export default Home
