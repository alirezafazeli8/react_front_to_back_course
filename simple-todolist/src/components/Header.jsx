import React from "react";
import headerCssStyle from "./Header.module.css";

function Header({ title, describe, children }) {
	return (
		<header className={headerCssStyle.header}>
			<div>
				<h2>{title}</h2>
				{describe}
			</div>

			<div style={{ width: "100%" }}>{children}</div>
		</header>
	);
}

export default Header;
