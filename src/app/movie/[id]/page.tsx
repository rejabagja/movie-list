import type { Metadata } from 'next';
import { formatDate } from '../../lib/utils';
import { fetchMovieById } from '../../lib/fetchmovie';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Detail Movie',
  description: 'A simple web movies gallery',
};

type DetailPageProps = {
  params: {
    id: string;
  };
};

async function DetailPage({ params }: DetailPageProps) {
  const movie = await fetchMovieById(params.id);
  return (
    <div className="bg-gradient-to-br from-white via-slate-100 to-purple-100 text-gray-900 min-h-screen">
      <div className="relative h-96 shadow-md shadow-purple-200">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{movie.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              fill
              priority
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
            <p className="text-gray-700 mb-4 text-sm">
              {formatDate(movie.release_date)}
            </p>
            <p className="text-gray-700 text-justify mb-4 indent-3">
              {movie.overview}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-xl mr-2">★</span>
              <span className="text-gray-900 text-xl">
                {movie.vote_average}
              </span>
            </div>
            <div className="flex flex-wrap mb-4">
              {movie.genres.map((genre: any) => (
                <span
                  key={genre.id}
                  className="bg-gray-200 text-purple-600 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <a
              href="/"
              className="text-blue-500 inline-block hover:underline active:text-purple-500 mt-3"
            >
              &laquo; Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
