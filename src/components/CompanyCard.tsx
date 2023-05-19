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
import { Company } from "../types/company";

interface ICompanyCard {
  company: Company;
  colorMode: string;
}

const CompanyCard: React.FC<ICompanyCard> = ({ company, colorMode }) => {
  return (
    <LinkBox
      px={5}
      py={5}
      borderWidth="1px"
      rounded="lg"
      bg={useColorModeValue("white", "darkGray.800")}
      borderColor={useColorModeValue("gray.100", "darkGray.700")}
      _hover={{ borderColor: "darkGray.500" }}

    >
      <LinkOverlay href={company.url} rel="noopener" isExternal>
        <Flex justifyContent="space-between">
          <Flex>
            <Image

              boxSize={"2xs"}
              rounded={"1px"}
              objectFit={"cover"}
              src={company.logo}
              alt={company.alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                // align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {company.title}
              </Heading>
              <Heading
                // align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {company.role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                alignItems="center"
                isInline
                display={["none", "none", "flex", "flex"]}
              >
                {company.skills.map((skill) => (
                  <Tag size="sm" padding="0 5px" key={skill}>
                    {skill}
                  </Tag>
                ))}
              </Stack>
            </Stack>
          </Flex>
          <Stack display={["none", "none", "flex", "flex"]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {company.period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          alignItems="center"
          display={["flex", "flex", "none", "none"]}
        >
          {company.skills.map((skill) => (
            <Tag size="sm" padding="0 5px" key={skill}>
              {skill}
            </Tag>
          ))}
        </Stack>
      </LinkOverlay>
    </LinkBox>
  );
};

export default CompanyCard;
