import { FC, memo } from "react";
import CircleProgress from "src/elements/CircleProgress";

const PropertyProgression: FC<any> = ({
  step1Icon,
  step2Icon,
  step3Icon,
  step4Icon,
  taskProgress,
  taskCompleted,
  circularProgress,
  openDialog
}) => {
  const IconClass1 =
    step1Icon === "check-icon2"
      ? "icon-bg-green"
      : step1Icon === "waiting-icon2"
      ? "icon-bg-yellow"
      : "icon-bg-red";

  const IconClass2 =
    step2Icon === "check-icon2"
      ? "icon-bg-green"
      : step2Icon === "waiting-icon2"
      ? "icon-bg-yellow"
      : "icon-bg-red";

  const IconClass3 =
    step3Icon === "check-icon2"
      ? "icon-bg-green"
      : step3Icon === "waiting-icon2"
      ? "icon-bg-yellow"
      : "icon-bg-red";

  const IconClass4 =
    step4Icon === "check-icon2"
      ? "icon-bg-green"
      : step4Icon === "waiting-icon2"
      ? "icon-bg-yellow"
      : "icon-bg-red";

  return (
    <div className="progress-wrapper">
      <h5>Progression</h5>
      <div className="progress-wrapper-inner flex-wrap d-flex gap-20">
        <div className="progress-left">
          <ul className="progress-steps list-unstyled m-0 p-0">
            <li>
              <span>Step 01</span>
              <span className={`step-icon ${IconClass1}`}>
                <i className={step1Icon}></i>
              </span>
            </li>
            <li>
              <span>Step 02</span>
              <span className={`step-icon ${IconClass2}`}>
                <i className={step2Icon}></i>
              </span>
            </li>
            <li>
              <span>Step 03</span>
              <span className={`step-icon ${IconClass3}`}>
                <i className={step3Icon}></i>
              </span>
            </li>
            <li>
              <span>Step 04</span>
              <span className={`step-icon ${IconClass4}`}>
                <i className={step4Icon}></i>
              </span>
            </li>
          </ul>
          <div className="tasks-update">
            <span className="task-progress-bar">
              <span
                className="task-progress"
                style={{ width: `${taskProgress}` }}
              ></span>
            </span>
            <h4>
              Task completed <span className="ms-auto">{taskCompleted}</span>
            </h4>
          </div>
        </div>

        <div className="progress-right">
          <div className="circle-progress-holder">
            <CircleProgress percentage={circularProgress} />
            <div className="circle-center">
              <h2>{circularProgress}%</h2>
              <span>progression</span>
            </div>
          </div>
        </div>
      </div>
      <button className="theme-btn min-140 mb-1" onClick={() => openDialog()}>View details</button>
    </div>
  );
};

export default memo(PropertyProgression);
