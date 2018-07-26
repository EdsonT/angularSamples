import { Component, OnInit, } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
   users;
   constructor(private userv:UsersService){}
  ngOnInit(){
    this.users=this.userv.users;
  }
  
  onSetToActive(id: number) {
    this.userv.setStatus(id,'active');
    this.userv.countTimes++;
    console.log(this.userv.countTimes);
  }
}
