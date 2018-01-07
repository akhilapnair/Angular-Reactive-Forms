import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { appRoutingModule } from './app.routing';
import { loginReducer } from './store/login/login.reducer';
import { LoginEffects } from './store/login/login.effect';
import { reducers } from './store/router.reducer';
import { AppLoginModule } from './app-login/app-login.module';
import { AuthGuard } from './app-login/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppLoginModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    appRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],

  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
