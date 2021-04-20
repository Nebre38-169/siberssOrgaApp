import { Component, Input, OnInit } from '@angular/core';
import { Rotance } from 'src/app/class/boquette/rotance';

@Component({
  selector: 'app-rotance-single',
  templateUrl: './rotance-single.component.html',
  styleUrls: ['./rotance-single.component.scss'],
})
export class RotanceSingleComponent implements OnInit {

  @Input() singleRotance: Rotance;

  constructor() { }

  ngOnInit() {
  }

}
