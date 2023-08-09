import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/material";
import theme from "../../theme"
import { useDispatch } from 'react-redux';
import { setSearchKey } from 'redux/query.slice';

type Props = {}

const SearchBar = (props: Props) => {
  const dispatch = useDispatch()
  return (
    <Box position={"relative"} width={"100%"}>
      <Box position={"absolute"} top={".6em"} left={".8em"}>
        <SearchIcon sx={{
          [theme.breakpoints.down("sm")]: {
            transform: "translateY(.3em)"
          }
        }} fontSize='small' />
      </Box>
      <input   placeholder='Search for Resturant and Foods' className="search-bar" type="search" onKeyUp={(e: any)=>{
        if(e.key === "Enter"){
          dispatch( setSearchKey(e.target.value ) )
          e.target.value = "";
        }
      }} />
    </Box>
  );
}

export default SearchBar