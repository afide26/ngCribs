import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  showDetails: Boolean = false;
  sortFields: Array<string> =
  ['address', 'area', 'bathrooms', 'bedrooms', 'type', 'price'];
  cribs: Array<any>;
  error: string;
  sortDirection = 'asc';

  constructor(
    private http: Http,
    private cribsService : CribsService,
    private utilService: UtilService
  ) {
  }

  ngOnInit() {
      // Get the data from the service
      this.cribsService.getAllCribs()
        .subscribe(
          data => this.cribs = data,
          error => this.error = error.statusText
        )

      this.cribsService.newCribSubject
        .subscribe(
          data => this.cribs = [data, ...this.cribs]
        )
  }

}
