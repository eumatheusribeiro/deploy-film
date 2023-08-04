import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreName'
})
export class GenrePipe implements PipeTransform {

  transform(id: number): string {
    return getGenreName(id);
  }

}

export function getGenreName(id: number): string {
  const genres = JSON.parse(localStorage.getItem('genres') as any)?.genres

  return genres?.filter((genre: any) => genre.id == id)?.[0]?.name
}
