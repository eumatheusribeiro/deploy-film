import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfiniteScrollService {
  private _activeInfiniteScroll = new BehaviorSubject<boolean>(false)
  private _scrollUp = new BehaviorSubject<boolean>(true)
  private _scrollDown = new BehaviorSubject<boolean>(false)

  public activeInfiniteScroll(isActive: boolean): void {
    this._activeInfiniteScroll.next(isActive)
  }

  public getActiveInfiniteScroll(): Observable<boolean> {
    return this._activeInfiniteScroll.asObservable()
  }

  public updateScrollUp(dispare: boolean): void {
    this._scrollUp.next(dispare)
  }

  public getScrollUp(): Observable<boolean> {
    return this._scrollUp.asObservable()
  }

  public updateScrollDown(dispare: boolean): void {
    this._scrollDown.next(dispare)
  }

  public getScrollDown(): Observable<boolean> {
    return this._scrollDown.asObservable()
  }
}
