import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  public value = ''
  private _setTimeout: any


  constructor(
    private router: Router
  ) {}

  ngOnDestroy(): void {
   clearTimeout(this._setTimeout)
  }

  public searchTitle() {
      this._setTimeout = setTimeout(() =>{
        this.router.navigate(['/search'], {queryParams:{query: this.value}})
      }, 500)
  }
}
