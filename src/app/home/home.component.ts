import { Component, OnInit } from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  array:Array<number>;
  list;
  constructor() { }

  ngOnInit(): void {
    this.array=new Array(5);
    for(var i =1 ;i<=5;i++){
      this.array[i]=i;
    }
    var list = [6, 5, 4, 3, 2, 1];
    this.list=list;
    var x = 0;
    var len=list.length;
    var i=0;
    var sort=()=>{
      console.log(i);
      if(this.list[i]>this.list[i+1]){
        [this.list[i],this.list[i+1]]=[this.list[i+1],this.list[i]];  
      }
      i++;
      if(i>len){
        len--;
        i=0;
      }
      if(len<=0)
        return;
      else{
        setTimeout(sort,1000);
      }
    };
    sort();
  }
}
