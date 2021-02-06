import { BASE_PATH, API_KEY, FORMAT_JSON } from "../utils/constants";
// Funcion para obtener todos los artistas
export async function getArtistApi(page) {
  try {
    const method = "?method=geo.gettopartists";
    const country = "&country=spain&api_key=";

    const url = `${BASE_PATH}${method}${country}${API_KEY}${FORMAT_JSON}&limit=5&page=${page}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
// Funcion para buscar artistas por nombre
export async function getArtistNameApi(search) {
  try {
    const method = "?method=geo.gettopartists";
    const country = "&country=spain&api_key=";
    const url = `${BASE_PATH}${method}${country}${API_KEY}${FORMAT_JSON}`;
    const response = await fetch(url);
    const result = await response.json();
    const resultArtisits = result.topartists.artist.filter((artists) =>
      artists.name.toLowerCase().includes(search.toLowerCase())
    );
    return resultArtisits;
  } catch (error) {
    console.log(error);
    return null;
  }
}
