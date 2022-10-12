import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pagination } from './interfaces/pagination';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {
  @Input() pagination!: Pagination
  @Output() handleNextOrPrevious: EventEmitter<any> = new EventEmitter()
  disabledPrevious = false
  disabledNext = false

   constructor() { }
   ngOnChanges(changes: SimpleChanges): void {
     this.pagination.page <= 1 ? this.disabledPrevious = true : this.disabledPrevious = false
     this.pagination.page >= this.pagination.numberOfPages ? this.disabledNext = true : this. disabledNext = false
   }

   public changePage(nextOrPrevious: string) {
     if(this.pagination?.numberOfPages > 0 && !this.disabledNext) {
       nextOrPrevious == 'next' ? this.pagination.page+= 1 : this.pagination.page-= 1
       this.handleNextOrPrevious.next(this.pagination.page)
     }
   }
}
