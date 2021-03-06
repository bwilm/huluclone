const API_KEY = '67a4314cce1817014281029676cd6a54';

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysterMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFiMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWesternMovies:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnime:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};
