import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: any = {
    cover: 'https://media.pitchfork.com/photos/627425dbc85171592b8a6e6a/1:1/w_600/Bad-Bunny-Un-Verano-Sin-Ti.jpg',
    album: 'Un Verano Sin Ti',
    name: 'Bad Bunny '
  }
  constructor() { }

  ngOnInit(): void {
  }

}
