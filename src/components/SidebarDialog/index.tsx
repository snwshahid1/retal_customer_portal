import { FC, memo } from "react"
import { Dialog, GrayoutWrapper } from "./style"

const SidebarDialog: FC<any> = ({ show, children, className, handleClose }) => {
  
  return (
    <>
      {show && <GrayoutWrapper />}
      <Dialog className={`dialog-modal ${className}`}>
        <button onClick={handleClose} className="dialog-close-btn">
          <i className="sm-icon close-icon"></i>
        </button>
        <div className="dialog-content">
          {children}
        </div>
      </Dialog>
    </>
  );
};

export default memo(SidebarDialog);
