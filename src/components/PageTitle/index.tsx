import { FC, memo } from "react"
import { PageTitleHolder } from "./style"

const PageTitle: FC<any> = ({ title, subtitle }) => {
  
  return (
    <PageTitleHolder>
      {title && <h3>{title}</h3>}
      {subtitle && <h5>{subtitle}</h5>}
    </PageTitleHolder>
  );
};

export default memo(PageTitle);
