/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  // @Input('appHighlight') highlightColor: string; // 过用别名时的代码


  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight(this.highlightColor || this.defaultColor || 'red');
    this.highlight( this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
