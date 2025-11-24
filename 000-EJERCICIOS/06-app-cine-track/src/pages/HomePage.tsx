// import { fakeMovies } from '../data/fakeMovies';

import MovieList from '../components/MovieList';
import type { Movie } from '../config/types';
import { getMovies } from '../services/getMovies';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies(`popular`).then((movies) => setPopularMovies(movies));
    getMovies(`upcoming`).then((movies) => setUpcomingMovies(movies));
    getMovies(`top_rated`).then((movies) => setTopMovies(movies));
  }, [])
  return (
    <>
      <MovieList movies={popularMovies} sectionTitle="Popular movies" />
      <MovieList movies={upcomingMovies} sectionTitle="Upcoming movies" />
      <MovieList movies={topMovies} sectionTitle="Top Rated movies" />
    </>
  );
}
