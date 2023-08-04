import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfiniteScroll } from '../../interfaces/infinite-scroll';
import { InfiniteScrollService } from './infinite-scroll.service';

@Directive({
  selector: '[infiniteScroll]'
})
export class InfiniteScrollDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() public scrollEventName = InfiniteScroll.SCROLL
  @Input() public pointOfUpdate = 0.2
  private _listener: any
  private _emittedscrollUpEvent = true
  private _emittedscrollDownEvent = false
  private _subscription: Subscription
  private _activeScrollEmitter: boolean

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, private _infiniteScrollService: InfiniteScrollService) { }

  ngOnInit(): void {
    this._infiniteScrollService.getActiveInfiniteScroll().subscribe((active: boolean) => {
      this._activeScrollEmitter = active
    })
  }

  ngAfterViewInit() {
    this._listener = this._renderer.listen(this._elementRef.nativeElement, this.scrollEventName, (event: Event) => {
      if (this._activeScrollEmitter) this.getYPosition(event.target)
    });
  }

  getYPosition(target: any) {
    const tableViewHeight = target.offsetHeight
    const tableScrollHeight = target.scrollHeight
    const scrollLocation = target.scrollTop

    const limitScrollUp = tableViewHeight * this.pointOfUpdate

    const limitScrollDown =
      tableScrollHeight - tableViewHeight - tableViewHeight * this.pointOfUpdate

    if (scrollLocation < limitScrollUp) {
      if (this._emittedscrollUpEvent) return
      this._emittedscrollUpEvent = true
      this._infiniteScrollService.updateScrollUp(this._emittedscrollUpEvent)
    } else {
      if (this._emittedscrollUpEvent) {
        this._emittedscrollUpEvent = false
        this._infiniteScrollService.updateScrollUp(this._emittedscrollUpEvent)
      }
    }

    if (scrollLocation > limitScrollDown) {
      if (this._emittedscrollDownEvent) return
      this._emittedscrollDownEvent = true
      this._infiniteScrollService.updateScrollDown(this._emittedscrollDownEvent)
    } else {
      if (!this._emittedscrollDownEvent) return
      this._emittedscrollDownEvent = false
      this._infiniteScrollService.updateScrollDown(this._emittedscrollDownEvent)
    }
  }
  ngOnDestroy(): void {
    this._listener();
    this._subscription.unsubscribe()
  }
}
