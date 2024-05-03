function AddPlant() {
	return (
		<div className="bg-green-200 p-10 my-5">
			<h4 className="font-bold text-3xl">New Plant</h4>
			<form className="w-full flex gap-x-5">
				<input
					type="text"
					placeholder="Plant name"
					className="border-b-2 border-gray-600 outline-none focus:border-green-500 w-full"
				/>

				<input
					type="text"
					placeholder="image.jpg"
					className="border-b-2 border-gray-600 outline-none focus:border-green-500 w-full"
				/>
			</form>
		</div>
	);
}

export default AddPlant;
