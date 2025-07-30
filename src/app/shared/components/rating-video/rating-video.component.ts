import { Component, input, Inject, PLATFORM_ID  } from '@angular/core';
import { Button } from "../button/button";
import { YouTubePlayerModule } from '@angular/youtube-player';
import { isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-rating-video',
  imports: [Button, YouTubePlayerModule],
  templateUrl: './rating-video.component.html',
  styleUrl: './rating-video.component.css'
})
export class RatingVideoComponent {

  videoId = input<string>();
  isYoutubeApiReady = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object){

    if(isPlatformBrowser(this.platformId)){
      if(!window['YT']) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag);
        window['onYouTubeIframeAPIReady'] = () => {
          this.isYoutubeApiReady = true
        };
      } else {
        this.isYoutubeApiReady = true
      }
    }
  }

}
