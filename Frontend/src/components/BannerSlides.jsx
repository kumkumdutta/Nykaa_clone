

import { Box, Text, useStyleConfig } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function BannerText() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const styleConfig = useStyleConfig("BannerText"); 

  return (
    <Box width={'100%'} alignContent={'center'} >
      <Text
      fontFamily={'Inter, sans-serif !important'} fontSize={'16px'} fontWeight={500} letterSpacing={'-0.1px'} lineHeight={'40px'}
        sx={{
          ...styleConfig,
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : '1rem'})`, 
          transition: "opacity 0.5s, transform 0.5s",
        }}
      >
        Pay Day Sale is Live! Upto 50% Off On Salary Saving Steals
      </Text>
    </Box>
  );
}

export default BannerText;

