import { Component, Input, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { RotanceService } from 'src/app/services/boquette/rotance.service';

@Component({
  selector: 'app-boquette-single',
  templateUrl: './boquette-single.component.html',
  styleUrls: ['./boquette-single.component.scss'],
})
export class BoquetteSingleComponent implements OnInit {

  @Input() singleBoquette: Boquette;
  public nextRotance: Rotance;
  public open = false;
  constructor(
    private rotance: RotanceService,
  ) { }

  ngOnInit() {
    this.rotance.getNextRotance(this.singleBoquette)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.nextRotance = value;
        if(this.nextRotance){
          if(this.nextRotance.commencer && !this.nextRotance.fini){
            this.open = true;
          } else {
            this.open = false;
          }
        }
      }
    });
  }
}
