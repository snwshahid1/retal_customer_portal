import { FC, memo } from "react";
import PropertyInfo from "../components/PropertyInfo";
import PropertyProgression from "../components/PropertyProgression";

const Tab4Content: FC<any> = ({opendDialog}) => {
  const propertyInfo = {
    villaArea: "5.00 SQM",
    plotArea: "250.00 SQM",
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
    circularProgress: 25,
    openDialog: opendDialog
  }

  return (
    <>
      <PropertyInfo {...propertyInfo} />
      <PropertyProgression {...Progression} />
    </>
  );
};

export default memo(Tab4Content);
