import { Box, Typography } from "@mui/material";
import Image from "@components/shared/Image";
import Slider from "@components/shared/Slider";
import Flex from "@components/shared/Flex";
import { AiFillStar } from "react-icons/ai";
import theme from "../../theme";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { IStore } from "utils/mock-data";

type StoreProps = {
    store: IStore;
  };
  
  export function Store({ store }: StoreProps) {
    const date = new Date();
  
    const current_hour = date.getHours();
  
    const HAS_CLOSED = store.closing_time !== current_hour;
  
    const RECENTLY_AFTER_CLOSING_HOUR = HAS_CLOSED && store.opening_time < current_hour;
  
    const CLOSED_SIGN_TEXT = HAS_CLOSED
      ? RECENTLY_AFTER_CLOSING_HOUR
        ? "Closed"
        : `Opens at ${store.opening_time} AM`
      : "";
  
    return (
      <Box width={"320px"} >
        {/* Image and Tags Box */}
        <Box position={"relative"}>
          <Image
            borderRadius={"10px"}
            width={"100%"}
            src={store.image}
            alt="hello"
          />
          <Box
            sx={{ bgcolor: CLOSED_SIGN_TEXT === "Closed" ? "red" : "#ffa900" }}
            borderRadius={"6px"}
            p={".4em"}
            width={"fit-content"}
            color={"white"}
            position={"absolute"}
            bottom={"10px"}
            left={"10px"}
            fontSize={"14px"}
          >
            {CLOSED_SIGN_TEXT}
          </Box>
        </Box>
        <Typography mt={".5em"} mb={".1em"} variant="h6" fontWeight={"bold"}>
          {store.name}
        </Typography>
        <Typography fontSize={"13px"} mb={".5em"} color={"grey"}>
          {store.menu.join(", ")}
        </Typography>
        <Flex width={"150px"} justifyContent={"space-between"}>
          <Flex>
            <Box sx={{ transform: "translateY(.1em)" }}>
              <AiFillStar color={theme.palette.primary.main} />
            </Box>
            <Typography ml={".2em"}>{store.rating}</Typography>
          </Flex>
          <Typography ml={".2em"}>{store.no_of_ratings}+ Ratings</Typography>
        </Flex>
        {store.manages_delivery && <Feature type="delivery" />}
        {store.order_time && (
          <Feature type="order_time" payload={store.order_time} />
        )}
      </Box>
    );
  }
  
  interface IFeature {
    type: "delivery" | "order_time";
    payload?: number;
  }
  
  function Feature(props: IFeature) {
    const feature_text =
      props.type === "delivery"
        ? "This store handle it's own deliveries."
        : `Order at least ${props?.payload} hour${
            props.payload! > 1 ? "s" : ""
          } before delivery`;
    return (
      <Flex
        bgcolor={"whitesmoke"}
        width={"100%"}
        p={".5em"}
        borderRadius={"8px"}
        my={"1em"}
      >
        {props.type === "delivery" ? (
          <LocalShippingIcon color="warning" />
        ) : (
          <WatchLaterIcon sx={{ color: "#0872e5" }} />
        )}
        <Typography
          sx={{
            transform: "translate(1em, .2em)",
          }}
          fontSize={"12px"}
        >
          {feature_text}
        </Typography>
      </Flex>
    );
  }