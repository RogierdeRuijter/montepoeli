import { Injectable, ComponentFactoryResolver, Injector, ComponentRef, ViewContainerRef, Type, Compiler } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCreationService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private compiler: Compiler) { }

  public async create<T>(ComponentType: Type<T>, container: ViewContainerRef, ngModuleType?: any): Promise<ComponentRef<T>> {
    const compFactory = this.componentFactoryResolver.resolveComponentFactory<T>(ComponentType);
    
    const factory = await this.compiler.compileModuleAsync(ngModuleType);
    const ref = factory.create(this.injector);

    return of(container.createComponent<T>(compFactory, null, this.injector, [], ref)).toPromise();
  }
}
