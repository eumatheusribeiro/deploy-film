import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { VideoComponent } from '../../shared/components/video/video.component';

@Injectable({
  providedIn: 'root'
})
export class VideoInjectorService {
  private closeComponentSubject = new Subject<void>()
  public closeComponent$ = this.closeComponentSubject.asObservable()

  constructor(private injector: Injector) {}

  public openVideo(viewContainerRef: ViewContainerRef, videoId: any): void {
    viewContainerRef.clear()
    const videoRef = viewContainerRef
    .createComponent(VideoComponent,{injector: this.injector})
    videoRef.setInput('videoId', videoId)
  }

  closeComponent() {
    this.closeComponentSubject.next()
  }
}
