import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
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
    private alert: AlertController,
    private route: ActivatedRoute,
    private router: Router
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

  async onDelete(){
    const a = await this.alert.create({
      header : 'Supprission',
      message : `Voulez vous vraiment supprimre la rotance ?`,
      buttons : [
        {
          text : 'Annuler',
          role : 'cancel',
          cssClass : 'primary'
        },
        {
          text: 'Oui',
          handler: () =>{
            this.rotance.delete(this.r.getId())
            .subscribe(value =>{
              if(value instanceof Error){
                console.log(value);
              } else {
                this.router.navigate(['boquette',this.b.getId()]);
              }
            });
          }
        }
      ]
    });
    await a.present();
  }

}
