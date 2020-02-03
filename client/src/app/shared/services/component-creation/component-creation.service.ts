import { Injectable, ComponentFactoryResolver, Injector, ComponentRef, ViewContainerRef, Type } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCreationService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) { }

  public async create<T>(ComponentType: Type<T>, container: ViewContainerRef): Promise<ComponentRef<T>> {
    const factory = this.componentFactoryResolver.resolveComponentFactory<T>(ComponentType);
    return of(container.createComponent<T>(factory, null, this.injector)).toPromise();
  }
}
