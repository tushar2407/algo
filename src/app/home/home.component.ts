import { Component, OnInit, ElementRef, ViewChildren , ViewChild, QueryList} from '@angular/core';
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
  time;
  @ViewChild('ba') ba:ElementRef;
  @ViewChildren('av') av:QueryList<ElementRef>;
  @ViewChild('h3') h3:ElementRef;
  @ViewChild('h4') h4:ElementRef;
  constructor(
    public element:ElementRef
  ) { }

  ngOnInit(): void {
    this.list = [];
    for(var i =0 ;i<=10;i++){
      var temp=Math.floor(Math.random()*100+1);
      if(temp===1){
        i--;
        continue;
      }
      this.list.push(temp);
    }
    this.len=this.list.length;
    this.key=this.list[1];
    this.time=300;
  }
  ngAfterViewInit(){
    // console.log(this.ba.nativeElement);
    // console.log(this.av);
    this.array=this.av.toArray();
    // console.log(this.array[0].nativeElement.classList);
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
    setTimeout(this.bubbleSort,this.time);
  };
  reset(){
    this.list = [];
    for(var i =0 ;i<=10;i++){
      this.list.push(Math.floor(Math.random()*10+1));
    }
    this.h4.nativeElement.classList.add('none');
    this.h4.nativeElement.classList.remove('displayDiv');
    this.h3.nativeElement.classList.add('none');
    this.h3.nativeElement.classList.remove('displayDiv');
    this.len=this.list.length;
    this.key=this.list[1];
  }
  insertionSort=()=>{
    if(this.i==this.list.length){
      this.h3.nativeElement.classList.remove('none');
      this.h3.nativeElement.classList.add('displayDiv');
      this.h4.nativeElement.classList.remove('displayDiv');
      this.h4.nativeElement.classList.add('none');
      for( var r=0;r<this.array.length;r++){
        this.array[r].nativeElement.classList.remove('red');
        this.array[r].nativeElement.classList.add('green');
      }
      return;
    }
    if(this.k>=0 && this.list[this.k]>this.key){
      this.list[this.k+1]=this.list[this.k];
      this.k--;
    }
    else {
      this.list[this.k+1]=this.key;
      this.array[this.i].nativeElement.classList.remove('red');
      this.array[this.i].nativeElement.classList.add('green');
      this.i++;
      if(this.i<this.list.length)
        this.array[this.i].nativeElement.classList.add('red');
      this.k=this.i-1;
      this.key=this.list[this.i];
    }
    setTimeout(this.insertionSort,this.time);
  };
  speed(a){
    this.time=300*a;
  }
}
