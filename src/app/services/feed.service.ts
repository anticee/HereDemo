import {Injectable} from "@angular/core";
import {Subject, Observable} from "rxjs/Rx";
import {Http,Response} from "@angular/http";

export interface Feed {
  ip: string;
  timestamp: string;
  lon: number;
  lat: number;
  indicator: number;
}

@Injectable()
export class FeedService {
  private data = new Subject<Feed[]>();
  private _data: Feed[];
  result: Object;

  constructor(private http: Http) {
  }

  refresh() {
    return this.http.get('assets/feed.json')
      .map(response => response.json())
      .do(response => {
        console.log(response)
        this._data = response;
        this.data.next(this._data);
      });
  }

  getAll(): Observable<Feed[]> {
    this.refresh().subscribe();
    return this.data;
  }

  create(feed: Feed) {
    this._data.push(feed);
  }
}
