import React from "react";
import { Button, Typography, Box } from "@mui/material";
import Image from "@components/shared/Image";
import Wrapper from "@components/shared/Wrapper";
import Flex from "@components/shared/Flex";
import Slider from "@components/shared/Slider";
import { ITag, tags } from "utils/mock-data";

type Props = {};

const Tags = (props: Props) => {

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
  return (
    <Button
      sx={{
        bgcolor: "transparent",
        color: "black",
        flexDirection: "column",
        padding: ".8em 1em",
        width: "fit-content",
      }}
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
