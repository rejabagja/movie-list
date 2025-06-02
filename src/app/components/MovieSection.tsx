import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            identifier={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
