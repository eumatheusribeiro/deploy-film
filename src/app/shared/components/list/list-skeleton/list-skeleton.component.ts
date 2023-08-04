import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-skeleton',
  templateUrl: './list-skeleton.component.html',
  styleUrls: ['./list-skeleton.component.scss']
})
export class ListSkeletonComponent implements OnInit {
  @Input() skeletonSize: number

  get _skeletonList(): Array<any> {
    return Array(this.skeletonSize)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
