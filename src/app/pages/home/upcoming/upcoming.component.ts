import { Component, OnInit } from '@angular/core';
import { Subject, finalize, takeUntil } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';
import { IconList } from '../../../shared/interfaces/comum';
import { Movie } from '../../../shared/interfaces/movie';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
/* Lista */
movieList: Movie[] = []

iconsList: IconList = {
  favoriteIcon: 'heart',
  interestIcon: 'bookmark'
}

/* flags */
loading = false

/* paginacao */
first = 0
rows: number = 20;
totalItens: number = 20

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
     this.movieList = []
     this.getData()
   })
 }

ngOnDestroy(): void {
  this.unsubscribe.next()
  this.unsubscribe.complete()
}

public handleNextOrPrevious(event: any) {
  this.loading = true
  this.movieService.getComingSoon(this.language, event.page + 1)
    .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
    .subscribe((lista) => {
      this.movieList = lista?.results
      scrollTo({
        top: 0,
      })
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
  this.movieService.getComingSoon(this.language)
    .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
    .subscribe((lista) => {
      this.movieList = lista?.results
      this.totalItens = lista.total_results
    })
}
}
