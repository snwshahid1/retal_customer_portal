import { FC, memo } from "react";
import PropertyInfo from "../components/PropertyInfo";
import PropertyProgression from "../components/PropertyProgression";

const Tab3Content: FC<any> = ({opendDialog}) => {
  const propertyInfo = {
    villaArea: "22.00 SQM",
    plotArea: "450.00 SQM",
    handoverDate: "Not assigned",
    warrantyDate: "Not assigned",
  };

  const Progression = {
    step1Icon: "check-icon2",
    step2Icon: "waiting-icon2",
    step3Icon: "lock-icon2",
    step4Icon: "lock-icon2",
    taskProgress: '10%',
    taskCompleted: '1/7',
    circularProgress: 15,
    openDialog: opendDialog
  }

  return (
    <>
      <PropertyInfo {...propertyInfo} />
      <PropertyProgression {...Progression} />
    </>
  );
};

export default memo(Tab3Content);
