import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-sitedetails',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss'],
})
export class SiteDetailsComponent implements OnInit {
  @ViewChild('modal', { static: false }) modal: ModalComponent;

  searchText: String;
  domainData = [];
  filteredData = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDomainDetails().subscribe(
      (res) => {
        this.domainData = res;
        this.filteredData = this.domainData;
      },
      (err) => console.log(err)
    );
  }

  addNewSite() {
    this.modal.open();
  }

  onChange(newVal) {
    this.searchText = newVal;
    this.filteredData = newVal
      ? this.domainData.filter(
          (f) =>
            f.domain.toLowerCase().includes(newVal.toLowerCase()) ||
            !!f.subdomain.filter((sf) =>
              sf.name.toLowerCase().includes(newVal.toLowerCase())
            ).length
        )
      : this.domainData;
  }
}
