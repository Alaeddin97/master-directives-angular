import { Directive,ElementRef ,OnInit} from '@angular/core';

@Directive({
  selector: '[basicHighlightApp]'
})
export class BasicHighlightAppDirective implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor='red';
  }
}
