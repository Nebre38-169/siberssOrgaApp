import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { Posts } from 'src/app/class/channel/posts';
import { PostsCreateComponent } from 'src/app/posts/posts-create/posts-create.component';
import { RotanceCreateComponent } from 'src/app/rotance/rotance-create/rotance-create.component';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { RotanceService } from 'src/app/services/boquette/rotance.service';
import { PostsService } from 'src/app/services/channel/posts.service';
import { AuthService } from 'src/app/services/other/auth.service';

@Component({
  selector: 'app-boquette-single-page',
  templateUrl: './boquette-single-page.component.html',
  styleUrls: ['./boquette-single-page.component.scss'],
})
export class BoquetteSinglePageComponent implements OnInit {
  public b: Boquette;
  public rotanceList: Rotance[];
  public postsList: Posts[];
  public ownerShip: boolean;

  constructor(
    private boquette: BoquetteService,
    private rotance: RotanceService,
    private posts: PostsService,
    private auth: AuthService,
    private modal: ModalController,
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
        this.ownerShip = this.auth.isOwner(this.b.getId());
        this.rotance.getByDependance(boquetteId,'boquette')
        .subscribe(res =>{
          if(res instanceof Error){
            console.log(res);
          }else{
            this.rotanceList = res;
          }
        });
        this.posts.getByDependance(boquetteId,'auteur')
        .subscribe(r =>{
          if(r instanceof Error){
            console.log(r);
          }else{
            this.postsList = r;
          }
        });
      }
    });
  }

  async onAddRotance(){
    const m = await this.modal.create({
      component: RotanceCreateComponent,
      componentProps : {
        boquette: this.b
      }
    });
    await m.present();
    const { data } = await m.onWillDismiss();
    if(data.done){
      this.rotance.getByDependance(this.b.getId(),'boquette')
      .subscribe(value =>{
        if(value instanceof Error){
          console.log(value);
        }else{
          this.rotanceList = value;
        }
      });
    }
  }

  async onAddMessage(){
    const m = await this.modal.create({
      component : PostsCreateComponent,
      componentProps: {
        boquette: this.b
      }
    });
    await m.present();
    const { data } = await m.onWillDismiss();
    if(data.done){
      this.posts.getByDependance(this.b.getId(),'auteur')
        .subscribe(r =>{
          if(r instanceof Error){
            console.log(r);
          }else{
            this.postsList = r;
          }
        });
    }
  }

}
