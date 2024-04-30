function PlantCard() {
	return (
		<div className="w-full">
			<img
				src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOpwKwEmShj3ycl8PJdnPKRTghy-NH4ACWbwLVOOsiFWjVAzcD"
				alt=""
				className="w-full h-[250px] object-cover"
			/>

			<div>
				<h4 className="font-bold text-xl">Jade</h4>
				<h4 className="font-semibold">Price: 27.00</h4>
				<button className="bg-green-500 p-2">In Stock</button>
			</div>
		</div>
	);
}

export default PlantCard;
