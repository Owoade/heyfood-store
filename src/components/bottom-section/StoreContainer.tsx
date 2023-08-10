import React from "react";
import { Box, Typography } from "@mui/material";
import Stores from "./Stores";
import AllStores from "./AllStores";
import theme from "../../theme";

const StoreContainer = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        overflowY:"hidden",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      }}
    >
      <Stores category="still-opened" title="Top picks" />
      <Stores category="new-arrival"title="New on HeyFood" />
      <AllStores />
    </Box>
  );
};

export default StoreContainer;
