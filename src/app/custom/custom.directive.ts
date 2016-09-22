import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector : "[myHighlight]"
})

export class CustomDirective {
  constructor(private el: ElementRef, private renderer: Renderer) { }
  
  @Input('myHighlight') highlightColor: string;

  @Input('defaultColor') defaultColor:string;  
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
