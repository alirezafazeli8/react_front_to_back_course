function RateInput() {
	return (
		<div className="w-full mt-2">
			<form action="" className="flex  justify-between items-center">
				<div className="w-full">
					<input
						type="text"
						className="bg-gray-400 outline-none py-2 w-full  rounded-lg p-2 text-white font-semibold"
					/>
				</div>
				<div>
					<button className="p-2 bg-pink-200 rounded-lg m-2">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default RateInput;
