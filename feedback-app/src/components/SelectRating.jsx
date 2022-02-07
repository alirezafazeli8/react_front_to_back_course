import React from 'react';

function SelectRating({ select }) {
	function ratingHandle(e) {
		const selectedValue = Number(e.target.value);

		select(selectedValue);
	}

	return (
		<ul className={'rating '}>
			<li>
				<input
					type="radio"
					name="rating"
					id="num1"
					value="1"
					onClick={ratingHandle}
				/>
				<label htmlFor={'num1'}>1</label>
			</li>
			<li>
				<input
					type="radio"
					name="rating"
					id="num2"
					value="2"
					onClick={ratingHandle}
				/>
				<label htmlFor={'num2'}>2</label>
			</li>
			<li>
				<input
					type="radio"
					name="rating"
					id="num3"
					value="3"
					onClick={ratingHandle}
				/>
				<label htmlFor={'num3'}>3</label>
			</li>
			<li>
				<input
					type="radio"
					name="rating"
					id="num4"
					value="4"
					onClick={ratingHandle}
				/>
				<label htmlFor={'num4'}>4</label>
			</li>
			<li>
				<input
					type="radio"
					name="rating"
					id="num5"
					value="5"
					onClick={ratingHandle}
				/>
				<label htmlFor={'num5'}>5</label>
			</li>
			<li>
				<input
					type="radio"
					name="rating"
					id="num6"
					value="6"
					onClick={ratingHandle}
				/>
				<label htmlFor={'num6'}>6</label>
			</li>
			<li>
				<input
					type="radio"
					name="rating"
					id="num7"
					value="7"
					onClick={ratingHandle}
				/>
				<label htmlFor="num7">7</label>
			</li>
			<li>
				<input
					type="radio"
					name="rating"
					id="num8"
					value="8"
					onClick={ratingHandle}
				/>
				<label htmlFor={'num8'}>8</label>
			</li>
			<li>
				<input
					type="radio"
					name="rating"
					id="num9"
					value="9"
					onClick={ratingHandle}
				/>
				<label htmlFor={'num9'}>9</label>
			</li>
			<li>
				<input
					type="radio"
					name="rating"
					id="num10"
					value="10"
					onClick={ratingHandle}
				/>
				<label htmlFor={'num10'}>10</label>
			</li>
		</ul>
	);
}

export default SelectRating;
