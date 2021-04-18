import { Component, Input, OnInit } from '@angular/core';
import { Boquette } from 'src/app/class/boquette/boquette';

@Component({
  selector: 'app-boquette-single',
  templateUrl: './boquette-single.component.html',
  styleUrls: ['./boquette-single.component.scss'],
})
export class BoquetteSingleComponent implements OnInit {

  @Input() singleBoquette: Boquette;

  constructor() { }

  ngOnInit() {}

}
