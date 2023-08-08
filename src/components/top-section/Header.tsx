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

type Props = {};

const Header = (props: Props) => {

  const onMobile = useMediaQuery('(max-width:600px)')

  return (
    <Box
      position={"sticky"}
      zIndex={5}
      sx={{ transition: ".5s ease" }}
      top={"0px"}
      bgcolor={"white"}
    >
      <Wrapper>
        <Flex py={"1em"} width={"100%"} justifyContent={"space-between"}>
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
            <Badge badgeContent={onMobile ? 2 : null}  color="success">
              {!onMobile ? (
                <Button
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
                <IconButton  sx={{
                  bgcolor: "black",
                  color: "white"
                }}>
                  <ShoppingCartIcon />
                </IconButton>
              )}
            </Badge>
          </Flex>
        </Flex>
        {onMobile && (
         <Flex my="1em" width={"100%"}>
          <SearchBar />
          <TuneIcon  sx={{ ml: "1em", transform: "translateY(.3em)" }} />
         </Flex>
        )}
      </Wrapper>
    </Box>
  );
};

export default Header;
