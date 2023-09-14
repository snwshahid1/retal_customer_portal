import { FC, memo } from "react"

import { Accordion } from "@szhsin/react-accordion";
import {
  AccordionItem
} from "./style";


const AccordionComp: FC<any> = ({ items, openMultiple=false }) => {
  return (
    <Accordion allowMultiple={openMultiple}>
      {items.map(({ header, content }: any, i: number) => (
        <AccordionItem value={header} key={i}>
          {content}
          
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default memo(AccordionComp);
