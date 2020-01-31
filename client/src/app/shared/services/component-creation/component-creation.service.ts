import { Injectable, ComponentFactoryResolver, Injector, ComponentRef, ViewContainerRef } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCreationService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) { }

  public async create<T>(importPath: string, container: ViewContainerRef): Promise<ComponentRef<T>> {
    const { ComponentType } = await import(importPath);
    const factory = this.componentFactoryResolver.resolveComponentFactory<T>(ComponentType);
    return of(container.createComponent<T>(factory, null, this.injector)).toPromise();
  }
}
