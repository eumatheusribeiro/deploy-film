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
  ) {}

  ngOnInit(): void {
  }

  public changeLanguage(idioma: string) {
   this.languageService.changeTheLanguage(idioma)
  }
}
