import { Component, OnInit } from '@angular/core';
import { finalize, Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';
import { Pagination } from '../../../shared/components/paginator/interfaces/pagination';
import { ListIdEnum } from '../../../shared/enums/list-id-enum';
import { Movie } from '../../../shared/interfaces/movie';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  title = ListIdEnum.INTERESSES
  interesteList!: Movie[]

  /* flags */
  loading = false

  pagination: Pagination = {
    numberOfPages:1,
    page:1
  }

  /* idioma */
  language!: string

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


  public remove(idNumber: number) {
    const favoritoID = {
      media_id: idNumber
    }
    this.movieService.removeItemByID(this.title , favoritoID)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.getData()
      })
  }

  private getData() {
    this.loading = true
    this.movieService.getSaveList(this.title, this.language)
      .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
      .subscribe((lista) => {
        this.interesteList = lista?.items
      })
  }

}
