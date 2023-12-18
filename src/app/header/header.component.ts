import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 

  constructor(public fs: FriendService) {} 

  ngOnInit(): void {
      
  }
}
