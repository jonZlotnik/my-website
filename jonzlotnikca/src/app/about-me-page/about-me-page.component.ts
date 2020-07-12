import { Component, OnInit } from '@angular/core';
import {ResumeProviderService} from '../resume-provider.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {

  constructor(public resumeProviderService: ResumeProviderService) { }

  ngOnInit(): void {
  }

}
