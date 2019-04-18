import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  madLib: string;

  /**
   * This is my constructor
   */
  constructor() {
  }

  /**
   * This is my ngOnInit
   */
  ngOnInit() { }

  createMadLib(noun: string, verb: string, place: string, adjective: string) {
    this.madLib = `The ${noun} went ${verb} to the ${place} where they saw an ${adjective} meadow`;
  }

}
