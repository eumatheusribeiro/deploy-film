import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subject, takeUntil } from 'rxjs';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';
import { Pagination } from '../../../shared/components/paginator/interfaces/pagination';
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

  /* flags */
  loading = false

  /* paginacao */
  pagination: Pagination = {
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
      this.getaData()
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next()
    this.unsubscribe.complete()
  }

  public handleNextOrPrevious(nextOrPrevious: number) {
    this.loading = true
    this.movieService.discoverMovies(this.language, nextOrPrevious)
      .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
      .subscribe((lista) => {
        this.list = lista?.results
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
        this.getaData()
      })
  }

  private getaData() {
    this.loading = true
    this.activatedRoute.queryParams
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((parametros) => {
    this.search = parametros['query']

    this.movieService.searchByTitle(this.search, this.language)
    .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
    .subscribe((lista) => {
      this.list = lista?.results
    })
    })
  }

}
