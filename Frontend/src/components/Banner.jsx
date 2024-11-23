//
//

import { Box, Button, Flex, HStack, Image, VStack, textDecoration } from "@chakra-ui/react";
import React from "react";
import Data from "../utils/BannerData";
import BannerText from "./BannerSlides";

export const Banner = () => {
  const Data1 = Data();
  console.log(Data1);
  return (
    <Flex
    display={{base:"none",md:"none",lg:'flex'}}
    justifyContent={'space-around'}
      width={"100%"}
      height={"50px"}
      backgroundImage={
        "https://images-static.naikaa.com/media/wysiwyg/2021/common-strip.jpg"
      }
      backgroundRepeat={"no-repeat"}
      backgroundSize={"contain"}
    >
      
      <Box width={'60%'} m={'auto'}>  <BannerText 
      /></Box>
      
      <HStack width={'40%'}>
        {Data1.data.map((el, index) => (
          <>
            <Box display={'flex'}  fontWeight={'bold'} _hover={{ color:'white'}} >
              <Box m={'auto'}>{el.icon}</Box>
               <Button fontFamily={'Inter , sans-serif'} background = 'transparent'  textDecoration={'none'} _hover={{background : 'transparent', color:'white'}}>{el.title}</Button></Box>
            
          {index >= 0 && index<3  ? <>|</> : <></>}
          </>
        ))}
      </HStack>
    </Flex>
  );
};
