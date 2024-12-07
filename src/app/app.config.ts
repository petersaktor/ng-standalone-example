import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { loggerConfig } from './logger.config';
import { provideLogger } from './shared/util-logger/providers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/util-auth';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { reducer } from './shell/state/state';
import { TicketsModule } from './domains/ticketing/feature-my-tickets';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor]),
    ),

    provideRouter(routes), 
    provideAnimations(),
    provideLogger(loggerConfig),

    provideStore(reducer),
    provideEffects(),

    importProvidersFrom(TicketsModule),
    importProvidersFrom(LayoutModule),
  ]
};
