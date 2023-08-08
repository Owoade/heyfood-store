import React from "react";
import { Box } from "@mui/material";
import theme from "../../theme";

type Props = {
  children: React.ReactNode;
};

const Wrapper = (props: Props) => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
        [theme.breakpoints.down("lg")]: {
          width: "95%",
        },
      }}
    >
      {props.children}
    </Box>
  );
};

export default Wrapper;
