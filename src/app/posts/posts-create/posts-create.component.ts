import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Channel } from 'src/app/class/channel/channel';
import { Posts } from 'src/app/class/channel/posts';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PostsService } from 'src/app/services/channel/posts.service';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss'],
})
export class PostsCreateComponent implements OnInit {
  @Input() boquette: Boquette;
  public channelList: Channel[];
  public newMessage: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private posts: PostsService,
    private channel: ChannelService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.channel.getChannelOf(this.boquette)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      }else{
        this.channelList = value;
        this.initForm();
      }
    });
  }

  onSubmitForm(){
    const formValue = this.newMessage.value;
    const newMessage = new Posts(
      undefined,
      undefined,
      undefined,
      formValue.titre,
      formValue.message,
      this.boquette,
      parseInt(formValue.channel,10)
    );
    this.posts.createNew(newMessage)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      }else{
        this.modal.dismiss({
          done:true
        });
      }
    });
  }

  onBack(){
    this.modal.dismiss({
      done:false
    });
  }

  private initForm(){
    this.newMessage = this.formBuilder.group({
      titre : ['',Validators.required],
      message : ['',Validators.required],
      channel: ['',Validators.required],
    });
  }

}
