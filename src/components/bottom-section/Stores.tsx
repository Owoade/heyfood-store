import React from "react";
import { Typography, Box } from "@mui/material";
import Slider from "@components/shared/Slider";
import Flex from "@components/shared/Flex";
import { IStore, stores } from "utils/mock-data";
import { Store } from "./Store";
import { useQuery } from "react-query";
import { SORT_RESTURANT } from "utils/endpoints";
import axios from "axios";
import{ Carousel} from '@trendyol-js/react-carousel';
import { SkeletonLoader } from "./QueryResults";

type Props = {
  title: string;
  category: string;
};

function Stores({ title, category }: Props) {

  const { data: response, isFetched, isLoading } = useQuery({
    queryKey: category,
    queryFn(){
      return axios.post(SORT_RESTURANT, {
        param: category
      })
    }
  })

  const result = (response?.data.data.result ?? []) as IStore[];

  return (
    <Box>
      <Typography sx={{
        fontSize: "30px"
      }} fontWeight={"bold"} variant="h4" my={"1em"}>
        {title}
      </Typography>
      { isFetched && !isLoading && <Slider>
        <Flex gap={"30px"} width={`${result.length*400}px`}>
          {" "}
          {result.map((store) => (
            <Store width="400px" store={store} key={store.name} />
          ))}{" "}
        </Flex>
      </Slider>}

      { isLoading && <Slider>
        <SkeletonLoader />
        </Slider>}

     
    </Box>
  );
}


export default Stores;
