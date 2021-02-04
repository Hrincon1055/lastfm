import { BASE_PATH, API_KEY, FORMAT_JSON } from "../utils/constants";

export async function getArtistApi() {
  try {
    const method = "?method=geo.gettopartists";
    const country = "&country=spain&api_key=";
    const url = `${BASE_PATH}${method}${country}${API_KEY}${FORMAT_JSON}&limit=20`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
