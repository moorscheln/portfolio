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
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MotionBox } from "../utils/motion";
import { companies, educations } from "../constant";
import CompanyCard from "../components/CompanyCard";
import Paragraph from "../components/Paragraph";
import { UnderlinedText } from "../components/UnderlinedText";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProfileSection from "../components/section/ProfileSection";

function About() {
  const { colorMode } = useColorMode();

  return (
    <>
    <NavBar></NavBar>
    <Container maxW="container.lg" mt={"5rem"}> 
    
    <ProfileSection></ProfileSection>
      
       
      
      <Footer></Footer>
      
    </Container>
    
    
    </>
        
  );
}

export default About;
