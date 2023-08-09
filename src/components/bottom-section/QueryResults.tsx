import React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import Flex from "@components/shared/Flex";
import Wrapper from "@components/shared/Wrapper";
import { IStore, stores } from "utils/mock-data";
import { Store } from "./Store";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { getQuery } from "../../redux/store";
import axios from "axios";
import { SEARCH_RESTURANT, SORT_RESTURANT, SORT_RESTURANT_BY_MENU } from "utils/endpoints";
import { useQuery } from "react-query";
import { reset } from "redux/query-slice";

type Props = {};

function QueryResults({}: Props) {

  const { query } = useSelector( getQuery);

  const dispatch = useDispatch();

  const base_query =  {
    key: `sort-${query.active_param}`,
    fn(){
      return axios.post( SORT_RESTURANT, {
        param: query.active_param
      })
    }
  };
  
  const queryHash = {
    "most-popular": base_query,
    "by-tags": {
      key: `get-menu-${query.tags.toString()}`,
      fn(){
        return axios.post(SORT_RESTURANT_BY_MENU, {
          menu: query.tags.map( _ => _.toLocaleLowerCase() )
        })
      }
    },
    "most-rated": base_query,
    "new-arrival": base_query,
    "highest-rated": base_query,
    "still-opened": base_query,
    search: {
      key: `search-${query.search_key}`,
      fn(){
        return axios.get(`${SEARCH_RESTURANT}?query=${query.search_key}`)
      }
    }

  } as Record<ExcludeNull<typeof query.active_param>, QueryInterface>;

  const queryValue = queryHash[query.active_param as ExcludeNull<typeof query.active_param>];

  const { data: response, isLoading, isFetched } = useQuery({
    queryKey: queryValue?.key,
    queryFn: queryValue?.fn
  })

  const result = (response?.data.data.result ?? []) as IStore[]


  return (
    // <Wrapper>
    <Box my={"2em"} width={"100%"}>
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
        <Box onClick={ ()=> dispatch( reset("")) }>
          <Typography
            sx={{ transform: "translate(2em, .2em)", cursor: "pointer" }}
            fontWeight={"bold"}
            color={"red"}
            variant="h6"
          >
            Reset
          </Typography>
        </Box>
      </Flex>
      {!isLoading && isFetched && result.length > 0 &&  <Box
        sx={{
          mt: "2em",
          display: "grid",
          gridTemplateColumns: query.active_param !== "by-tags" ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
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
        {result.map((store) => (
          <Store store={store} key={store.name} />
        ))}
      </Box>}
      { isFetched && !isLoading && result.length === 0 && <Typography mt={"2em"} color={"red"}>
        Oops! No Food or Restaurant Found
        </Typography>}

        { isLoading && <SkeletonLoader />}
    </Box>
    // </Wrapper>
  );
}

function SkeletonLoader(){
  return (
     <Box sx={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "2em",
      mt: "2em",
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
      },
     }}>
        {[1,2,3].map( _ => <Card key={Date.now()} />)}
     </Box>
   
  )

  function Card(){
    return (
      <Box>
          <Skeleton sx={{ borderRadius: "8px"}} width={"100%"} height="200px" variant="rectangular" />
          <Skeleton sx={{ my: "1em", borderRadius: "8px" }} width={"40%"} />
          <Skeleton  sx={{ borderRadius: "8px"}}   width={"60%"} />
      </Box>)
  }
}

interface QueryInterface {
  key: string;
  fn(): Promise<any>
}

type ExcludeNull<T> = Exclude<T, null>;

export default QueryResults;
