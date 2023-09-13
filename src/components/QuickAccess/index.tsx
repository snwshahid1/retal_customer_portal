import { FC, memo } from "react"
import { Link } from "react-router-dom";
import { QuickAccessWrapper } from "./style"

const QuickAcces: FC<any> = ({ links }) => {
  
  return (
    <QuickAccessWrapper>
      {links.map( ({boxClass, iconClass, text, route}: any, i:number) => (
        <div className={`qc-box ${boxClass}`} key={i}>
          <Link to={route}>
            <i className={iconClass}></i>
            {text}
          </Link>
        </div>
      ))}
    </QuickAccessWrapper>
  );
};

export default memo(QuickAcces);
