//
//

import { Box, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import Data from "../utils/BannerData";
import BannerText from "./BannerSlides";

export const Banner = () => {
  const Data1 = Data();
  console.log(Data1);
  return (
    <Flex
    justifyContent={'space-around'}
      width={"100%"}
      height={"50px"}
      backgroundImage={
        "https://images-static.naikaa.com/media/wysiwyg/2023/common-strip.jpeg"
      }
      backgroundRepeat={"no-repeat"}
      backgroundSize={"contain"}
    >
      
      <Box width={'60%'} m={'auto'}>  <BannerText 
      /></Box>
      
      <HStack width={'40%'}>
        {Data1.data.map((el, index) => (
          <>
            <Box fontWeight={'bold'} >{el.icon}</Box>
            <Box fontFamily={'Inter , sans-serif'} >{el.title}</Box>
          {index >= 0 && index<3  ? <>|</> : <></>}
          </>
        ))}
      </HStack>
    </Flex>
  );
};
