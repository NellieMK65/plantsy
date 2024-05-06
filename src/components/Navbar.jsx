import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<NavLink to={'/'} className="p-3 text-lg">
				Home
			</NavLink>
			<NavLink to={'/about'}>About</NavLink>
		</nav>
	);
}

export default Navbar;
