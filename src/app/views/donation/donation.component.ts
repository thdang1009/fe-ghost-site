import { Component, inject, OnInit } from '@angular/core';
import { WINDOW } from 'src/window';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  private _window = inject(WINDOW);
  constructor() { }

  ngOnInit(): void {
    // this._window.open('https://www.buymeacoffee.com/thdang1009', '_blank');
  }

}
