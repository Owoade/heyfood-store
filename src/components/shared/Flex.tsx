import { Box, BoxProps } from '@mui/material'
import React, { FC } from 'react'

type Props = {}

const Flex: FC<BoxProps> = ({ children, ...rest }) => {
    return (
      <Box display={"flex"} {...rest}>
        {children}
      </Box>
    );
  };
  

export default Flex