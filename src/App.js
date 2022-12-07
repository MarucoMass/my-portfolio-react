import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import Particle from './components/particles/Particle';
import AnimatedRoutes from './components/routes/AnimatedRoutes';
function App() {
  return (
    <div className='main__container'>
    <BrowserRouter>
      <Sidebar />
      <main>
       <Particle/>
       <AnimatedRoutes />
      </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
