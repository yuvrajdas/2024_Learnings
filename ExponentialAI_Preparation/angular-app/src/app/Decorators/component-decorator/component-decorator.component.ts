import { Component, ElementRef, HostBinding, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-component-decorator',
  templateUrl: './component-decorator.component.html',
  styleUrls: ['./component-decorator.component.scss']
})
export class ComponentDecoratorComponent {


  @ViewChildren('li') lis!:QueryList<ElementRef>;
  @ViewChild('divEle') divEle!:ElementRef<HTMLDivElement>;


  @HostListener('click', ['$event'])
  listednHost(event:Event){
    console.log(event);

    console.log('Host lister (Mthod Decorator Executed.)')
  }

  @HostBinding('style.color') bgColo:string = 'red';
  ngOnInit(){
  }

  ngAfterViewInit(){


    console.log(this.lis);

    console.log(this.divEle.nativeElement);

    // this.lis.forEach((ele)=>{
    //   console.log(ele.nativeElement.textContent);

    // })
  }
}
