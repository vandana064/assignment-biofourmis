import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent implements OnInit {
  @Input('domaindata') domainData: Array<any>;

  ngOnInit(): void {
    console.log(this.domainData)
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
