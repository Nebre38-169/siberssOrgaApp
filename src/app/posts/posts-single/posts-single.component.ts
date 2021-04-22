import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/class/channel/posts';

@Component({
  selector: 'app-posts-single',
  templateUrl: './posts-single.component.html',
  styleUrls: ['./posts-single.component.scss'],
})
export class PostsSingleComponent implements OnInit {
  @Input() singlePost: Posts;

  constructor() { }

  ngOnInit() {}

}
