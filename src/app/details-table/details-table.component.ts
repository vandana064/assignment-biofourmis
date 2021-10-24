import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent implements OnInit {
  $siteDetails: Observable<any>;

  constructor(private dataService: DataService) {
    this.$siteDetails = dataService.getDomainDetails();
   }


  ngOnInit(): void {
  }

  calculateProgress(item, type): String {
    if (type === 'storage') {
      return ((item.usedStorage).replace('gb','') / (item.storage).replace('gb', '')) * 100 + '%';
    }
    else {
      return (item.monthlyVisitor / item.monthlyVisitorCapacity) * 100 + '%';
    }
  }

  expandRow(item) {
    item.rowExpanded = !item.rowExpanded;
  }

}
