const API_KEY = "0e08063b06b207be3bbe3d2b8b353963";

export const categories = [
    {
        name:'upcoming',
        title:'Em Breve',
        path:`/movie/upcoming?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name:'popular',
        title:'Populares',
        path:`/movie/popular?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name:'topRated',
        title:'Mais Votados',
        path:`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name:'now_playing',
        title:'Por que assistiu Breaking Bad',
        path:`/movie/now_playing?api_key=${API_KEY}&language=pt-BR`,
    },
];

export const getMovies = async (path) => {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();       
    
};
export const getMovieVideo = async (id) => {
    let urlVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`;
    const response = await fetch(urlVideo);
    return await response.json();
};