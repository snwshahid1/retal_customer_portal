import { FC, memo } from "react"
import { StyledBox } from "./style"

const ContactBox: FC<any> = ({ className, children }: any) => {
  return (
    <StyledBox className={`box-content ${className ? className : ''}`}>
      {children}
    </StyledBox>
  );
};

export default memo(ContactBox);
