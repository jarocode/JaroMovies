import url from "../config.js/url"

const searchMovie = async(query) => {
    const data = await fetch(`${url.BASE_URL}/search/movie?api_key=d46aebe23c39b722a29855029bd966d1&language=en-US&query=${query}&page=1&include_adult=false`);
    const dataResult = await data.json();
    return dataResult;
};

export default searchMovie;