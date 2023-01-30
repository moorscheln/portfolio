import React from "react";
import {
  Container,
  Divider,
  SlideFade,
  Heading,
  Flex,
  Stack,
  Box,
  VStack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MotionBox } from "../utils/motion";
import { companies, educations } from "../constant";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import EducationCard from '../components/EducationCard';
import HCard from "../components/HCard";

function Experience() {
  const { colorMode } = useColorMode();

  return (
    <div className="overflow-hidden z-0 justify-center">
    <NavBar></NavBar>
    
    <Container maxW="container.lg" mt={"4rem"}> 

          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 0]}
            mt={5}
          >
            <Flex my={2} >
            <Flex alignItems={"center"}>
              <Stack pr={3}>
                <BsFillBriefcaseFill size={"2rem"} />
              </Stack>

              <Heading>Career</Heading>
            </Flex>
          </Flex>
            {companies.map((company, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <EducationCard
                  key={index}
                  education={company}
                  colorMode={colorMode}
                  
                />
              </MotionBox>
            ))}
          

     
            <Flex my={2} >
            <Flex alignItems={"center"}>
              <Stack pr={3}>
                <FaGraduationCap size={"2rem"} />
              </Stack>

              <Heading>Education</Heading>
            </Flex>
          </Flex>
            {educations.map((educations, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <EducationCard
                  key={index}
                  education={educations}
                  colorMode={colorMode}
                  
                />
              </MotionBox>
            ))}
            </VStack>
            
              
           
          
          
          </Container>
          
      
      <Footer></Footer>
    
      </div>
    
  );
}

export default Experience;
