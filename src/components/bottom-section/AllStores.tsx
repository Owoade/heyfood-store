import React from "react";
import { Box, Typography } from "@mui/material";
import Flex from "@components/shared/Flex";
import { stores } from "utils/mock-data";
import { Store } from "./Store";
import theme from "../../theme";

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
        gap: "2em",
        [theme.breakpoints.down("md")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "repeat(1, 1fr)",
        }
      }}>
        { stores.map( store => <Store store={store} key={store.name} />) }
      </Box>
    </Box>
  );
}

export default AllStores;
