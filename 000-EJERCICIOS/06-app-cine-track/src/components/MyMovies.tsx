import { fakeMovies } from '../data/fakeMovies';

import MovieList from '../components/MovieList';

export default function MyMovies() {
    return (
        <>
            <MovieList movies={fakeMovies} sectionTitle="Top movies" />
            {/* <h1>My list of Movies</h1>
            <ul>
                <li>Movie 1</li>
                <li>Movie 2</li>
                <li>Movie 3</li>
                <li>Movie 4</li>
            </ul> */}
        </>
    );
}