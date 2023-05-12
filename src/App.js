import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Particle from './components/particles/Particle';
import AnimatedRoutes from './components/routes/AnimatedRoutes';

function App() {
	return (
		
			<BrowserRouter>
				<main>
				<Sidebar />
					<Particle />
					<AnimatedRoutes />
				</main>
			</BrowserRouter>
		
	);
}

export default App;
