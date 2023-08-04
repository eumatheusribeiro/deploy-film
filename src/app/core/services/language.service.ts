import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Translate } from '../../shared/interfaces/language';
import { TmdbApiService } from './tmdb-api.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentValueSubject = new BehaviorSubject<string>('pt-br')

  public currentValue$ =  this.currentValueSubject.asObservable()

  optionsLanguage: Translate[] = [
    {
      label: 'Português/BRA',
      value: 'pt-br'
    },
    {
      label: 'Inglês/EUA',
      value: 'en-us'
    },
    {
      label: 'Espanhol/ESP',
      value: 'es-es'
    }
  ]

  constructor(
    private translate: TranslateService,
    private _tmdbApiService: TmdbApiService
  ) { }

  public setLanguage() {
    this.translate.addLangs(['pt-br', 'en-us', 'es-es']);
    this.translate.setDefaultLang('pt-br');
    const navigatorLanguage = navigator.language.toLocaleLowerCase()
    if(navigatorLanguage) {
      this.translate.use(navigatorLanguage)
      this.currentValueSubject.next(navigatorLanguage)
    }
    const language = localStorage.getItem('language')
    if(language) {
      this.translate.use(language)
      this.currentValueSubject.next(language)
    }
    this.fillOptionsLanguage()
  }

  public fillOptionsLanguage() {
    this.translate.get('label.idiomas').subscribe((traducao) => {
      this.optionsLanguage.forEach((result) => {
        result.label = traducao[result.value]
      })
    })
  }

  public changeTheLanguage(idioma: string) {
    this.translate.use(idioma)
    localStorage.setItem('language', idioma)
    this.fillOptionsLanguage()
    this.currentValueSubject.next(idioma)
    this._changeTheGenresList()
  }

  private _changeTheGenresList() {
    const language = localStorage.getItem('language') as string
    this._tmdbApiService.getGenreList(language).subscribe((list) => {
      localStorage.setItem('genres', JSON.stringify(list))
    })
  }
}
