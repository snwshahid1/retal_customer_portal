import { FC, memo } from "react";
import PropertyInfo from "../components/PropertyInfo";
import PropertyProgression from "../components/PropertyProgression";

const Tab2Content: FC<any> = ({opendDialog}) => {
  const propertyInfo = {
    villaArea: "150.00 SQM",
    plotArea: "650.00 SQM",
    handoverDate: "04/09/2024",
    warrantyDate: "04/09/2030",
  };

  const Progression = {
    step1Icon: "check-icon2",
    step2Icon: "check-icon2",
    step3Icon: "waiting-icon2",
    step4Icon: "lock-icon2",
    taskProgress: '50%',
    taskCompleted: '4/7',
    circularProgress: 50,
    openDialog: opendDialog
  }

  return (
    <>
      <PropertyInfo {...propertyInfo} />
      <PropertyProgression {...Progression} />
    </>
  );
};

export default memo(Tab2Content);
