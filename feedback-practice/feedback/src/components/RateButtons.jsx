import React, { useState, useContext, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';

function RateButtons() {
	const { setRate, rate } = useContext(GlobalContext);

	useEffect(() => {
		console.log(rate);
	}, [rate]);

	const numbersClass =
		'text-2xl font-semibold cursor cursor-pointer rounded-full w-10 h-10 text-center hover:bg-pink-400 ';

	return (
		<div className="flex flex-col w-full">
			<div className="flex p-5 justify-between">
				<div
					onClick={() => {
						setRate(1);
					}}
				>
					<button className={numbersClass}>1</button>
				</div>
				<div
					onClick={() => {
						setRate(2);
					}}
				>
					<button className={numbersClass}> 2 </button>
				</div>
				<div
					onClick={() => {
						setRate(3);
					}}
				>
					<button className={numbersClass}> 3 </button>
				</div>
				<div
					onClick={() => {
						setRate(4);
					}}
				>
					<button className={numbersClass}> 4 </button>
				</div>
				<div
					onClick={() => {
						setRate(5);
					}}
				>
					<button className={numbersClass}> 5 </button>
				</div>
			</div>
			<div className="flex p-5 justify-between">
				<div
					onClick={() => {
						setRate(6);
					}}
				>
					<button className={numbersClass}> 6 </button>
				</div>
				<div
					onClick={() => {
						setRate(7);
					}}
				>
					<button className={numbersClass}> 7 </button>
				</div>
				<div
					onClick={() => {
						setRate(8);
					}}
				>
					<button className={numbersClass}> 8 </button>
				</div>
				<div
					onClick={() => {
						setRate(9);
					}}
				>
					<button className={numbersClass}> 9 </button>
				</div>
				<div
					onClick={() => {
						setRate(10);
					}}
				>
					<button className={numbersClass}>10 </button>
				</div>
			</div>
		</div>
	);
}

export default RateButtons;
