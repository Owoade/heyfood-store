import React from 'react';
import { Box, Typography, RadioGroup, Radio, FormControlLabel } from "@mui/material"
import Flex from '@components/shared/Flex';
import SortIcon from '@mui/icons-material/Sort';

type Props = {}

const SortingPanel = (props: Props) => {
    const sortParams = [
        "Most Popular",
        "Narest",
        "Highgest Rated",
        "Newest",
        "Most Rated"
    ]
  return (
    <Box height={"fit-content"} width={"200px"} position={"sticky"} top={"12%"}>
          <Typography variant="h5" fontWeight={"bolder"}>All Stores</Typography>
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
            <Typography fontWeight={"bolder"}    ml={".4em"} display={"block"} my={".5em"} variant="h5">
              Sort
            </Typography>
          </Flex>
          <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
                {
                    sortParams.map( params =>  (
                        <FormControlLabel
                        key={params}
                        value={params}
                        control={<Radio  />}
                        label={params}
                      />
                    ) )
                }
            </RadioGroup>
        </Box>
  )
}

export default SortingPanel