import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, finalize, takeUntil } from 'rxjs';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';
import { IconList } from '../../../shared/interfaces/comum';
import { Movie } from '../../../shared/interfaces/movie';
import { LanguageService } from './../../../core/services/language.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = ''
  list: Movie[] = []

  iconsList: IconList = {
    favoriteIcon: 'heart',
    interestIcon: 'bookmark'
  }

  /* paginacao */
  first = 0
  rows: number = 20;
  totalItens: number = 20

  /* flags */
  loading = false

  /* paginacao */
  pagination: any = {
    numberOfPages:1,
    page:1
  }

  /* idioma */
  language!: string

  unsubscribe = new Subject<void>()

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: TmdbApiService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageService.currentValue$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((value) => {
      this.language = value
      this.list = []
      this._getData()
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next()
    this.unsubscribe.complete()
  }

  public handleNextOrPrevious(event: any) {
    this.loading = true
    this.movieService.discoverMovies(this.language, event.page + 1)
      .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
      .subscribe((lista) => {
        this.list = lista?.results
        scrollTo({
          top: 0
        })
      })

     const lista: number[] = [0, 1]
  }

  public save(item: any) {
    const infoItem = {
      media_id: item.itemId
    }
    this.movieService.saveItemByID(item.listId, infoItem)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this._getData()
      })
  }

  private _getData() {
    this.loading = true
    this.activatedRoute.queryParams
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((parametros) => {
    this.search = parametros['query']

    this.movieService.searchByTitle(this.search, this.language)
    .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
    .subscribe((lista) => {
      this.list = lista?.results
      this.totalItens = lista.total_results
    })
    })
  }

}
