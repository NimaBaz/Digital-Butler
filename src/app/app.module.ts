import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { D3chartComponent } from './components/d3chart/d3chart.component';
import { InternetCareComponent } from './components/internet_care/internet_care.component';
import { WifiCareComponent } from './components/wifi_care/wifi_care.component';
import { DeviceCareComponent } from './components/device_care/device_care.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InternetCareComponent,
    WifiCareComponent,
    DeviceCareComponent,
    D3chartComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
