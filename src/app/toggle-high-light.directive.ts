import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[toggleHighLight]'
})
export class ToggleHighLightDirective implements OnInit  {
  private backgroundColor = this.defaultColor;

  @HostListener('mouseenter') mouseOver() {
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    //console.log("Event Target:" + event.target.style.backgroundColor);
    console.log("Event Target:" + event.target);
  }

  @HostBinding('style.backgroundColor') get BindColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input() hightlightColor = 'green';
  constructor()  {
    
  }
  
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
