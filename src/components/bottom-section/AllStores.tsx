import React from "react";
import { Box, Typography } from "@mui/material";
import Flex from "@components/shared/Flex";
// import { stores } from "utils/mock-data";
import { Store } from "./Store";
import theme from "../../theme";
import { useQuery } from "react-query";
import axios from "axios";
import { GET_ALL_RESTURANTS } from "utils/endpoints";
import { IStore } from "utils/mock-data";
import { SkeletonLoader } from "./QueryResults";

type Props = {};

function AllStores({}: Props) {

  const {  data, isFetched, isLoading } = useQuery({
    queryKey: "All resturants",
    queryFn(){
      return axios.get(GET_ALL_RESTURANTS)
    }
  })

  const resturants = (data?.data.data.result ?? []) as IStore[];

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
      { !isLoading && isFetched &&
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
        { resturants.map( resturant => <Store store={resturant} key={resturant.name} />) }
      </Box>
      }

      { isLoading && <SkeletonLoader responsive />}

    </Box>
  );
}

export default AllStores;
