import { render } from '@testing-library/react';
import App from '../App';

describe('test App component', () => {
	beforeEach(() => {
		render(<App />);
	});

	test('testing', () => {
		expect(true).toBe(true);
	});
});
