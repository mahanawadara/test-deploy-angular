import { Component, OnInit } from '@angular/core';
import { SposifyService } from '../sposify.service';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {

  public results: any[] = [];
  constructor(private sposifyService: SposifyService) { }

  ngOnInit() {
  }

  public search(query: string) {
    this.sposifyService.searchTrack(
      query).subscribe({
        next: (res: any) => {
          this.reder(res);
        }
      });
  }

  private reder(res: any) {
    this.results = [];
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }
}
