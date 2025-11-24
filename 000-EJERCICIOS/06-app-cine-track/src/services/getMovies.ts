import type { TMDBMovieResponse } from "../config/types";

export async function getMovies(endpoint: string) {
    const TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE0ODQ2Njc0Mzk0ZWVmMzVkNzI1OWFiYTZiYWQ0MCIsIm5iZiI6MTc1MDMzMjEyNC4yMjMsInN1YiI6IjY4NTNmMmRjMjE5OWQ2YWZiOWQ4MThkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4tYtnCyqgKWM57oaSuCtuDtds5W8aBdUgy4dsJLyJHc`;

    const BASE_URL = 'https://api.themoviedb.org/3/movie/';

    try {
        const response = await fetch(BASE_URL + endpoint, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`,
            }
        });
        const data = (await response.json()) as TMDBMovieResponse;
        // console.log(data);
        return data.results;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        return [];

    }
}