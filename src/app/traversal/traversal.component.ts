import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {Block} from '../shared/block';
import {Pair} from '../shared/pair';
@Component({
  selector: 'app-traversal',
  templateUrl: './traversal.component.html',
  styleUrls: ['./traversal.component.scss']
})
export class TraversalComponent implements OnInit {
  list;
  len;
  @ViewChildren('blocks') blocks:QueryList<ElementRef>;
  array;
  temp;
  row;
  col;
  queue;
  visited;
  distance;
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
  searchUtil(){
    this.row=0;
    this.col=0;
    // this.search();
    this.len=25;
    this.queue=[];
    // this.visited=[];
    // for(var i=0;i<25*25;i++)
    //   this.visited.push(0);
    // this.visited[0]=1;
    this.queue.push(new Pair());
    this.queue[0].i=0;
    this.queue[0].j=0;
    this.queue[0].distance=0;
    this.distance=Number.MAX_VALUE;
    // console.log(this.queue.length);
    this.search();
    console.log(this.distance);
  }
  search=()=>{
      if(this.list[24][24].visited){
        console.log("mai yahan hu saale");
        console.log(this.distance);
        // return this.visited[24][24].distance;
        return;
      }

      console.log(this);
      if(this.queue.length>0){
        console.log("asdas");
        var temp1=this.queue[0];
        this.queue.splice(0,1);
        // console.log(queue);
        var i=temp1.i;
        var j=temp1.j;
        var dist=temp1.distance;
        if(this.isValid(i+1,j) && !this.list[i+1][j].visited && !this.list[i+1][j].blocked){
          this.list[i+1][j].visited=true;
          this.queue.push(new Pair());
          this.queue[this.queue.length-1].i=i+1;
          this.queue[this.queue.length-1].j=j;
          this.queue[this.queue.length-1].distance=dist+1;
          this.array[((i+1)*25)+j].nativeElement.classList.add('cream');
          if(this.list[i+1][j].end){
            this.distance=Math.min(this.queue[this.queue.length-1].distance,this.distance);
          }
        }
        if(this.isValid(i-1,j) && !this.list[i-1][j].visited && !this.list[i-1][j].blocked){
          this.list[i-1][j].visited=true;
          this.queue.push(new Pair());
          this.queue[this.queue.length-1].i=i-1;
          this.queue[this.queue.length-1].j=j;
          this.queue[this.queue.length-1].distance=dist+1;
          this.array[((i-1)*25)+j].nativeElement.classList.add('cream');
          if(this.list[i-1][j].end){
            this.distance=Math.min(this.queue[this.queue.length-1].distance,this.distance);
          }
        }
        if(this.isValid(i,j+1) && !this.list[i][j+1].visited && !this.list[i][j+1].blocked){
          this.list[i][j+1].visited=true;
          this.queue.push(new Pair());
          this.queue[this.queue.length-1].i=i;
          this.queue[this.queue.length-1].j=j+1;
          this.queue[this.queue.length-1].distance=dist+1;
          this.array[((i)*25)+(j+1)].nativeElement.classList.add('cream');
          if(this.list[i][j+1].end){
            this.distance=Math.min(this.queue[this.queue.length-1].distance,this.distance);
          }
        }
        if(this.isValid(i,j-1) && !this.list[i][j-1].visited && !this.list[i][j-1].blocked){
          this.list[i][j-1].visited=true;
          this.queue.push(new Pair());
          this.queue[this.queue.length-1].i=i;
          this.queue[this.queue.length-1].j=j-1;
          this.queue[this.queue.length-1].distance=dist+1;
          this.array[((i)*25)+(j-1)].nativeElement.classList.add('cream');
          if(this.list[i][j-1].end){
            this.distance=Math.min(this.queue[this.queue.length-1].distance,this.distance);
          }
        }
        console.log();
      }
      else{
        console.log(this.distance);
        return ;
      }
      setTimeout(this.search,10);
  }
  isValid(i,j){
    return i<25 && j<25 && i>=0 && j>=0 ;
  }
}