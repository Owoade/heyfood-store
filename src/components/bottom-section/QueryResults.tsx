import React from "react";
import { Box, Typography } from "@mui/material";
import Flex from "@components/shared/Flex";
import Wrapper from "@components/shared/Wrapper";
import { IStore, stores } from "utils/mock-data";
import { Store } from "./Store";
import theme from "../../theme";
import { useSelector } from "react-redux";
import { getQuery } from "../../redux/store";
import axios from "axios";
import { SORT_RESTURANT, SORT_RESTURANT_BY_MENU } from "utils/endpoints";
import { useQuery } from "react-query";

type Props = {};

function QueryResults({}: Props) {

  const { query } = useSelector( getQuery);

  const base_query =  {
    key: query.active_param,
    fn(){
      return axios.post( SORT_RESTURANT, {
        param: query.active_param
      })
    }
  };
  
  const queryHash = {
    "most-popular": base_query,
    tags: {
      key: `get-menu-${query.tags.toString()}`,
      fn(){
        return axios.post(SORT_RESTURANT_BY_MENU, {
          menu: query.tags
        })
      }
    },
    "most-rated": base_query,
    "new-arrival": base_query,
    "highest-rated": base_query,
    "still-opened": base_query,

  } as Record<ExcludeNull<typeof query.active_param>, QueryInterface>;

  const queryValue = queryHash[query.active_param as ExcludeNull<typeof query.active_param>];

  // const { data: response } = useQuery({
  //   queryKey: queryValue.key,
  //   queryFn: queryValue.fn
  // })

  // const result = (response.data.data.result ?? []) as IStore[]


  return (
    <Wrapper>
      <Box my={"2em"}>
        <Flex>
          <Typography
            sx={{
              fontSize: "30px",
            }}
            fontWeight={"bold"}
            variant="h4"
          >
            Stores near you
          </Typography>
          <Typography  sx={{ transform: "translate(2em, .2em)"}} fontWeight={"bold"} color={"red"} variant="h6">
            Reset
          </Typography>
        </Flex>
        <Box
          sx={{
            mt: "2em",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2em",
            [theme.breakpoints.down("lg")]: {
                gridTemplateColumns: "repeat(3, 1fr)",
            },
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            [theme.breakpoints.down("sm")]: {
                gridTemplateColumns: "repeat(1, 1fr)",
            },
          }}
          >
            { stores.map( store => <Store store={store} key={store.name} />)}
          </Box>
      </Box>
    </Wrapper>
  );
}

interface QueryInterface {
  key: string;
  fn(): Promise<any>
}

type ExcludeNull<T> = Exclude<T, null>;

export default QueryResults;