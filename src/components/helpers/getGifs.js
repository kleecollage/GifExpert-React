export const getGifs = async(category) => {
    const apiKey = 'UQQmYe2ARypkNt8WEMxX0d2fHqZs8Wt4';
    const apiKey2 = 'U59Q19zXVgotIAVL8XCTbEPQn98X0qg1';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey2}&q=${category}&limit=3`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}