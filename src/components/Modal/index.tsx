import { FC, memo } from "react";
import { ResponsiveModal } from "./style";

const Modal: FC<any> = ({ open, onClose, children }) => {

	return (
		<ResponsiveModal className={open === true ? 'show-modal' : ''}>
			<div className="popup-modal-inner modal-sm">
				<div className="modal-content">
					<button className="close-popup" aria-label="Close" onClick={onClose}></button>
					{children}
				</div>
			</div>
		</ResponsiveModal>
	);
};

export default memo(Modal);
