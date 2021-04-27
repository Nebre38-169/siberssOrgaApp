import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Channel } from 'src/app/class/channel/channel';
import { Posts } from 'src/app/class/channel/posts';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PostsService } from 'src/app/services/channel/posts.service';
import { AuthService } from 'src/app/services/other/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy,ViewWillEnter {

  public boquetteList: Boquette[];
  public channelList: Channel[];
  public connected: boolean;
  public boquetteLoading = true;
  public channelLoading = true;

  private boquetteSub: Subscription;
  private channelSub: Subscription;
  private authSub: Subscription;
  constructor(
    private boquette: BoquetteService,
    private channel: ChannelService,
    private auth: AuthService,
    private posts: PostsService
  ) { }

  ngOnDestroy(): void {
    this.boquetteSub.unsubscribe();
    this.channelSub.unsubscribe();
    this.authSub.unsubscribe();
  }

  ngOnInit() {
    this.boquetteSub = this.boquette.objectListObs
    .subscribe(value =>{
      this.boquetteList = value;
      this.boquetteLoading = false;
    });
    this.channelSub = this.channel.objectListObs
    .subscribe(value =>{
      this.channelList = value;
      this.channelLoading = false;
    });
    this.authSub = this.auth.admin
    .subscribe(value =>{
      this.connected = (value!==undefined);
    });
  }

  ionViewWillEnter(): void {
    this.boquette.fetch();
    this.channel.fetch();
  }



  onDisconnect(){
    this.auth.logout().subscribe();
  }

}
