// import { data } from 'react-router';
import type { Movie } from '../config/types';
import MovieItem from './MovieItem';

interface Props {
  movies: Movie[];
  sectionTitle?: string;
}

export default function MovieList(props: Props) {
  const { movies, sectionTitle } = props;

  return (
    <section>
      {sectionTitle && (
        <h2 className="text-xl font-bold mb-4">{sectionTitle}</h2>
      )}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
