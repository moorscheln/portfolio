import { ChakraProps } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const Header = () => {

 return (
    // Header/TopNav Container
    <header
      
      
      transition="box-shadow 0.2s"
      
      borderTop="6px solid"
      borderTopColor="brand.400"
      w="full"
      overflowY="hidden"
      borderBottomWidth={2}
      borderBottomColor={useColorModeValue("gray.200", "gray.900")}
      position="fixed"
      top={0}
     >
     <div h="4.5rem" mx="auto"  maxW="1200px" >
       
    {children}
     </div>
   </header>
  
  );
}

export default Header;