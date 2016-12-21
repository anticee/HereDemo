import {Component, OnInit, Input} from '@angular/core';
import {Feed, FeedService} from "../services/feed.service";

@Component({
  selector: 'feed-component',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [ FeedService ]
})
export class FeedComponent implements OnInit {
  @Input() data: Feed[];
  private color: string;

  constructor(private feedService: FeedService){}

  ngOnInit(): void {
    this.feedService.getAll().subscribe(data => this.data = data);
    this.feedService.refresh();
  }

  clicked(event) {
    console.log("asd");
    let newFeed : Feed = {"ip":"127.0.0.2", "timestamp":"12234320312", "lon":1231, "lat": 1331, "indicator": 2};
    this.feedService.create(newFeed);
  }
}
