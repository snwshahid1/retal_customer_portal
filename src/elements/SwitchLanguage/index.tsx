import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "src/Hooks/useTranslation";
import { SwitchLang } from "./style";

const SwitchLanguage: FC<any> = ({className=''}) => {
  let { translate, language, switchLanguage } = useTranslation();
  const lang = language === 'en' ? 'ar' : 'en';
  return (
    <SwitchLang>
      <div className={`switch-lang ${className}`}>
        <Link to="#" onClick={() => switchLanguage(lang)}>
          {translate("العربية")}
        </Link>
      </div>
    </SwitchLang>
  );
};

export default memo(SwitchLanguage);
