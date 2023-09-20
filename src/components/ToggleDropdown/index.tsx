import { forwardRef, memo } from "react";
import { DropDown } from "./style";
import classNames from "classnames";

const ToggleDropdown = forwardRef(function ToggleDropdown(
  { visible, className, toggleCTA, children }: any,
  ref: any
) {
  return (
    <span className="toggleMenu" ref={ref}>
      {toggleCTA}
      <DropDown
        role="menu"
        className={classNames(
          `toggle-menu-dropdown ${className && className}`,
          { visible: visible }
        )}
      >
        {children}
      </DropDown>
    </span>
  );
});

export default memo(ToggleDropdown);
