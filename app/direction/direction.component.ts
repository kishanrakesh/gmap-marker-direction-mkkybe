import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.svg',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  angle="90";
  rotationExp =`rotate( ${this.angle} 12.4595035 6.1941837)`;
  constructor() { }

  ngOnInit() {
  }

}