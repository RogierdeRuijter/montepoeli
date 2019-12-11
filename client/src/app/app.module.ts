import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { TranslateStore } from '@ngx-translate/core';
import { AppInitService } from './services/app.init';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LandingComponent } from './components/landing/landing.component';
import { MobileContentModule } from './modules/main-content/modules/mobile-content/mobile-content.module';
import { LargerScreenContentModule } from './modules/main-content/modules/larger-screen-content/larger-screen-content.module';
import { AuthModule } from './shared/modules/auth/auth.module';

export function init_app(appLoadService: AppInitService): () => Promise<any> {
  return () => appLoadService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  providers: [
    CookieService,
    TranslateStore,
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true,
    },
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: true}),
    AuthModule,
    MobileContentModule,
    LargerScreenContentModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
