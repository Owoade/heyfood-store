import Flex from "@components/shared/Flex";
import Wrapper from "@components/shared/Wrapper";
import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { BiSortDown } from "react-icons/bi";
import SortingPanel from "./SortingPanel";
import StoreContainer from "./StoreContainer";


const BottomSection = () => {
    const sortParams = [
        "Most Popular",
        "Narest",
        "Highgest Rated",
        "Newest",
        "Most Rated"
    ]
  return (
    <Flex mx={"auto"} width="90%" justifyContent={"space-between"} mt={"3em"} >
        <SortingPanel />
        <StoreContainer />
    </Flex>
  );
};

export default BottomSection;
