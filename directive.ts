import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[myDirective]'
})
export class MyDirective{

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ){}
  
    @HostListener('mouseenter') onMouseEnter() {
        this.hover(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(false);
    }