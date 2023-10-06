import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userlist:any;
  constructor(private service:UserService){}

  ngOnInit(){
    this.service.getUsers().subscribe((res)=>{
      this.userlist=res;
      

    })
  }

}
