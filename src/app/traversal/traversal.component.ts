import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    this.list=[];
    for(var i=0;i<110;i++)
      this.list.push(i);
    this.list[50]=0;
    this.list[100]=2;
  }
  ngAfterViewInit(){
    this.array=this.blocks.toArray();
    this.array[50].nativeElement.classList.add('green');
    this.array[100].nativeElement.classList.add('red');
  }
  mark(i){
    console.log(i);
    if(this.list[i]==1){
      this.list[i]=3;
      this.array[i].nativeElement.classList.remove('white');
      this.array[i].nativeElement.classList.add('white');
    }
    else{
      this.list[i]=1;
      this.array[i].nativeElement.classList.remove('white');
    }
  }
}
