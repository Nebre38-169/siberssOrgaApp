import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { RotanceService } from 'src/app/services/boquette/rotance.service';

@Component({
  selector: 'app-rotance-single-page',
  templateUrl: './rotance-single-page.component.html',
  styleUrls: ['./rotance-single-page.component.scss'],
})
export class RotanceSinglePageComponent implements OnInit {
  public r: Rotance;
  public b: Boquette;

  constructor(
    private rotance: RotanceService,
    private boquette: BoquetteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const rotanceId = this.route.snapshot.params.id;
    this.rotance.getById(rotanceId)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      }else{
        this.r = value;
        this.b = this.r.boquette;
      }
    });
  }

}
