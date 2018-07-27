import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _acr: ActivatedRoute) {
    this._acr.params.subscribe((p: any) => {
      debugger;
    });
  }

  ngOnInit() {
  }

}
