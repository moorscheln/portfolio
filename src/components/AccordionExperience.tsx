import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Education } from '../types/education';
import { Box } from '@chakra-ui/react';
import { Tag } from '@chakra-ui/react';

interface IEducationCard {
    education: Education;
    colorMode: string;
  }

const AccordionExperience: React.FC<IEducationCard> = ({ education, colorMode }) => {
  return (
    
<Accordion allowToggle>
<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
        Section 1 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  {education.skills.map((skill) => (
            <Tag size="md" padding="0 5px" key={skill}>
              {skill}
            </Tag>
          ))}
  <AccordionPanel pb={4}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </AccordionPanel>
</AccordionItem>


</Accordion>
  );
};

export default AccordionExperience;

