import { forwardRef, memo } from 'react'
import { DropDown } from './style'

const ToggleDropdown = forwardRef(function ToggleDropdown( {className, toggleCTA, children}: any, ref: any) {
  return (
    <span className='toggleMenu' ref={ref}>
      {toggleCTA}
      <DropDown role='menu' className={`toggle-menu-dropdown ${className}`}> 
        {children}
      </DropDown>
    </span>
  )
})

export default memo(ToggleDropdown)
