import PlantCard from './PlantCard';

function PlantList() {
	return (
		<div className="grid grid-cols-4 gap-4 my-10">
			<PlantCard />

			<PlantCard />

			<PlantCard />

			<PlantCard />
		</div>
	);
}

export default PlantList;
