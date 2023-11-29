import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit{
  @Input() name = 'Frederick';
  @Input() description = 'he got the feds huntin him';
  @Input() img = 'assets/img/hamster/1.jpg';
  @Input() canFollow = true;


  constructor(public fs: FriendService) {}

  ngOnInit(): void {
      
  }
}
