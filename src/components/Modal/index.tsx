import { forwardRef, memo, useEffect, useState } from "react";
import { ResponsiveModal } from "./style";

const Modal = forwardRef(function Modal(
  { className, open, onClose, children }: any,
  ref: any
) {
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  const AppSidebar = document
    .getElementById("app-sidebar")
    ?.getBoundingClientRect();
  const AppSidebarWidth = AppSidebar?.width;

  useEffect(() => {
    setSidebarWidth(AppSidebarWidth ? AppSidebarWidth : 0);
  }, [AppSidebarWidth]);

  return (
    <ResponsiveModal className={open === true ? "show-modal" : ""}>
      <div
				ref={ref}
        className={`popup-modal-inner ${className ? className : ""}`}
        style={{ left: `calc(50% + ${sidebarWidth / 2}px)`}}
      >
        <div className="modal-content">
          {onClose && (
            <button
              className="close-popup"
              aria-label="Close"
              onClick={onClose}
            ></button>
          )}
          {children}
        </div>
      </div>
    </ResponsiveModal>
  );
});

export default memo(Modal);
