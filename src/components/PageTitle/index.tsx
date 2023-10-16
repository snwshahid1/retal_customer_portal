import { FC, memo } from "react"
import { PageTitleHolder } from "./style"
import { useTranslation } from "src/Hooks/useTranslation";

const PageTitle: FC<any> = ({ title, subtitle }) => {
  let { translate } = useTranslation();
  return (
    <PageTitleHolder>
      {title && <h3>{translate(`${title}`)}</h3>}
      {subtitle && <h5>{translate(`${subtitle}`)}</h5>}
    </PageTitleHolder>
  );
};

export default memo(PageTitle);
