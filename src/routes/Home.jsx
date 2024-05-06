import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import AddPlant from '../components/AddPlant';
import SearchPlant from '../components/SearchPlant';
import PlantList from '../components/PlantList';
import Navbar from '../components/Navbar';

function Home() {
	const [plants, setPlants] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		fetch('http://localhost:4000/plants', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => setPlants(data));
	}, []);

	const filteredPlants = plants.filter((plant) =>
		plant.name.toLowerCase().includes(searchInput.toLowerCase())
	);

	return (
		<main className="px-10">
			<Navbar />
			<Logo />
			<AddPlant />
			<SearchPlant
				setSearchInput={setSearchInput}
				searchInput={searchInput}
			/>
			<PlantList plants={filteredPlants} />
		</main>
	);
}

export default Home;
