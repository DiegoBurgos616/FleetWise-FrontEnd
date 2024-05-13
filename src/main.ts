import { AppModule } from './app/app.module';
import { bakeEnv } from '@elemental-concept/env-bakery';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

bakeEnv(() => import('./environments/environment')).then((environment: any) => {
  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
