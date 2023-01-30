import React from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Heading,
  Text,
  Tag,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { MotionBox } from "../utils/motion";
import { Center } from "@chakra-ui/react";


import { Company } from "../types/company";

interface IcompanyCard {
  company: Company;
  colorMode: string;
}

const ExCard: React.FC<IcompanyCard> = ({ company, colorMode }) => {
  return (

<MotionBox whileHover={{ y: -5 }}>
    <Center py={6}>
      <LinkBox
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        px={6}
        py={3}
        mx={5}
        overflow={"hidden"}
        _hover={{ cursor: "pointer" }}
        // onClick={() => {
        //   company.link && window.open(company.link);
        // }}
      >
        <Box bg={"gray.100"} mt={-6} mx={-6} pos={"relative"}>
          <Image
          alt="excard"
            src={company.logo}
            objectFit={"cover"}
            maxH={"210px"}
            h={"210px"}
            w="full"
          />
        </Box>
        <Stack mb={3}>
          <Text
            mt={3}
            color={"blue.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"lg"}
            letterSpacing={1.1}
          >
            {company?.title}
          </Text>
          <Text color={"gray.500"}>{company?.title}</Text>
        </Stack>
        {company.skills.map((skill) => (
          <Tag size="sm" padding="0 5px" key={skill} mx={1}>
            {skill}
          </Tag>
        ))}
      </LinkBox>
    </Center>
  </MotionBox>
  );
        };

        export default ExCard;