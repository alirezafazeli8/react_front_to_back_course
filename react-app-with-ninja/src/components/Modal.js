import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children, handleCloseModal }) {
	return ReactDOM.createPortal(
		<div className="modal-backdrop">
			<div className="modal">
				{children}
				<button
					onClick={() => {
						handleCloseModal(false);
					}}
				>
					Close
				</button>
			</div>
		</div>,
		document.body
	);
}

export default Modal;
