import { API_KEY } from './constants/constants'

export const ComedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const ActionMovies = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const trending = `trending/all/week?api_key=${API_KEY}&language=en-US`
export const HorrorMovies = `discover/movie?api_key=${API_KEY}&with_genres=27`