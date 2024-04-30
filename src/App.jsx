import AddPlant from './components/AddPlant';
import Logo from './components/Logo';
import PlantList from './components/PlantList';
import SearchPlant from './components/SearchPlant';

// declarative
function App() {
	return (
		<main className="px-10">
			<Logo />
			<AddPlant />
			<SearchPlant />
			<PlantList />
		</main>
	);
}

export default App;
