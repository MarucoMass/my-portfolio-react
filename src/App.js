import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Particle from './components/particles/Particle';
import AnimatedRoutes from './components/routes/AnimatedRoutes';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Sidebar />
				<main>
					<Particle />
					<AnimatedRoutes />
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
