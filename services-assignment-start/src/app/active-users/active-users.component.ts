import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users;
  constructor(private userv:UsersService){}
 ngOnInit(){
   this.users=this.userv.users;
 }
 
 onSetToActive(id: number) {
   this.userv.setStatus(id,'inactive');
   this.userv.countTimes++;
   console.log(this.userv.countTimes);
 }
}
