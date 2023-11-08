/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Text,
  Container,
  Flex,
  IconButton,
  HStack,
  Box,
  Button,
  Stack,
  Link as CharkaLink,
  useColorModeValue,
  Avatar,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/hooks";
import { useColorMode } from "@chakra-ui/color-mode";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { menuLinks } from "../constant";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { siteConfig } from "../constant";

const iconProps = {
  variant: "ghost",
  size: { base: "sm", sm: "md" },
  isRound: true,
};

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let router = useRouter();
  let { asPath } = router;

  const navItem = (
    <>
      {menuLinks.map((link) => (
        <NextLink href={link.route} key={link.name} passHref>
          <CharkaLink
            href={link.route}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("darkGray.100", "darkGray.700"),
            }}
            bg={
              link.route === asPath
                ? useColorModeValue("darkGray.200", "darkGray.700")
                : "none"
            }
            color={
              link.route === asPath
                ? useColorModeValue("gray.500", "white")
                : useColorModeValue("black", "white")
            }
            onClick={isOpen ? onClose : onOpen}
            fontWeight='bold'
            fontSize={"lg"}
          >
            {link.name}
          </CharkaLink>
        </NextLink>

      ))}
    </>
  );

  return (
    <div className='h-4rem snap-y snap-mandatory overflow-hidden z-1'>
      <Container minWidth="100%" maxWidth="100%" bg={useColorModeValue("white", "darkGray.800")} px={4} boxShadow={"lg"} top="0" position="fixed" zIndex={"1"} >
        <Flex
          h={"4rem"}
          w="100%"
          justifyContent={"space-between"}
          mx={"auto"}


        >

          <HStack spacing={2} alignItems={"center"} display={{ base: "flex", sm: "flex" }}>

            <Box p={1} _hover={{ bg: useColorModeValue("darkGray.100", "darkGray.700"), rounded: "lg", p: 1 }} display={{ base: "flex" }} >
              <Avatar
                as={CharkaLink}
                size="md"
                href="/"
                src="/MichaelHeadshot.png"

              />
            </Box>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              position="relative"
              display={["inherit", "inherit", "none"]}
              // display={{base: "inherit", "inherit", "none"}}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack as="nav" spacing="2" display={{ base: "none", md: "flex" }}>
              {navItem}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack as="nav" textAlign="center" spacing={"auto"}>
              {siteConfig.author.accounts.map((sc, index) => (
                <IconButton
                  key={index}
                  as={Link}
                  isExternal
                  aria-label={sc.name}
                  href={sc.url}
                  colorScheme={sc.type}
                  icon={sc.icon}
                  {...iconProps}

                />
              ))}
            </HStack>
            <ColorModeSwitcher justifySelf="flex-end" _hover={{ bg: useColorModeValue("darkGray.100", "darkGray.700") }} />
          </Flex>
        </Flex>

        {isOpen && (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={"container.xl"}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {navItem}
            </Stack>
          </Box>
        )}
      </Container>

    </div>
  );
};

export default NavBar;
