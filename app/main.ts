import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

platformBrowserDynamic().bootstrapModule(AppModule);
