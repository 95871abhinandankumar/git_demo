import { Directive, HostListener } from '@angular/core';

@Directive({
  // To apply the directives to every img tag use => selector: 'img', Other wise you have to add directives name to img tag where you need
  // like = > selector: 'img[appImgFallback]'
  selector: 'img'
})
export class ImgFallbackDirective {

  constructor() { }

  @HostListener('error', ['$event'])
  switchToFallback(event: Event){
    const imgTag = event.target as HTMLImageElement;
    imgTag.src = 'https://cdn11.bigcommerce.com/s-m1jiibmpmc/stencil/080443d0-e8e7-0139-b5bb-5eca3f67671f/e/f51774b0-60cc-0138-751f-0242ac11000b/icons/icon-no-image.svg';
  }

}
