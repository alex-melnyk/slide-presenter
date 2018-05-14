import {API_KEY} from "../auth";
import moment from 'moment';

export const SERVER_URL = 'https://api.themoviedb.org/3';
export const SERVER_IMAGE_URL = 'https://image.tmdb.org/t/p';

export const GET_MOVIE_GET_DETAILS = '/movie/{ID}';
export const GET_MOVIE_NOW_PLAYING = '/movie/now_playing';
export const GET_MOVIE_POPULAR = '/movie/popular';
export const GET_MOVIE_TOP_RATED = '/movie/top_rated';

export const getImageURL = (path, size = 500) => {
    return `${SERVER_IMAGE_URL}/w${size}${path}`;
};

export function requestNowPlaying(lang = 'en') {
    return TMDRequest(GET_MOVIE_NOW_PLAYING, lang)
        .then(({results}) => Promise.all(results.map(async (movie) => {
            const details = await TMDRequest(GET_MOVIE_GET_DETAILS.replace('{ID}', movie.id));

            return {
                id: details.id,
                title: details.title,
                overview: details.overview,
                runtime: details.runtime,
                // release: details.release_date,//2018-04-25
                release: moment(details.release_date, "YYYY-MM-DD").format('MMM DD.YYYY'),
                voteAverage: details.vote_average,
                voteCount: details.vote_count,
                genres: details.genres,
                backdrop: {
                    uri: getImageURL(details.backdrop_path)
                },
                poster: {
                    uri: getImageURL(details.poster_path, 300),
                    width: 240,
                    height: 357
                }
            };
        })));
}

async function TMDRequest(path, lang = 'en') {
    return fetch(`${SERVER_URL}${path}?api_key=${API_KEY}&language=${lang}`)
        .then((resp) => resp.json());
}