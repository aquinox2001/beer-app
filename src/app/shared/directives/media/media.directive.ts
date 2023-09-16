import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[media]'
})
export class MediaDirective {

  //recibe el tamaño de la pantalla
  @Input() set media(query: string) {
    
    this.setListener(query);
    
  }
  private hasView = false;

  constructor(
    private readonly viewContainer: ViewContainerRef,
    private readonly template: TemplateRef<any>
  ) { }

  private setListener(query: string) {
    const mediaQueryList = window.matchMedia(query);
    
    const listener = (event: any) => {
      //Añade el template que concide con la pantalla
      if (event.matches && !this.hasView) {
        this.hasView = true;
        this.viewContainer.createEmbeddedView(this.template);
      }
      // Destruye la template que no coincide
      if (!event.matches && this.hasView) {
        this.hasView = false;
        this.viewContainer.clear();
      }
    };
    
    // efectua el cambio
    listener(mediaQueryList);
    mediaQueryList.addEventListener('change', listener);
   

    
  }

}
