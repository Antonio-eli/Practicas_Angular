import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://media.pitchfork.com/photos/627425dbc85171592b8a6e6a/1:1/w_600/Bad-Bunny-Un-Verano-Sin-Ti.jpg',
    album: 'Un Verano Sin Ti',
    name: 'Bad Bunny ',
    url: 'https://www.youtube.com/watch?v=z8xLN07Pt_8&list=RDz8xLN07Pt_8&start_radio=1',
    _id: '1'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
