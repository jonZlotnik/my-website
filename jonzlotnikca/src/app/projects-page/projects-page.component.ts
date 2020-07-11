import { Component, OnInit } from '@angular/core';
import {ProjectProviderService} from '../project-provider.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  constructor(public projectProviderService: ProjectProviderService) { }

  ngOnInit(): void {
  }

}
