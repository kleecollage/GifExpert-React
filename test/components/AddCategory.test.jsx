import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Prueba en el componente <AddCategory />', () => {
	const inputVal = 'pochita';
	// ************************************************************* //
	test('debe cambiar el valor de la caja de texto', () => {
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole('textbox');

		fireEvent.input(input, { target: { value: inputVal } });

		expect(input.value).toBe('pochita');
		//screen.debug();
	});
	// ************************************************************* //
	test('debe de llamar onNewCategory() si el input tiene un valor', () => {
		const onNewCategory = jest.fn(); // mock de jest para funciones
		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputVal } });
		fireEvent.submit(form);
		// screen.debug();
		expect(input.value).toBe(''); // recibimos una cadena vacia porque submit borra la cadena
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputVal);
	});
    // ************************************************************* //
    test('no debe llamar onNewCAtegory si el input esta vacio', () => { 
        const onNewCategory = jest.fn(); // mock de jest para funciones
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');		
		fireEvent.submit(form);
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
     })
})