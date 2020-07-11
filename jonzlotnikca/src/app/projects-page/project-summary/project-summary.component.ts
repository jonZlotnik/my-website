import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {

  @Input() title: string;
  @Input() summary: string;

  constructor() { }

  ngOnInit(): void {
  }

}
