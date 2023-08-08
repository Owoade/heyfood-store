import React from "react";
import { Box, Button } from "@mui/material";
import Flex from "@components/shared/Flex";
import { ImSpoonKnife } from "react-icons/im";
import { FaShoppingBasket } from "react-icons/fa";
import Wrapper from "@components/shared/Wrapper";
import theme from "../../theme";

type Props = {};

const Tabs = (props: Props) => {
  return (
    <Box 
    sx={{
      borderTop: "1px solid #eeeeee",
      borderBottom: "1px solid #eeeeee",
      py: "1em",
      [theme.breakpoints.down("sm")]: {
        borderBottomColor: "transparent"
      }
    }}
    >
      <Wrapper>
        <Flex width={"320px"} justifyContent={"space-between"}>
          <Button
            sx={{
              color: "white",
              bgcolor: "black",
              textTransform: "none",
              borderRadius: "25px",
              padding: "1em 2em",
              ":hover": {
                backgroundColor: "black"
              }
            }}

            size="large"
            startIcon={<ImSpoonKnife />}
          >
            Resturant
          </Button>
          <Button
            sx={{
             color: "black",
              textTransform: "none",
              borderRadius: "25px",
              padding: "1em 2em",
            }}
            size="large"
            startIcon={<FaShoppingBasket />}
          >
            Resturant
          </Button>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Tabs;
