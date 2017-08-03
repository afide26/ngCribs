import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  showDetails: Boolean = false;
  cribs: Array<any>;
  error: string;

  constructor(
    private http: Http,
    private cribsService : CribsService
  ) {
  }

  ngOnInit() {
      // Get the data from the service
      this.cribsService.getAllCribs()
        .subscribe(
          data => this.cribs = data,
          error => this.error = error.statusText
        )
  }

}
