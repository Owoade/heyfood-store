import React from "react";
import Wrapper from "./Wrapper";
import Box, { BoxProps } from "@mui/material/Box";

type Props = {
  children: React.ReactNode;
};

type SliderProps = Omit<BoxProps, "sx"> & Props;

function Slider({ children, ...rest }: SliderProps) {
  return (
    <Box
      {...rest}
      sx={{
        overflowX: "auto",
        overflowY: "hidden"
      }}
    >
      {children}
    </Box>
  );
}

export default Slider;
