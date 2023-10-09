import { FC, memo } from "react";
import PropertyInfo from "../components/PropertyInfo";
import PropertyProgression from "../components/PropertyProgression";

const Tab1Content: FC<any> = ({opendDialog}) => {
  const propertyInfo = {
    villaArea: "40.00 SQM",
    plotArea: "550.00 SQM",
    handoverDate: "04/09/2024",
    warrantyDate: "04/09/2030",
  };

  const Progression = {
    step1Icon: "check-icon2",
    step2Icon: "check-icon2",
    step3Icon: "check-icon2",
    step4Icon: "check-icon2",
    taskProgress: '100%',
    taskCompleted: '7/7',
    circularProgress: 100,
    openDialog: opendDialog
  }

  return (
    <>
      <PropertyInfo {...propertyInfo} />
      <PropertyProgression {...Progression} />
    </>
  );
};

export default memo(Tab1Content);
