import { Directive,ElementRef, Renderer2, OnInit ,HostListener} from '@angular/core';

@Directive({
    selector:'[color]'
})
export class ColorDirective implements OnInit {

    constructor(private el:ElementRef,private renderer:Renderer2) { };

  ngOnInit(){
      this.renderer.setStyle(this.el.nativeElement,'color','red');
  }
  
  @HostListener('window:keyup',['$event']) windowEvent(event:KeyboardEvent){
      //Right Arrow
      if(event.keyCode === 39){
        this.renderer.setStyle(this.el.nativeElement,'color','blue');
      } 
      //Left Arrow
      if(event.keyCode === 37){
        this.renderer.setStyle(this.el.nativeElement,'color','orange');
      } 

      //Up Arrow
      if(event.keyCode === 38){
        this.renderer.setStyle(this.el.nativeElement,'color','purple');
      }
      
      //Up Arrow
      if(event.keyCode === 40){
        this.renderer.setStyle(this.el.nativeElement,'color','red');
      } 
  }
}