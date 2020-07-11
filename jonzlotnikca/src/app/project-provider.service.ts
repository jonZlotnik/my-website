import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectProviderService {

  projectIds = [1, 2, 3];
  projectTitles = {
    1: 'Swarm Framework',
    2: 'Micro Aquarium',
    3: 'Rifle'
  };
  projectSummaries = {
    1: 'An extensible framework for decentralized control of robotic swarms.',
    2: 'My personal desktop aquarium at which I stare.',
    3: 'Annihilating passwords one account at a time.'
  };

  constructor() { }
  getProjectIds()
  {
    return this.projectIds;
  }
  getProjectTitle(id: number){
    return this.projectTitles[id];
  }
  getProjectSummary(id: number)
  {
    return this.projectSummaries[id];
  }
}
