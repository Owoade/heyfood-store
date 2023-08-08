import { Box, BoxProps } from '@mui/material'
import React, { FC } from 'react'

type Props = {}

interface ImageProps extends BoxProps {
    src: string,
    alt: string
    size?:string;
}

const Image: FC<ImageProps> = ({src, size, ...rest }) => {
    return (
      <Box overflow={"hidden"} { ...( size ? { height: size, width: size  } : {}  ) } display={"flex"} {...rest}>
        <img src={src} width={"100%"} height={"100%"} alt="image" />
      </Box>
    );
  };
  

export default Image