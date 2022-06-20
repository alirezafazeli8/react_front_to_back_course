import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children, handleCloseModal, isSalesMode }) {
	// create portal for moving the modal to outside the root
	return ReactDOM.createPortal(
		<div className="modal-backdrop">
			<div
				className="modal"
				style={{
					border: "solid black 1px",
					textAlign: "center",
					// condintional style
					backgroundColor: isSalesMode ? "green" : "red",
				}}
			>
				{children}
				{/* <button
					onClick={() => {
						handleCloseModal(false); // handle close
					}}
					// close button
					className={isSalesMode ? "btn--sale" : "btn-none-sale"}
				>
					Close
				</button> */}
			</div>
		</div>,
		document.getElementById("custom")
	);
}

export default Modal;
