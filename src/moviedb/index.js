import uuid from "uuid";
import {API_KEY} from "../auth";

export const SERVER_URL = 'https://api.themoviedb.org/3';
export const SERVER_IMAGE_URL = 'https://image.tmdb.org/t/p';

export const GET_MOVIE_NOW_PLAYING = '/movie/now_playing';
export const GET_MOVIE_POPULAR = '/movie/popular';
export const GET_MOVIE_TOP_RATED = '/movie/top_rated';

export const getImageURL = (path, size = 500) => {
    return `${SERVER_IMAGE_URL}/w${size}${path}`;
};

export default async (path, lang = 'en') => {
    return fetch(`${SERVER_URL}${path}?api_key=${API_KEY}&language=${lang}`)
        .then((resp) => resp.json())
        .then((data) => data.results.map((item) => ({
            key: uuid(),
            title: item.title,
            votes: item.vote_average,
            overview: item.overview,
            release: item.release_date,
            backdrop: {
                uri: getImageURL(item.backdrop_path)
            },
            poster: {
                uri: getImageURL(item.poster_path, 300),
                width: 240,
                height: 357
            },
        })));
};