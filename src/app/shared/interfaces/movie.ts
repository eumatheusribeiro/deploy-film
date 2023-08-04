import { LanguageApi } from './language';
export interface MoviePageable {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Movie {
  adult:boolean
  backdrop_path: string
  genre_ids: number[]
  genres: Genre[] | [],
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  name: string
  video: boolean
  vote_average: number
  vote_count: number,
  runtime: number,
  tagline: string,
  spoken_languages: LanguageApi
  production_countries: ProductionCountry[]
  production_companies: ProductionCompany[]
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
  }
