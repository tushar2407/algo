import { Component, OnInit, ElementRef, ViewChildren , ViewChild, QueryList} from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { timer } from 'rxjs';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  array;
  list;
  i=1;
  k=0;
  len;
  key;
  @ViewChild('ba') ba:ElementRef;
  @ViewChildren('av') av:QueryList<ElementRef>;
  @ViewChild('h3') h3:ElementRef;
  @ViewChild('h4') h4:ElementRef;
  constructor(
    public element:ElementRef
  ) { }

  ngOnInit(): void {
    this.list = [];
    for(var i =0 ;i<=3;i++){
      this.list.push(Math.floor(Math.random()*10+1));
    }
    this.len=this.list.length;
    this.key=this.list[1];
  }
  ngAfterViewInit(){
    console.log(this.ba.nativeElement);
    // this.av.nativeElement[0].classList.add('red');
    // console.log(this.av.nativeElement[0].classList);
    // this.av.nativeElement.classList.remove('blue');
    // console.log(this.av.nativeElement.classList);
    console.log(this.av);
    this.array=this.av.toArray();
    console.log(this.array[0].nativeElement.classList);
  }
  bubbleUtil=()=>{
    this.i=0;
    this.len=this.list.length;
    // console.log(this.a.nativeElement);
    this.h3.nativeElement.classList.remove('none');
    this.h3.nativeElement.classList.add('none');
    this.bubbleSort();
  }
  insertionUtil=()=>{
    this.i=1;
    this.k=0;
    this.key=this.list[1];
    this.h3.nativeElement.classList.remove('none');
    this.h4.nativeElement.classList.remove('none');
    this.h3.nativeElement.classList.add('none');
    this.h4.nativeElement.classList.add('displayDiv');
    this.insertionSort();
  }
  bubbleSort=()=>{
    if(this.i>=this.len){
      this.array[this.len-1].nativeElement.classList.remove('red');
      this.array[this.len-1].nativeElement.classList.add('green');
      for(var j=0;j<this.list.length;j++)
        this.array[this.len-1].nativeElement.classList.remove('red');
      this.len--;
      this.i=0;
    }
    if(this.len<=0){
      this.h3.nativeElement.classList.remove('none');
      this.h3.nativeElement.classList.remove('displayDiv');
      return;
    }
    if(this.list[this.i]>this.list[this.i+1]){
      this.array[this.i].nativeElement.classList.remove('red');
      this.array[this.i+1].nativeElement.classList.remove('red');
      this.array[this.i].nativeElement.classList.add('red');
      this.array[this.i+1].nativeElement.classList.add('red');
      [this.list[this.i],this.list[this.i+1]]=[this.list[this.i+1],this.list[this.i]];
      this.array[this.i].nativeElement.classList.remove('red');
    }
    this.i++;
    setTimeout(this.bubbleSort,300);
  };
  insertionSort=()=>{
    var element=document.getElementsByTagName('div');
    if(this.i==this.list.length){
      for(var o=0;o<element.length;o++)
        element[o].setAttribute("style","background-color:green");
      return;
    }
    if(this.k>=0 && this.list[this.k]>this.key){
      this.list[this.k+1]=this.list[this.k];
      this.k--;
    }
    else {
      this.list[this.k+1]=this.key;
      this.i++;
      if(this.i==this.list.length){
        for(var o=0;o<this.list.length;o++)
          element[o].setAttribute("style","background-color:green");
        return;
      }
      this.k=this.i-1;
      this.key=this.list[this.i];
      console.log(parseInt(element[this.i].innerHTML)==4 );
      element[this.i].setAttribute("style","background-color:red;");
    }
    setTimeout(this.insertionSort,1000);
  };
}
