import { Component, OnInit } from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { timer } from 'rxjs';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  array:Array<number>;
  list;
  i=1;
  k=0;
  len;
  key;
  constructor() { }

  ngOnInit(): void {
    this.list = [];
    for(var i =0 ;i<=3;i++){
      this.list.push(Math.floor(Math.random()*10+1));
    }
    // this.list.forEach(ele=>{console.log(ele);});
    // // this.list=list;
    // var x = 0;
    this.len=this.list.length;
    this.key=this.list[1];
  }
  bubbleSort=()=>{
    var element=document.getElementsByTagName('div');
    element[this.i].setAttribute("style","background-color:red");
    if(this.i<this.len)
      element[this.i+1].setAttribute("style","background-color:red");
    if(this.list[this.i]>this.list[this.i+1]){
      [this.list[this.i],this.list[this.i+1]]=[this.list[this.i+1],this.list[this.i]];
      // element[this.i+1].setAttribute("style","background-color:red");
    }
    this.i++;
    if(this.i>=this.len){
    //   for(var j=this.len;j>=this.i;j--)
        element[this.len-1].setAttribute("style","background-color:green");
      this.len--;
      this.i=0;
    }
    if(this.len<=0){
      for(var j=1;j<this.list.length;j++)
        element[j].setAttribute("style","background-color:green");
      return;
    }
    else{
      for(var j=1;j<this.list.length;j++)
        element[j].setAttribute("style","background-color:black");
      element[this.len-1].setAttribute("style","background-color:green");
      setTimeout(this.bubbleSort,300);
    }
  };
  insertionSort=()=>{
    console.log(this.i+" heha");
    this.list.forEach(ele => {
      console.log(ele);
    });
    if(this.i==this.list.length)
      return;
    if(this.k>=0 && this.list[this.k]>this.key){
      this.list[this.k+1]=this.list[this.k];
      this.k--;
      console.log(this.k);
    }
    else {
      this.list[this.k+1]=this.key;
      this.i++;
      this.k=this.i-1;
      this.key=this.list[this.i];
    }
    setTimeout(this.insertionSort,10);
  };
}
