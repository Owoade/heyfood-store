import React from "react";
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import Flex from "@components/shared/Flex";
import SortIcon from "@mui/icons-material/Sort";
import theme from "../../theme";
import { useDispatch } from "react-redux";
import { ActiveParam, setActiveParams } from "redux/query.slice";

type Props = {};

const SortingPanel = (props: Props) => {
  const dispatch = useDispatch();

  const sortParams = [
    "Most Popular",
    "Narest",
    "Highest Rated",
    "Newest",
    "Most Rated",
  ];

  const _sortParams = sortParams
    .map((_) => (_ === "Newest" ? "New Arrival" : _))
    .map((_) => _.toLocaleLowerCase().split(" ").join("-"));

    console.log(_sortParams)
  return (
    <Box
      sx={{
        height: "fit-content",
        width: "25%",
        position: "sticky",
        top: "12%",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      }}
    >
      <Typography variant="h5" fontWeight={"bolder"}>
        All Stores
      </Typography>
      <Typography my={"1em"} variant="body1">
        (186 Stores)
      </Typography>
      <Flex fontWeight={"bolder"}>
        <SortIcon
          sx={{
            display: "block",
            transform: "translateY(1em)",
          }}
          fontSize="small"
        />
        <Typography
          fontWeight={"bolder"}
          ml={".4em"}
          display={"block"}
          my={".5em"}
          variant="h5"
        >
          Sort
        </Typography>
      </Flex>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {sortParams.map((params, i) => (
          <FormControlLabel
            key={params}
            value={params}
            control={<Radio />}
            label={params}
            onClick={() =>
              i !== 1
                ? dispatch(setActiveParams(_sortParams[i] as ActiveParam))
                : null
            }
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default SortingPanel;
