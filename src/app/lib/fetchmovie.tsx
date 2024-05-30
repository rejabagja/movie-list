const API_KEY = 'd20246a8dd3415c029c024c5fb737d50';
const BASE_URL = 'https://api.themoviedb.org/3';

interface Movie {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
}

interface FetchMoviesResponse {
  popularMovies: Movie[];
  upcomingMovies: Movie[];
}

export async function fetchMovies(): Promise<FetchMoviesResponse> {
  const [popularRes, upcomingRes] = await Promise.all([
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`),
    fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`)
  ]);

  const [popularMovies, upcomingMovies] = await Promise.all([
    popularRes.json(),
    upcomingRes.json()
  ]);

  return {
    popularMovies: popularMovies.results,
    upcomingMovies: upcomingMovies.results
  };
}
export async function fetchMovieById(id: string) {
    const dataMovie = await (await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)).json();

    return dataMovie;
}