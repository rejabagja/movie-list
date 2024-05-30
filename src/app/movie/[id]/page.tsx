import type { Metadata } from "next";
import {fetchMovieById} from '../../lib/fetchmovie';

export const metadata: Metadata = {
    title: "Detail Movie",
    description: "A simple web movies gallery",
  };

async function DetailPage({params}: {params: {id: string}}) {
    const movie = await fetchMovieById(params.id); 
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            <div className="relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">{movie.title}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-96 object-cover"
                />
                <div className="p-6">
                    <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
                    <p className="text-gray-700 mb-4">{movie.release_date}</p>
                    <p className="text-gray-700 mb-4">{movie.overview}</p>
                    <div className="flex items-center mb-4">
                    <span className="text-yellow-500 text-xl mr-2">★</span>
                    <span className="text-gray-900 text-xl">{movie.vote_average}</span>
                    </div>
                    <div className="flex flex-wrap mb-4">
                    {movie.genres.map((genre: any) => (
                        <span key={genre.id} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                        {genre.name}
                        </span>
                    ))}
                    </div>
                    <a href="/" className="text-blue-500 hover:underline">Back to home</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;