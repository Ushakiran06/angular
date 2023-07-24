import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  //property binding
  enable= false;
  twoWayEntered : string;
  message ="button is disable"
  textEntered: string;
  serverStatus: string ="offline";
  serverId : number = 10;
  log = [];

  constructor() {
    setTimeout(()=> {
      this.enable = true
    },2000)
   }

  ngOnInit(): void {
  }

  //event binding
  onbuttonClick(){
    this.message= "button enabled"
  }

  onInputingText(event :Event){
    this.textEntered = (<HTMLInputElement>event.target).value;
    this.log.push(this.log.length+1)
  }

  getServerStatus(){
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === "online"? "green" : "red";
  }
}
