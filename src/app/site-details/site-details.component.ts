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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  addNewSite() {
    console.log('works');
    this.modal.open();
  }

  onChange(newVal) {
    console.log(newVal);
    this.searchText = newVal;
  }
}
