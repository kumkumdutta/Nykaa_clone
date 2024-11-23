import React from 'react'
import {Box, Flex, Image, Text} from "@chakra-ui/react";

const category = ['Makeup','Skin','Hair','Appliance','Bath & Body','Natural','Mom & Baby','Health & Wellness', 'Men', 'Fregrance', 'Pop ups']
export const NavTwo = () => {
  return (
    <Box boxShadow= "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px">
 <Flex width={'85%'} m={'auto'} justifyContent={'space-around'} height={'50px'} >
       
       <Flex justifyContent={'space-around'} width={'80%'}  m={'auto'} >
       {category.map((el)=><Text color={'grey'}  _hover={{color:'#EC2988'}}>{el}</Text>)}
       </Flex>

      
       <Box width={'5%'} m={'auto'}  mr={20}>
           <Image textAlign={'center'} width={'100%'} src={'https://i.postimg.cc/WbS2mcSS/Untitled-Project.jpg'}  height={'100%'}/>
       </Box>
   </Flex>
    </Box>
   
  )
}
