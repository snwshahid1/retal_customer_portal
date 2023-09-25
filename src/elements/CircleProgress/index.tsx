import { FC, memo, useEffect } from "react";
import { CircleHolder } from "./style";

const CircleProgress: FC<any> = ({ percentage, color }: any) => {
  const r = 60;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  
  const cleanPercentage = (percentage: any) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
  };

  const Circle = ({ className, color, percentage }: any) => {
    return (
      <circle
        className={className}
        r={r}
        cx={92}
        cy={67}
        fill="transparent"
        stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
        strokeWidth={"7px"}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
      ></circle>
    );
  };

  const pct = cleanPercentage(percentage);

  return (
    <CircleHolder stroke={strokePct}>
      <svg width={136} height={136}>
        <g transform={`rotate(-90 ${"80 80"})`}>
          <Circle className="circle-bg" />
          {percentage > 0 && (
            <Circle
              className="cirlce-percentage"
              color={color}
              percentage={pct}
            />
          )}
        </g>
      </svg>
    </CircleHolder>
  );
};

export default memo(CircleProgress);
