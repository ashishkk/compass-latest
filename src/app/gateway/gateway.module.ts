import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';

import { GatewayRoutingModule } from './gateway-routing.module';

@NgModule({
  declarations: [
    LoginComponent, 
    GlobalNavComponent
  ],
  imports: [
    CommonModule,
    GatewayRoutingModule
  ]
})
export class GatewayModule { }
