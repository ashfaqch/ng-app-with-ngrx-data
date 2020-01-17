import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '../../../environments/environment';

const apiRoot = environment.apiUrlBase + '/';
const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: apiRoot,
    entityHttpResourceUrls: {
        Todo: { entityResourceUrl: apiRoot + 'todos/', collectionResourceUrl: apiRoot + 'todos/' }
    }
};

@NgModule({
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
        environment.production ? [] : StoreDevtoolsModule.instrument()
    ],
    providers: [
        {
            provide: DefaultDataServiceConfig,
            useValue: defaultDataServiceConfig
        }
    ]
})
export class AppStoreModule {
}
