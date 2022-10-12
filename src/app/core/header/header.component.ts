import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  formGroup!: FormGroup

  unsubscribe = new Subject<void>()

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.buildForm()
    this.captureValueInput()
  }

  private buildForm() {
    this.formGroup = this.fb.group({
      search: ''
    })
  }

  private captureValueInput() {
    this.formGroup.valueChanges
    .pipe(takeUntil(this.unsubscribe), debounce(() => timer(600)))
    .subscribe(valor => {
      const {search: search} = valor
      this.router.navigate(['/search'], {queryParams:{query: search}})
    })
  }
}
