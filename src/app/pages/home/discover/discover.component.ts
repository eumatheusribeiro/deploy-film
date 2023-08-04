import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { InfiniteScrollService } from 'src/app/shared/directives/infinite-scroll/infinite-scroll.service';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';
import { IconList } from '../../../shared/interfaces/comum';
import { Movie } from '../../../shared/interfaces/movie';
import { LanguageService } from './../../../core/services/language.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  /* Lista */
  skeletonList = Array(10)
  movieList: Movie[] = []

  iconsList: IconList = {
    favoriteIcon: 'heart',
    interestIcon: 'bookmark'
  }
  /* flags */
  loading = false
  private _page = 1

  backgroundImage = 'https://image.tmdb.org/t/p/original'

  /* idioma */
  language!: string

  /* unsubscribe */
  unsubscribe = new Subject<void>()

  highlight: Movie

  constructor(
    private _movieService: TmdbApiService,
    private _languageService: LanguageService,
    private _router: Router,
    private _infiniteScrollService: InfiniteScrollService
  ) { }

  ngOnInit(): void {
    this._infiniteScrollService.activeInfiniteScroll(true)
    this._languageService.currentValue$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((value) => {
        this.language = value
        this.movieList = []
        this._getData()
      })
    this._nextPage()
  }

  ngOnDestroy(): void {
    this.unsubscribe.next()
    this.unsubscribe.complete()
    this._infiniteScrollService.activeInfiniteScroll(false)
  }

  private _nextPage() {
    this._infiniteScrollService.getScrollDown().subscribe((nextPage: boolean) => {
      if (nextPage) {
        this._page++
        this._getData()
      }
    })
  }

  public save(item: any) {
    const infoItem = {
      media_id: item.itemId
    }
    this._movieService.saveItemByID(item.listId, infoItem)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this._getData()
      })
  }

  private _getData() {
    this.loading = true
    this._movieService.discoverMovies(this.language, this._page)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((lista) => {
        this.movieList = [...this.movieList, ...lista?.results]
        this.loading = false
        if (this._page == lista.total_pages) this._infiniteScrollService.activeInfiniteScroll(false)

        this.highlight = this.movieList[Math.floor((Math.random() * 10))]
        this.backgroundImage += this.highlight.backdrop_path ?? ''
      })
  }

  public getDetails(idNumber: number) {
    this._router.navigate(['/detalhes', idNumber])
  }

}
