import { Component, OnInit } from '@angular/core';
import { Subject, finalize, takeUntil } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';
import { ListIdEnum } from '../../../shared/enums/list-id-enum';
import { Movie } from '../../../shared/interfaces/movie';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  title = ListIdEnum.FAVORITOS
  favoriteList: Movie[] = []

  /* flags */
  loading = false

  pagination: any = {
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
        this.favoriteList = lista?.items
      })
  }

}
