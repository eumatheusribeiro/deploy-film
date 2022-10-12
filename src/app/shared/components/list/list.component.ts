import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ListIdEnum } from '../../enums/list-id-enum';
import { IconList } from '../../interfaces/comum';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: Movie[] = []
  @Input() icons!: IconList
  @Input() displayButtonRemove = false
  @Output() saveItem: EventEmitter<any> = new EventEmitter()
  @Output() removeId: EventEmitter<number> = new EventEmitter()

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getDetails(idNumber: number) {
    this.router.navigate(['/detalhes', idNumber])
  }

  public saveFavorite(idNumber: number) {
    const saveAsFavorite = {
      itemId: idNumber,
      listId: ListIdEnum.FAVORITOS
    }
    this.saveItem.emit(saveAsFavorite)
  }

  public saveInterest(idNumber: number) {
    const saveAsInterest = {
      itemId: idNumber,
      listId: ListIdEnum.INTERESSES
    }
    this.saveItem.emit(saveAsInterest)
  }

  public removeItem(idNumber: number) {
    this.removeId.emit(idNumber)
  }
}
