import React from "react";
import { Box, Typography } from "@mui/material";
import Flex from "@components/shared/Flex";
import { stores } from "utils/mock-data";
import { Store } from "./Store";

type Props = {};

function AllStores({}: Props) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "30px",
        }}
        fontWeight={"bold"}
        variant="h4"
        my={"1em"}
      >
        All Resturants
      </Typography>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2em"
      }}>
        { stores.map( store => <Store store={store} key={store.name} />) }
      </Box>
    </Box>
  );
}

export default AllStores;
