import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Channel } from 'src/app/class/channel/channel';
import { Posts } from 'src/app/class/channel/posts';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PostsService } from 'src/app/services/channel/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy {

  public boquetteList: Boquette[];
  public channelList: Channel[];

  private boquetteSub: Subscription;
  private channelSub: Subscription;

  constructor(
    private boquette: BoquetteService,
    private channel: ChannelService,
    private posts: PostsService
  ) { }

  ngOnDestroy(): void {
    this.boquetteSub.unsubscribe();
    this.channelSub.unsubscribe();
  }

  ngOnInit() {
    this.boquetteSub = this.boquette.objectListObs
    .subscribe(value =>{
      this.boquetteList = value;
    });
    this.channelSub = this.channel.objectListObs
    .subscribe(value =>{
      this.channelList = value;
    });
    this.boquette.fetch();
    this.channel.fetch();
  }

}
