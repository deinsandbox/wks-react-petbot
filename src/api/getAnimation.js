const API_KEY = process.env.REACT_APP_GIPHY_KEY;
const DOMAIN = "https://api.giphy.com/v1/gifs/random";
const TAG = "alien";
const RATING = "g";

export const getAnimation = async () => {
  try {
    const apiUrl = `${DOMAIN}?api_key=${API_KEY}&tag=${TAG}&rating=${RATING}`;
    const response = await fetch(apiUrl);
    const { data, message } = await response.json();

    if (message) {
      return "";
    }

    const { url } = data.images.original;
    return url;
  } catch (error) {
    return "";
  }
};
