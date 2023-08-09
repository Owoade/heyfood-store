import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import TopSection from "../src/components/top-section/TopSection";
import BottomSection from "@components/bottom-section/BottomSection";
import Footer from "@components/Footer";
import QueryResults from "@components/bottom-section/QueryResults";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./../src/redux/store"

const queryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <Box bgcolor={"white"} height={"100vh"}>
        <TopSection />
        <BottomSection />
        <Footer />
      </Box>
      </Provider>
      
    </QueryClientProvider>
  );
};

export default Home;
