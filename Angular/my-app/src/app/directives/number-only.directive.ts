import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  @Input() appNumberOnly !: number | string;

  constructor() { }

  @HostListener('keypress', ['$event'])
  restrictNumberOnly(event: KeyboardEvent){
    const inputTag = event.target as HTMLInputElement;

    //While using variable name same as directives always check 
    // weather the value is passed or not, If not then logic my get fail as varibale will be null.

    const length : number = this.appNumberOnly ? Number(this.appNumberOnly) : Infinity;
    const txtLength = inputTag.value.length;


    if(txtLength >= length || event.keyCode < 48 || event.keyCode > 57){
      event.preventDefault();
    }
  }

}
