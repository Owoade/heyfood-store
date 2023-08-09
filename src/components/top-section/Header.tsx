import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  Drawer
} from "@mui/material";
import React from "react";
import Flex from "@components/shared/Flex";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "@components/shared/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchBar from "@components/top-section/SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Wrapper from "@components/shared/Wrapper";
import theme from "../../theme";
import TuneIcon from '@mui/icons-material/Tune';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import {  FormControlLabel, Radio } from '@mui/material';
import { _sortParams, sortParams } from "@components/bottom-section/SortingPanel";
import { ActiveParam, setActiveParams } from "redux/query.slice";
import { useDispatch } from "react-redux";
import useDisclosure from "hooks/disclosure";
import Once from "checkout-once";

type Props = {};

const Header = (props: Props) => {

  const onMobile = useMediaQuery('(max-width:600px)');

  const modalDisclosure = useDisclosure();

  const drawerDisclosure = useDisclosure();

  const dispatch = useDispatch();

  return (
    <Box
      position={"sticky"}
      zIndex={5}
      sx={{ transition: ".5s ease" }}
      top={"0px"}
      bgcolor={"white"}
      pb={"1em"}
      borderBottom="1px solid #eeeeee"
    >
      <CheckoutDrawer disclosure={drawerDisclosure} />
      <Modal
        sx={{
          transform: "translateY(9.6em)",
        }}
        open={modalDisclosure.state}
        onClose={modalDisclosure.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"white"} width={"100%"} p={"1em 2em"}>
          <Flex width={"100%"} justifyContent={"space-between"}>
            <Typography variant="h5">Sort</Typography>
            <CloseIcon onClick={modalDisclosure.onClose} />
          </Flex>
          <Box mt={"1em"}>
            {sortParams.map((params, i) => (
              <Box key={params} display={"block"}>
                <FormControlLabel
                  key={params}
                  value={params}
                  control={<Radio />}
                  label={params}
                  onClick={() =>{
                    i !== 1
                      ? dispatch(setActiveParams(_sortParams[i] as ActiveParam))
                      : null;

                    modalDisclosure.onClose()
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
      <Wrapper>
        <Flex pt={"1em"} width={"100%"} justifyContent={"space-between"}>
          {/* Logo, Menu and Location Group */}
          <Flex
            sx={{
              width: "200px",
              justifyContent: "space-between",
              [theme.breakpoints.down("sm")]: {
                width: "fit-content",
              },
            }}
          >
            <Box
              sx={{
                transform: "translateY(.4em)",
              }}
            >
              <MenuIcon />
            </Box>
            <Image
              sx={{
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              }}
              size="40px"
              src="/assets/logo.png"
              alt="image"
            />
            <Flex
              sx={{
                width: "75px",
                justifyContent: "space-between",
                transform: "translateY(.3em)",
                [theme.breakpoints.down("sm")]: {
                  transform: "translate(2em, .5em)",
                },
              }}
            >
              <LocationOnIcon />
              <Typography variant="body1">Ibadan</Typography>
            </Flex>
          </Flex>
          {/* Search Box */}
          <Box
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <SearchBar />
          </Box>
          {/* CTAs on the far right */}
          <Flex
            sx={{
              width: "220px",
              justifyContent: "space-between",
              [theme.breakpoints.down("sm")]: {
                justifyContent: "flex-end",
              },
            }}
          >
            <Button
              sx={{
                color: "black",
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              }}
            >
              SIGN IN
            </Button>
            <Badge badgeContent={onMobile ? 2 : null} color="success">
              {!onMobile ? (
                <Button
                onClick={drawerDisclosure.onOpen}
                  startIcon={
                    <ShoppingCartIcon
                      sx={{
                        [theme.breakpoints.down("sm")]: {
                          transform: "translateX(.4em)",
                        },
                      }}
                    />
                  }
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    px: "2em",
                    borderRadius: "20px",
                    ":hover": {
                      bgcolor: theme.palette.primary.main,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      [theme.breakpoints.down("sm")]: {
                        display: "none",
                      },
                    }}
                  >
                    CART . 2
                  </Typography>
                </Button>
              ) : (
                <IconButton
                onClick={drawerDisclosure.onOpen}
                  sx={{
                    bgcolor: "black",
                    color: "white",
                  }}
                >
                  <ShoppingCartIcon />
                </IconButton>
              )}
            </Badge>
          </Flex>
        </Flex>
        {onMobile && (
          <Flex my="1em" width={"100%"}>
            <SearchBar />
            <TuneIcon
              onClick={modalDisclosure.onOpen}
              sx={{ ml: "1em", transform: "translateY(.3em)" }}
            />
          </Flex>
        )}
      </Wrapper>
    </Box>
  );
};

type DrawerProps = {
  disclosure: ReturnType<typeof useDisclosure >
}

function CheckoutDrawer( {disclosure}:DrawerProps){
  const once = new Once({
    amount: 280000, // kobo Equivalence
    successCallback(){
      window.alert("Thank you for using HeyFood, We have recieved you order.");
      disclosure.onClose();
    }
  })
  return (
    <Drawer open={disclosure.state} onClose={disclosure.onClose} anchor="right">
        <Box width={"300"} bgcolor={"white"} p="1em">
           <Typography variant="h5" mb={"1em"}>
            Your Order
           </Typography>
            <Flex  width={"200px"} justifyContent={"space-between"}>
              <Typography>
                Amala
              </Typography>
              <Typography fontWeight={"bold"}>
              ₦200
              </Typography>
            </Flex>
            <Flex my={".5em"}  width={"200px"} justifyContent={"space-between"}>
              <Typography>
                Meat (Assorted)
              </Typography>
              <Typography fontWeight={"bold"}>
              ₦1,200
              </Typography>
            </Flex>
            <Flex my={".5em"} width={"200px"} justifyContent={"space-between"}>
              <Typography>
                Ponmo 
              </Typography>
              <Typography fontWeight={"bold"}>
              ₦600
              </Typography>
            </Flex>
            <Flex my={".5em"} width={"200px"} justifyContent={"space-between"}>
              <Typography>
                Sosa Drink
              </Typography>
              <Typography fontWeight={"bold"}>
              ₦800
              </Typography>
            </Flex>
            <Button  sx={{
              my: "1em",
              width: "100%",
              bgcolor: "black",
              color: "white"
            }}
            onClick={()=> {
              once.checkout() 
            }}
            >
              Pay  ₦2800
            </Button>
        </Box>
    </Drawer>
  )
}

export default Header;
