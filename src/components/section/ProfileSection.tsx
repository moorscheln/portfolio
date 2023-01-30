import React from "react";
import {
  SlideFade,
  Box,
  Heading,
  Avatar,
  Image,
  Link,
  Flex,
  LightMode,
  ButtonGroup,
  Button,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Paragraph from "../Paragraph";
import { resume } from "../../constant";
import SocialButton from "../SocialButton";
import { BiPhoneCall } from "react-icons/bi";

interface IProfileSection {
  
}

const ProfileSection: React.FC<IProfileSection> = ({  }) => {
  return (
    <SlideFade in offsetY={80}>
      <Box>
        <Flex alignItems="center" justifyContent="space-between" >
          <VStack>
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "40px", lg: "48px" }}
            mb={3}
          >
            Michael Orscheln <span className="lightning-bolt">⚡️</span>
          </Heading>
          {/* <Flex justifyContent={"center"} alignItems="center"> */}
        <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6, alignContent: "center" }}>
          Computer Engineering Student at the University of Alabama 🐘
        </Paragraph>
        <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
          From Overland Park, KS
        </Paragraph>
        {/* </Flex> */}
        </VStack>
          <Flex alignItems={["flex-end", ""]} >
            <Image
              alt="Michael Orscheln"
              src="/headshot_small.png"
              mb={5}
              rounded="full"
            />
          </Flex>
          
        </Flex>
        

        <Flex mt={5} justifyContent = "center">
          <ButtonGroup>
            <SocialButton social={resume} />
            <Link href={"/contact"} style={{ textDecoration: "none" }}>
              <Button
                colorScheme="blue"
                size="sm"
                margin={"5px"}
                leftIcon={<BiPhoneCall />}
              >
                Contact Me
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>
        

      </Box>
    </SlideFade>
  );
};

export default ProfileSection;
