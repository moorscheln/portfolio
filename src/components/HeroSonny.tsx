import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import { BackgroundProps, ButtonGroup } from "@chakra-ui/react";
import { Center, Image } from '@chakra-ui/react';
import { Flex } from "@chakra-ui/react";
import {VStack} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "tailwindcss/tailwind.css"
import { Button } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import SonnyCircles from './SonnyCircles';
import { Text } from '@chakra-ui/react';

type Props = {}

export default function SonnyHero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Computer Engineering Student"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='relative h-screen flex flex-col items-center justify-center text-center overflow-hidden'>    
        
   <SonnyCircles></SonnyCircles>
   <Flex position={"absolute"} justifyContent="center" boxSize={"12.5rem"} >
      <VStack>
      
      
        
        
          <Box as={Flex} justifyContent="center" >
          
            <Image src = {"./headshot_small.png"} alt="michaelheadshot" borderRadius = {"full"} mx = {"auto"} boxSize = {"200"}/>
            
          
          
          
        </Box>
        
    
         
         
          <h2 className='text-4xl lg:text-5xl font-bold scroll-px-10 text-center tracking-[4px]'
         >Michael Orscheln</h2>
         
          <Flex width={"auto"} >
            <Text fontSize={{base: "sm", sm: "lg"}} color={"gray.500"} pb={2} >
          <h1  className='uppercase text-gray-500 pb-2'>
            <span className ="mr-3">{text}</span>
            <Cursor cursorColor="#2BC0F7"></Cursor>
            </h1>
            </Text>
          
          </Flex>
         
          
            
            <ButtonGroup as={Flex} display={{base: "none", sm: "flex"}} mt={"2rem"}>
              
          <Button size="md" className='tracking-widest' bg={useColorModeValue("white", "darkGray.900")} textColor="darkGray.500" as={Link} href="/about">About</Button>
          <Button size="md" className='tracking-widest' bg={useColorModeValue("white", "darkGray.900")} textColor="darkGray.500" as={Link} href="/experience">Experience</Button>
          <Button size="md" className='tracking-widest' bg={useColorModeValue("white", "darkGray.900")} textColor="darkGray.500" as={Link} href="/projects">Projects </Button>
          <Button size="md" className='tracking-widest' bg={useColorModeValue("white", "darkGray.900")} textColor="darkGray.500" as={Link} href="/contact">Contact</Button>
          </ButtonGroup>
          
         
      
      
      </VStack>
    </Flex>
   
 
    </div>

  )
}