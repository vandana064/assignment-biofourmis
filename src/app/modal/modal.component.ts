import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @ViewChild('myModal', { static: false }) modal: ElementRef;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

  onSubmit({ form }) {
    const { value } = form;
    console.log(value);
    if (
      !value.domain ||
      !value.usedStorage ||
      !value.subdomain ||
      !value.monthlyVisitor
    ) {
      return;
    }
    const data = {
      ...value,
      usedStorage: value.usedStorage + 'gb',
      storage: '100gb',
      domainTag: 'Primary',
      avaiableDomains: 10,
      status: 'Active',
      usedDomians: 1,
      monthlyVisitorCapacity: 10000,
      subdomain: [
        {
          id: 1,
          name: value.subdomain,
          usedStorage: '10gb',
          domainTag: 'Staging',
          monthlyVisitor: 700,
          status: 'Inactive',
        },
      ],
    };

    this.dataService.addDomainDetails(data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
      () => this.close()
    );
  }
}
