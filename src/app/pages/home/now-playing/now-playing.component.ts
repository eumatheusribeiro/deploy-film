import { Component, OnInit } from '@angular/core';
import { finalize, Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';
import { Pagination } from '../../../shared/components/paginator/interfaces/pagination';
import { IconList } from '../../../shared/interfaces/comum';
import { Movie } from '../../../shared/interfaces/movie';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
/* Lista */
movieList: Movie[] = []

iconsList: IconList = {
  favoriteIcon: 'heart',
  interestIcon: 'bookmark'
}

/* flags */
loading = false

/* paginacao */
pagination: Pagination = {
  numberOfPages:1,
  page:1
}

/* idioma */
language!: string

/* unsubscribe */
unsubscribe = new Subject<void>()

constructor(
  private movieService: TmdbApiService,
  private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageService.currentValue$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((value) => {
     this.language = value
     this.getData()
   })
  }

ngOnDestroy(): void {
  this.unsubscribe.next()
  this.unsubscribe.complete()
}

public handleNextOrPrevious(nextOrPrevious: number) {
  this.loading = true
  this.movieService.getOnPoster(this.language, nextOrPrevious)
    .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
    .subscribe((lista) => {
      this.movieList = lista?.results
      this.pagination = {
        numberOfPages: lista?.total_pages,
        page: lista?.page
      }
    })
}

public save(item: any) {
   const infoItem = {
     media_id: item.itemId
   }
   this.movieService.saveItemByID(item.listId, infoItem)
     .pipe(takeUntil(this.unsubscribe))
     .subscribe(() => {
       this.getData()
     })
 }

private getData() {
  this.loading = true
  this.movieService.getOnPoster(this.language)
    .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
    .subscribe((lista) => {
      this.movieList = lista?.results
      this.pagination = {
        numberOfPages: lista?.total_pages,
        page: lista?.page
      }
    })
}

}
