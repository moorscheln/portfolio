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


import { Education } from "../types/education";
import { useColorMode } from '@chakra-ui/color-mode';

interface IEducationCard {
  education: Education;
  colorMode: string;
}

const EducationCard: React.FC<IEducationCard> = ({ education, colorMode }) => {
  return (

    <LinkBox

      py={5}
      borderWidth="1px"
      rounded="lg"
      bg={useColorModeValue("white", "blackAlpha 500")}
      borderColor={useColorModeValue("gray.100", "darkGray.700")}
      _hover={{ borderColor: "darkGray.500" }}

    >
      <LinkOverlay href={education.url} rel="noopener" isExternal >
        <Flex justifyContent={{ base: "center", sm: "space-between" }} ml={2} mr={2}>
          <Flex display={{ base: "inline-block", sm: "flex" }}>
            <Image
              rounded="xl"
              maxW={{ base: "100%", sm: "10rem" }}
              maxH="10rem"
              display={"flex"}
              objectFit={"contain"}
              src={education.logo}
              alt={education.alt}
              p={1}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                // align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {education.title}
              </Heading>
              <Stack display={["flex", "flex", "none", "none"]}>
                <Text fontSize={{ sm: "sm", md: "md", lg: "lg" }} color={`mode.${colorMode}.career.subtext`}
                  mt="-2">
                  {education.period}
                </Text>
              </Stack>
              <Heading
                // align="left"
                fontSize="md"
                fontStyle={"italic"}
                color={`mode.${colorMode}.career.subtext`}
              >
                {education.role}
              </Heading>

              <Stack
                spacing={1}
                // maxW={"80%"}
                display="flex"
                mt={2}
                alignItems={"left"}
                flexWrap={"wrap"}
                direction="row"
                justifyContent={"left"}


              >
                {education.skills.map((skill) => (
                  <Box padding="2px" key={skill}>
                    <Tag size="md" padding="4px" h={"max-content"} bg="darkGray.800">
                      {skill}
                    </Tag>
                    {/* <Tag size="md" padding="4px" h={"max-content"} bg="darkGray.800">
                      {skill}
                    </Tag> */}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Flex>
          <Stack display={["none", "none", "flex", "flex"]} width="98%" justifyContent="right" pos="absolute">
            <Text fontSize={{ sm: "sm", lg: "lg" }} color={`mode.${colorMode}.career.subtext`} align={"right"}>
              {education.period}
            </Text>
          </Stack>
        </Flex>
        {/* <Stack
          spacing={1}
          mt={3}
          alignItems="center"
          display={["flex", "flex", "none", "none"]}
        >
          {education.skills.map((skill) => (
            <Tag size="md" padding="0 5px" key={skill}>
              {skill}
            </Tag>
          ))}
        </Stack> */}
      </LinkOverlay>
    </LinkBox>

  );
};

export default EducationCard;
