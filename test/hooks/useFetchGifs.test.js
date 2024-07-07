import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Prueba en el customHook useFetchGifs', () => {
	// ********************************************************************* //
	test('debe de regresar el estado inicial', () => {
		// const { images, isLoading} = useFetchGifs(); esto es lo que queremos pero no funciona asi
		const { result } = renderHook(() => useFetchGifs('jujutsu-kaisen'));
		const { images, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy;
	});
    // ********************************************************************* //
    test('debe retornar un arreglo de imagenes e isLoading en false', async() => { 
        const { result } = renderHook(() => useFetchGifs('jujutsu-kaisen'));
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        console.log(result.current)
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy;
     })
})