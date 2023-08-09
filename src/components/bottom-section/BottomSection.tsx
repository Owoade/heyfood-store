import Flex from "@components/shared/Flex";
import Wrapper from "@components/shared/Wrapper";
import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { BiSortDown } from "react-icons/bi";
import SortingPanel from "./SortingPanel";
import StoreContainer from "./StoreContainer";
import theme from "../../theme";
import { useSelector } from "react-redux";
import { getQuery } from "../../redux/store"
import QueryResults from "./QueryResults";

const BottomSection = () => {

    const { query } = useSelector( getQuery);

    const sortParams = [
        "Most Popular",
        "Narest",
        "Highgest Rated",
        "Newest",
        "Most Rated"
    ]

  return (
    <Flex 
      sx={{
        mx: "auto",
        width: "90%",
        justifyContent: "space-between",
        mt: "3em",
        [theme.breakpoints.down("lg")]: {
          width: "95%",
        },
      }}
    >
        {( !query.active_param || ( query.active_param && query.active_param !== "by-tags")) && <SortingPanel />}
       { query.active_param ? <QueryResults /> : <StoreContainer />}
    </Flex>
  );
};

export default BottomSection;
