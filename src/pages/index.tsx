import { ChakraProvider, Container, Divider } from "@chakra-ui/react";
import TechStackSection from "../components/section/TechStackSection";
import useSWR from "swr";
import { SideProjectSection } from "../components/section/SideProjectSection";
import { Spacer } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
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
