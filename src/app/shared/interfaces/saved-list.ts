import { Movie } from './movie';
export interface SavedList {
  created_by: string
  description: string
  favorite_count: number
  id: string
  iso_639_1: string
  item_count: number
  items: Movie[]
}
