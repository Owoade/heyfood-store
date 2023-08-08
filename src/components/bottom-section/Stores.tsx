import React from "react";
import { Typography, Box } from "@mui/material";
import Slider from "@components/shared/Slider";
import Flex from "@components/shared/Flex";
import { IStore, stores } from "utils/mock-data";
import { Store } from "./Store";

type Props = {
  title: string;
  category: string;
};

function Stores({ title, category }: Props) {

  return (
    <Box>
      <Typography sx={{
        fontSize: "30px"
      }} fontWeight={"bold"} variant="h4" my={"1em"}>
        {title}
      </Typography>
      <Slider>
        <Flex width={`${(stores.length * 370)}px`} gap={"30px"}>
          {" "}
          {stores.map((store) => (
            <Store store={store} key={store.name} />
          ))}{" "}
        </Flex>
      </Slider>
    </Box>
  );
}


export default Stores;
