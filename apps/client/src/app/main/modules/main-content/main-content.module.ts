import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { MainContentRoutingModule } from './main-content-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: new Environment().environment.backendUrl, options: {}};

@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    SocketIoModule.forRoot(config)
  ],
})
export class MainContentModule { }
