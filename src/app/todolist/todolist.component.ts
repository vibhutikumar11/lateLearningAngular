import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  items = ["Angular Js", "Angular", "Rect", "Backbone"];
  newItem = "";

  pushItem = function(){

    if(this.newItem != ""){
        this.items.push(this.newItem);
        this.newItem = "";
    }

  }

  removeItem = function(index){
    this.items.splice(index,1);
  }


}
