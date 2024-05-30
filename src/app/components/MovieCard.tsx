import React from 'react';
import Link from '../../../node_modules/next/link';

interface MovieCardProps {
    identifier: string;
    title: string;
    releaseDate: string;
    posterPath: string;
}

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard: React.FC<MovieCardProps> = ({ identifier, title, releaseDate, posterPath }) => {
  return (
    <Link href={`/movie/${identifier}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105" key={identifier}>
            <img src={`${IMG_URL}${posterPath}`} alt={title} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-700 mt-2">{releaseDate}</p>
            </div>
        </div>
    </Link>
  );
};

export default MovieCard;