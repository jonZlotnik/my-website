import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me-summary',
  templateUrl: './about-me-summary.component.html',
  styleUrls: ['./about-me-summary.component.scss']
})
export class AboutMeSummaryComponent implements OnInit {

  @Input() title: string;
  @Input() paragraphs: string;

  constructor() { }

  ngOnInit(): void {
  }

}
