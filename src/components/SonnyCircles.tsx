import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { shouldForwardProp, Container, chakra } from "@chakra-ui/react";
import { isValidMotionProp } from "framer-motion";
import { BoxProps } from "@chakra-ui/react";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function SonnyCircles({children}: BoxProps) {
    return(
        // <Box as={Flex} position={"relative"} justifyContent={"center" } alignItems={"center"}>
        
        <motion.div 
        initial={{opacity: 0}}
        animate = {{scale: [1,2,2,3,1],
        opacity: [.1,.2,.4,.8,.1,1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]}}
        transition={{duration: 2.5,}}
        className="relative flex justify-center items-center"
        >
        {/* <div className="relative flex justify-center items-center"> */}
            <div className = "absolute border border-[#424750] rounded-full h-[18.75rem] w-[18.75rem] mt-3.25rem animate-ping"/>
            <div className = "rounded-full border border-[#424750] h-[25rem] w-[25rem] absolute mt-3.25rem opacity-20 "/>
            <div className = "rounded-full border border-[#424750] h-[37.5rem] w-[37.5rem] absolute mt-3.25rem opacity-20 "/>
            <div className = "rounded-full border border-[#2BC0F7] opacity-20 h-[46.875rem] w-[46.875rem] absolute mt-3.25rem animate-pulse"/>
            <div className = "rounded-full border border-[#424750] h-[56.25rem] w-[56.25rem] absolute mt-3.25rem opacity-20"/>
            {/* </div> */}
            <Box>
            {children}
    </Box>
    </motion.div>
    
    
    )
}