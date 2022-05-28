import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children, handleCloseModal, isSalesMode }) {
	return ReactDOM.createPortal(
		<div className="modal-backdrop">
			<div
				className="modal"
				style={{
					border: "solid black 1px",
					textAlign: "center",
					backgroundColor: isSalesMode ? "green" : "red",
				}}
			>
				{children}
				<button
					onClick={() => {
						handleCloseModal(false);
					}}
					className={isSalesMode ? "btn--sale" : "btn-none-sale"}
				>
					Close
				</button>
			</div>
		</div>,
		document.body
	);
}

export default Modal;
