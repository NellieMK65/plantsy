import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import PlantCard from '../components/PlantCard';

function PlantDetails() {
	const [plant, setPlant] = useState();

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:4000/plants/${params.plantId}`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					navigate('/');
				}
			})
			.then((data) => setPlant(data))
			.catch((err) => console.log(err));
	}, [navigate, params.plantId]);

	return (
		<main className="px-5">
			<Navbar />

			<div className="mt-5">
				<PlantCard {...plant} />
			</div>
		</main>
	);
}

export default PlantDetails;
