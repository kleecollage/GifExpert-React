import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"


describe('Prueba del componente <GIfItem />', () => {
	const title = 'pochita';
	const url = 'https://www.test-pochita.com/pochita.jpg';
	// ***************************************************************************** //
	test('debe hacer match con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});
	// ***************************************************************************** //
	test('debe mostrar la imagen con el url y el alt indicado', () => {
		render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
	});
    // ***************************************************************************** //
    test('debe de mostrar el titulo del componente', () => { 
		render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy

     })
})