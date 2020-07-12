import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeProviderService {

  blurbIds = [1, 2];
  blurbTitles = {
    1: 'Professional',
    2: 'Hobbies'
  };
  blurbText = {
    1: ['Jon Zlotnik is an excited and creative software developer and information security specialist. His most recent experience includes applied cryptography, cloud security, identity management, and enterprise software tools development.',
      'He loves working on proof-of-concept, and highly innovative projects, as well as pushing the limits of cloud technology.'],
    2: ['After work he goes horseback riding and is schooled in dressage by his girlfriend. Depending on the Canadian weather, he\'ll take any opportunity to go sailing or skiing.',
      'His more sedentary hobbies include robotics, hacking, and aquarium keeping. In other words, he enjoys breaking things and occasionally making something cool. He keeps freshwater aquariums and even managed to breed some Discus.']
  };

  constructor() { }
  getBlurbIds()
  {
    return this.blurbIds;
  }
  getBlurbTitle(id: number){
    return this.blurbTitles[id];
  }
  getBlurbParagraphs(id: number)
  {
    return this.blurbText[id];
  }
}
