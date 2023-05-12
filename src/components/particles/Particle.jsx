import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Particle() {
	const particlesInit = async engine => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	};

	const particlesLoaded = async container => {
		console.log(container);
	};

	return (
		<Particles
			className='particle'
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
				},
				particles: {
					links: {
						color: '#70b3ff',
						distance: 90,
						enable: true,
						opacity: .65,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						directions: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: true,
						speed: 2,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: .5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}

export default Particle;
