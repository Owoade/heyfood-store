import React, { useRef } from "react";
import { Button, Typography, Box } from "@mui/material";
import Image from "@components/shared/Image";
import Wrapper from "@components/shared/Wrapper";
import Flex from "@components/shared/Flex";
import Slider from "@components/shared/Slider";
import { ITag } from "utils/mock-data";
import { useQuery } from "react-query"
import axios from "axios";
import { GET_ALL_TAGS } from "utils/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { getQuery } from "../../redux/store"
import { addTag, removeTag } from "redux/query.slice";

type Props = {};

const Tags = (props: Props) => {

  const { data: response } = useQuery( { 
    queryKey: "get-tags",
    queryFn(){
      return axios.get(GET_ALL_TAGS)
    }
})

  const tags = (response?.data?.data.tags ?? []) as ITag[];

  return (
    <Wrapper>
      <Slider mt={"1em"}>
      <Flex width={"1700px"} justifyContent={"space-between"}>
        {tags.map((tag) => (
          <Tag tag={tag} key={tag.name} />
        ))}
      </Flex>
    </Slider>
    </Wrapper>
  );
};

function Tag({ tag }: { tag: ITag }) {

  const { query } = useSelector(getQuery);

  const dispatch = useDispatch();

  const isClicked = useRef(0);

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){

    event.preventDefault();

    const HAS_BEEN_CLICKED = isClicked.current !== 0;

    if( HAS_BEEN_CLICKED ){
       dispatch(removeTag(tag.name) )
       isClicked.current = 0;
    }else {
      dispatch(addTag(tag.name));
      isClicked.current = 1;
    }
  }

  return (
    <Button
      sx={{
        bgcolor: query.tags.includes(tag.name) ? "#d6ece0" : "transparent",
        color: "black",
        flexDirection: "column",
        padding: ".8em 1em",
        width: "fit-content",
      }}
      onClick={handleClick}
    >
      <Image size="50px" alt="tag-image" src={tag.image} />
      <Typography
        mt={".4em"}
        textTransform={"none"}
        display={"block"}
        variant="body1"
      >
        {tag.name}
      </Typography>
    </Button>
  );
}



export default Tags;
