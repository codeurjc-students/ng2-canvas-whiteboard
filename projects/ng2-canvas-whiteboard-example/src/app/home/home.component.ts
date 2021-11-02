import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  join(): void {
    var input = document.getElementById('idRoomText');
    var button = document.getElementById('joinButton');

    if(input!=undefined && button!=undefined){
      input.style.display="block";
      button.style.display="block";

    }
  }
  joinRoom(idRoom:string):void{
   var id =  document.getElementById('idRoom');
   console.log(id)
   if(idRoom!=""){
     this.router.navigate([`/${idRoom}`]);
   }
  }
  createRoom(): void { }
}
