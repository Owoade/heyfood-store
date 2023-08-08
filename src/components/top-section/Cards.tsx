import Flex from "@components/shared/Flex";
import Image from "@components/shared/Image";
import Slider from "@components/shared/Slider";
import Wrapper from "@components/shared/Wrapper";
import React from "react";

function Cards() {
  const cards = [
    "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFree%20delivery%20(5).jpg_1663243064545?alt=media&token=5a933359-223a-49dc-a4f2-f9acc1cca063",
    "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FAbeokuta%20(2).jpg_1689765891174?alt=media&token=324b84b3-1aa1-407c-82d3-4309bbc97d2d",
    "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FBodija%20Banner%20(1).jpg_1689257926347?alt=media&token=4268e1d9-8c08-4c40-af11-0919ccbc8795",
    "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFeedwell%20Banner.jpg_1687420299354?alt=media&token=4d5bd675-f112-4a77-a29d-d5fe35a197fa",
  ];
  return (
    <Wrapper>
      <Slider mt={"2em"}>
        <Flex width={"1900px"} justifyContent={"space-between"}>
          {cards.map((src) => (
            <Image
              borderRadius={"10px"}
              width={"450px"}
              src={src}
              key={src}
              alt="card images"
            />
          ))}
        </Flex>
      </Slider>
    </Wrapper>
  );
}

export default Cards;
