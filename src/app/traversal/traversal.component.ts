import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {Block} from '../shared/block';
@Component({
  selector: 'app-traversal',
  templateUrl: './traversal.component.html',
  styleUrls: ['./traversal.component.scss']
})
export class TraversalComponent implements OnInit {
  list;
  len;
  start;
  end;
  @ViewChildren('blocks') blocks:QueryList<ElementRef>;
  array;
  temp;
  constructor() { }

  ngOnInit(): void {
    this.list=[];
    // this.list=new Block[55][55];
    for(var i=0;i<25;i++){
      this.temp=[];
      for(var j=0;j<25;j++){
        this.temp.push(new Block);
        this.temp[this.temp.length-1].blocked=false;
        this.temp[this.temp.length-1].start=false;
        this.temp[this.temp.length-1].end=false;
        this.temp[this.temp.length-1].visited=false;
      }
      this.list.push(this.temp);
    }
    console.log(this.list);
    // for(var i=0;i<110;i++)
    //   this.list.push(i);
    this.list[0][0].start=true;
    this.list[24][24].end=true;
  }
  ngAfterViewInit(){
    this.array=this.blocks.toArray();
    this.array[0].nativeElement.classList.add('green');
    this.array[624].nativeElement.classList.add('red');
    console.log(this.array);
  }
  block(i,j){
    // console.log(i);
    // console.log(j);
    var ctr=0;
    for(var k of this.list){
      // console.log(k);
      if(k==i && j.start==false && j.end==false){
        var temp=0;
        for( var l of k){
          if(l==j){
            if(!l.blocked){
              l.blocked=true;
              this.array[ctr*25+temp].nativeElement.classList.add('white');
            }
            else{
              l.blocked=false;
              this.array[ctr*25+temp].nativeElement.classList.remove('white');
            }
          }
          temp++;
        }
      }
      ctr++;
    }
  }
}