import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import { BackgroundProps, ButtonGroup } from "@chakra-ui/react";
import { Center, Image } from '@chakra-ui/react';
import { Container } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import {VStack} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "tailwindcss/tailwind.css"
import { Button } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import SonnyCircles from './SonnyCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Computer Engineering Student"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center'>
     <Flex
    align="center"
    justify="center"
    overflow={"hidden"}
    
    
   > 
{/* <Box as={Flex} flexDirection="column" alignItems={"center"} justifyContent="center" textAlign={"center"} position="relative" > */}
<SonnyCircles></SonnyCircles>


    <Box as={Flex} position={"absolute"} justifyContent="center" boxSize={"200"} >
      <VStack>
      
      
        <Box>
        
          <Box as={Flex} justifyContent="center" >
          
            <Image src = {"/MichaelHeadshot.png"} borderRadius = {"full"} mx = {"auto"} boxSize = {"200"}/>
            
          </Box>
          
          
        </Box>
        
    
         <div>
         
          <h2 className='text-4xl lg:text-5xl font-bold scroll-px-10 text-center tracking-[4px]'
         >Michael Orscheln</h2>
         </div>
          <Flex width={"auto"} >
          <h1  className='text-lg uppercase text-gray-500 pb-2'>
            <span className ="mr-3">{text}</span>
            <Cursor cursorColor="#2BC0F7"></Cursor>
          </h1>
          </Flex>
         
          <div className='pt-2'>
            
            <ButtonGroup>
              
          <Button size="md" className='tracking-widest' bg={useColorModeValue("white", "darkGray.900")} textColor="darkGray.500" as={Link} href="/about">About</Button>
          <Button size="md" className='tracking-widest' bg={useColorModeValue("white", "darkGray.900")} textColor="darkGray.500" as={Link} href="/experience">Experience</Button>
          <Button size="md" className='tracking-widest' bg={useColorModeValue("white", "darkGray.900")} textColor="darkGray.500" as={Link} href="/projects">Projects </Button>
          <Button size="md" className='tracking-widest' bg={useColorModeValue("white", "darkGray.900")} textColor="darkGray.500" as={Link} href="/contact">Contact</Button>
          </ButtonGroup>
          </div>
         
      
      
      </VStack>
    </Box>
      
    </Flex>
    </div>

  )
}