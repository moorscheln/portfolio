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
  Card,
  CardBody,
  CardFooter,
  Button
} from "@chakra-ui/react";

import { Education } from "../types/education";

interface IEducationCard {
  education: Education;
  colorMode: string;
}

const HCard: React.FC<IEducationCard> = ({ education, colorMode }) => {
  return (

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit={"contain"}
    margin={"2"}
    maxW={{ base: '40%%', sm: '20%' }}
    maxH={{base: '40%%', sm: "20%%"}}
    src='/ua.png'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='black'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
);
};

export default HCard;