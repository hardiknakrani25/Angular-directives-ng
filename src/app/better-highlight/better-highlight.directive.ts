import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
@HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  constructor(private eleRef: ElementRef , private renderer: Renderer2) { }
ngOnInit() {
  this.backgroundColor = this.defaultColor;
}

@HostListener('mouseenter') mouseover(eventData: Event) {
  // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') mouseleave(eventData: Event) {

    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');

  this.backgroundColor = this.defaultColor;
  }

}
