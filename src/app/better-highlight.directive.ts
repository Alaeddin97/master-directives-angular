import { Directive,Renderer2,ElementRef,OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string='yellow';
  @Input('appBetterHighlight') highlightColor:string;
  // @Input() highlightColor:string;

  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';

  constructor(private renderer:Renderer2,private eleRef:ElementRef) { }

  ngOnInit(): void {
    this.backgroundColor=this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','blue');
  }

  @HostListener('mouseenter') mouseover(event:Event){
    this.backgroundColor=this.highlightColor;
    // this.backgroundColor='blue';
    //this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','blue');
  }

  @HostListener('mouseleave') mouseleave(event:Event){
    this.backgroundColor=this.defaultColor;
    // this.backgroundColor='transparent';
    //this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','transparent');
  }
}
