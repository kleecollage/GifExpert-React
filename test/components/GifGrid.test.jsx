import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en el componente <GifGrid/>', () => {
	const category = 'Jujutsu Kaisen';
	// ********************************************************** //
	test('debe de mostrar el loadig inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />);
		// screen.debug();
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
	});
	// ********************************************************** //
    test('debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => { 
        const gifs = [
            {
            id: 'abc',
            title: 'pochita',
            url: 'https://www.test-gifs/pochita.jpg'
            },
            {
            id: '123',
            title: 'itadori',
            url: 'https://www.test-gifs/itadori.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2)
     })
})