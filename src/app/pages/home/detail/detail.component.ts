import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, finalize, takeUntil } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';
import { VideoInjectorService } from '../../../core/services/video-injector.service';
import { ListIdEnum } from '../../../shared/enums/list-id-enum';
import { NumberFormatterEnum } from '../../../shared/enums/number-formatter-enum';
import { IconList } from '../../../shared/interfaces/comum';
import { Movie } from '../../../shared/interfaces/movie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  movie!: Movie
  loading= false
  typeFormater = NumberFormatterEnum
  backgroundImage = 'https://image.tmdb.org/t/p/original'
  posterImg = ''
  stars = Array(5)
  completeStars = 0
  videoId = ''

  iconsList: IconList = {
    favoriteIcon: 'heart',
    interestIcon: 'bookmark'
  }

  /* idioma */
  language!: string

  /* unsubscribe */
  unsubscribe = new Subject<void>()

  @ViewChild('video', {read: ViewContainerRef}) container!: ViewContainerRef

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: TmdbApiService,
    private videoInjector: VideoInjectorService,
    private viewContainerRef: ViewContainerRef,
    private languageService: LanguageService,
    private router: Router
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

  private getData(){
    this.loading = true
    const filmeId = this.activatedRoute.snapshot.params['filmeId']
    this.movieService.getMovieByID(filmeId, this.language)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({next:(dados) =>{
      this.movie = dados
      this.backgroundImage += dados.backdrop_path ?? ''
      this.posterImg = dados.poster_path ? 'https://image.tmdb.org/t/p/original' + dados.poster_path : ''
      this.completeStars = Math.trunc(dados.vote_average / 2)
      this.movieService.getVideoByID(dados.id, this.language)
      .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
      .subscribe((videos) => {
          const video = videos.results.filter((video) => video.type == 'Trailer')[0]?.['key']
          this.videoId = video
      })
    },
    error: (e) => {
      this.router.navigateByUrl('/not-found')
    }
    })
  }

  public saveFavorite(idNumber: number) {
    const favoritoID = {
      media_id: idNumber
    }
    this.movieService.saveItemByID(ListIdEnum.FAVORITOS, favoritoID)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {})
  }

  public saveInterest(idNumber: number) {
    const interesseID = {
      media_id: idNumber
    }
    this.movieService.saveItemByID(ListIdEnum.INTERESSES, interesseID)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {})

  }

  public watchTrailer() {
    this.videoInjector.openVideo(this.viewContainerRef, this.videoId)
    this.videoInjector.closeComponent$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.viewContainerRef.clear()
    })
  }

  goBack() {
    window.history.go(-1)
  }
}
