import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { RotanceService } from 'src/app/services/boquette/rotance.service';
import { RotanceEditComponent } from '../rotance-edit/rotance-edit.component';

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
    private modal: ModalController,
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

  onStart(){
    this.r.commencer = true;
    this.rotance.edit(this.r)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      }else{
        this.r = value;
      }
    });
  }

  onEnd(){
    this.r.commencer = true;
    this.r.fini = true;
    this.rotance.edit(this.r)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      }else{
        this.r = value;
      }
    });
  }

  async onEdit(){
    const m = await this.modal.create({
      component: RotanceEditComponent,
      componentProps : {
        r: this.r
      }
    });
    await m.present();
    const { data } = await m.onWillDismiss();
    this.rotance.getById(this.r.getId())
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
