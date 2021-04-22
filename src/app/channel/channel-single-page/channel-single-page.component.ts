import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Channel } from 'src/app/class/channel/channel';
import { Posts } from 'src/app/class/channel/posts';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PostsService } from 'src/app/services/channel/posts.service';

@Component({
  selector: 'app-channel-single-page',
  templateUrl: './channel-single-page.component.html',
  styleUrls: ['./channel-single-page.component.scss'],
})
export class ChannelSinglePageComponent implements OnInit {
  public c: Channel;
  public postList: Posts[];
  public boquetteList: Boquette[] = [];

  constructor(
    private channel: ChannelService,
    private posts: PostsService,
    private boquette: BoquetteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const channelId=this.route.snapshot.params.id;
    this.channel.getById(channelId)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      }else{
        this.c = value;
        for(const b of this.c.getBoquetteArr()){
          this.boquetteList.push(this.boquette.searchOn(b));
        }
        console.log(this.boquetteList);
        this.posts.getByDependance(this.c.getId(),'channel')
        .subscribe(res =>{
          if(res instanceof Error){
            console.log(res);
          }else{
            this.postList=res;
          }
        });
      }
    });
  }

}
