import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/class/channel/channel';
import { Posts } from 'src/app/class/channel/posts';
import { PostsService } from 'src/app/services/channel/posts.service';

@Component({
  selector: 'app-channel-single',
  templateUrl: './channel-single.component.html',
  styleUrls: ['./channel-single.component.scss'],
})
export class ChannelSingleComponent implements OnInit {
  @Input() singleChannel: Channel;
  public lastPost: Posts;

  constructor(
    private posts: PostsService
  ) { }

  ngOnInit() {
    this.posts.getLastPosts(this.singleChannel)
    .subscribe(value =>{
      console.log(value);
      if(value instanceof Error){
        console.log(value);
      } else {
        this.lastPost = value;
        console.log(this.lastPost);
      }
    });
  }

}
