import MovieSection from './components/MovieSection';
import { fetchMovies } from './lib/fetchmovie';

const Home = async () => {
  const { popularMovies, upcomingMovies } = await fetchMovies();
  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-purple-200 text-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Movie Gallery</h1>
        <MovieSection title="Popular Movies 🔥" movies={popularMovies} />
        <MovieSection title="Upcoming Movies" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default Home;
