import { createAsyncThunk } from "@reduxjs/toolkit";

// API AND API_KEY
const BaseUrl = 'https://imdb-api.com/en/API/MostPopularMovies/k_nnik1u4y';

// Actions
const FetchDetails = 'MostPopularMovies/FetchDetails';

// Reducer
const initialState = [];

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FetchDetails:
            return state.map((movie) => {
                if (movie.movie_id !== action.payload) return movie;
                return{...movie};
            });
            default:
                return state;
    }
}

// Action Creators
export const getMovies = createAsyncThunk(
    FetchDetails,
    async (_, { dispatch }) => {
        const response = await fetch(BaseUrl);
        const objectData = await response.json();
        const newObj = objectData.map((movie) => ({
            movie_id: movie.movie_id,
            movie_title: movie.movie_title,
            movie_fullTitle: movie.fullTitle,
            movie_year: movie.year,
            movie_image: movie.image,
            movie_crew: movie.crew,
            movie_imDbRating: movie.imDbRating,
            movie_imDbRatingCount: movie.imDbRatingCount,
            movie_rankUpDown: movie.rankUpDown
        }));
        dispatch({
            type: FetchDetails,
            payload:newObj,
        });
    },
);