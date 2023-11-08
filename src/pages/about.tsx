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
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProfileSection from "../components/section/ProfileSection";

function About() {
  const { colorMode } = useColorMode();

  return (
    <div className="z-0 justify-center">
      <NavBar />
      {/* <Container maxW="container.lg" mt={"5rem"}>  */}
      <Container justifyContent="center" alignItems={"center"} flexDirection="column" maxW={"container.2xl"} mt="4.5rem">

        <ProfileSection></ProfileSection>



        <Footer></Footer>

      </Container>


    </div>

  );
}

export default About;
