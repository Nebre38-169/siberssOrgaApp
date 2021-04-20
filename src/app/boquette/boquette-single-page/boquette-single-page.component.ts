import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { RotanceService } from 'src/app/services/boquette/rotance.service';

@Component({
  selector: 'app-boquette-single-page',
  templateUrl: './boquette-single-page.component.html',
  styleUrls: ['./boquette-single-page.component.scss'],
})
export class BoquetteSinglePageComponent implements OnInit {
  public b: Boquette;
  public rotanceList: Rotance[];
  constructor(
    private boquette: BoquetteService,
    private rotance: RotanceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const boquetteId = this.route.snapshot.params.id;
    this.boquette.getById(boquetteId)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      }else{
        this.b = value;
        this.rotance.getByDependance(boquetteId,'boquette')
        .subscribe(res =>{
          if(res instanceof Error){
            console.log(res);
          }else{
            this.rotanceList = res;
          }
        });
      }
    });
  }

}
