import { Component, OnInit } from '@angular/core';
import { RoutePaths } from '../app-routing.constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public RoutePaths = RoutePaths;

  constructor() { }

  ngOnInit(): void {
  }

}
