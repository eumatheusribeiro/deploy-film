import { Component, Input, OnInit } from '@angular/core';
import { VideoInjectorService } from '../../../core/services/video-injector.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() videoId!: string

  constructor(
    private videoInjector: VideoInjectorService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.videoInjector.closeComponent()
  }

}
