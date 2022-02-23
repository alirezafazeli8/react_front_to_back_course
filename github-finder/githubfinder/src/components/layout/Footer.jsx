import React from 'react';
import { FiHash } from 'react-icons/fi';

function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="bg-stone-900 p-3">
			<FiHash className="m-auto" fontSize={50} />
			<p className="font-bold text-xl text-center">
				Copyright {year} All Right Reserved
			</p>
		</div>
	);
}

export default Footer;
