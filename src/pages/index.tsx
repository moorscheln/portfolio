import { ChakraProvider, Container, Divider } from "@chakra-ui/react";
import ProfileSection from "../components/section/ProfileSection";
import TechStackSection from "../components/section/TechStackSection";
import useSWR from "swr";
import Meta from "../components/Meta";
import { SideProjectSection } from "../components/section/SideProjectSection";
import Hero from "../components/Hero";
import { Spacer } from "@chakra-ui/react";
import SplitScreen from "../components/SplitScreenImage";
import NavBar from "../components/NavBar";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import HeroTailwind from '../components/HeroTailwind';
import PageLayout from "../layout/PageLayout";
import Footer from "../components/Footer";
import SonnyHero from "../components/HeroSonny";


export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  // const { data } = useSWR("/api/spotify", fetcher);
  
  return (
    
    <div className="overflow-scroll z-0 justify-center">
    {/* <Flex flexDirection={"column"}  justifyContent={"center"} overflow="hidden" > */}
      
      <NavBar />
      
<section id="hero" className="overflow-hidden snap-center">
  {/* <Hero></Hero> */}
  <SonnyHero></SonnyHero>
  </section>
  
      
      <Container justifyContent="center" alignItems={"center"} flexDirection="column" maxW={"80rem"}>
        
        
        
        
        
          <Spacer></Spacer> 
        
 
          
      <Divider my={10} />
      
         <TechStackSection />
      
          <Divider my={10} />
   <SideProjectSection />  
   </Container>
  <Footer/>
  
  
    
   
  </div>
      
    
  );
}
