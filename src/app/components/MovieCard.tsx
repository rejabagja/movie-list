import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../lib/utils';

interface MovieCardProps {
  identifier: string;
  title: string;
  releaseDate: string;
  posterPath: string;
}

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard: React.FC<MovieCardProps> = ({
  identifier,
  title,
  releaseDate,
  posterPath,
}) => {
  return (
    <Link href={`/movie/${identifier}`}>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:border-purple-500 hover:border-2"
        key={identifier}
      >
        <div className="relative h-64">
          <Image
            src={`${IMG_URL}${posterPath}`}
            alt={title}
            fill
            sizes="(min-width: 0px) 100vw"
            priority
            className="w-full h-64 object-cover"
          />
          <div className="absolute bg-black inset-0 opacity-0 hover:opacity-30"></div>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-700">{formatDate(releaseDate)}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
