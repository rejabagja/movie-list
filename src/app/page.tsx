import MovieSection from './components/MovieSection';
import { fetchMovies } from './lib/fetchmovie';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

const  Home = async () => {
    const { popularMovies, upcomingMovies } = await fetchMovies();
    return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">

        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Movie Gallery</h1>
        <MovieSection title="Popular Movies" movies={popularMovies} />
        <MovieSection title="Upcoming Movies" movies={upcomingMovies} />
        </div>
    </div>
    );
};

export default Home;