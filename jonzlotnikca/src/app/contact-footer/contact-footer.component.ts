import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.scss'],
})
export class ContactFooterComponent implements OnInit {

  @Input() hidden = false;

  constructor() { }

  ngOnInit(): void {
  }

}
