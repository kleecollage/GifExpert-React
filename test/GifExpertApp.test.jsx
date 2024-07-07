import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el componente <GifExpertApp/>', () => {
	// ****************************************************** //
  test('debe regresar si la categoria ya se encuentra en el array', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'Chainsaw Man' } });
    fireEvent.submit(form);
    // screen.debug();
    const categories = screen.getAllByRole('heading', { level: 3 });

    expect(categories.length).toBe(2);
    expect(categories[0].textContent).toBe('Chainsaw Man');
    expect(categories[1].textContent).toBe('Jujutsu Kaisen');
  });
  // ****************************************************** //
    test('debe regresar una nueva categoria cuando si se registra una nueva categoria en el input', () => {
			render(<GifExpertApp />);
			const input = screen.getByRole('textbox');
			const form = screen.getByRole('form');

			fireEvent.input(input, { target: { value: 'Testing' } });
			fireEvent.submit(form);
			// screen.debug();
			const categories = screen.getAllByRole('heading', { level: 3 });
			expect(categories.length).toBeGreaterThan(2);
			expect(categories[0].textContent).toBe('Testing');
			expect(categories[1].textContent).toBe('Chainsaw Man');
			expect(categories[2].textContent).toBe('Jujutsu Kaisen');
		});
})