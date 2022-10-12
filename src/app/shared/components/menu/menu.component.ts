import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';
import { Translate } from '../../interfaces/language';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  darkMode = false
  darkThemeActive = false

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

  language =''


  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    if(localStorage.getItem('theme') == 'dark') {
      this.darkThemeActive = true
      this.darkMode = true
      document.documentElement.classList.add('dark')
    }
  }

  ngOnInit(): void {
  }

  public changeLanguage(idioma: string) {
   this.languageService.changeTheLanguage(idioma)
  }

  public changeTheme() {
    this.darkMode = !this.darkMode
    if(this.darkMode) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else{
      localStorage.removeItem('theme')
      document.documentElement.classList.remove('dark')
    }
  }

  private fillOptionsLanguage() {
    this.translate.get('label.idiomas').subscribe((traducao) => {
      this.optionsLanguage.forEach((result) => {
        result.label = traducao[result.value]
      })
    })
  }
}
