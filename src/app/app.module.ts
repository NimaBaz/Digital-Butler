
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { BubbleChartComponent } from './components/d3chart/bubbleChart/bubbleChart.component';
import { HeatMapComponent } from './components/d3chart/heatMap/heatMap.component';
import { InternetCareComponent } from './components/internetCare/internetCare.component';
import { WifiCareComponent } from './components/wifiCare/wifiCare.component';
import { DeviceCareComponent } from './components/deviceCare/deviceCare.component';
import { PromosComponent } from './components/promos/promos.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavBarComponent } from './components/nav_bar/nav_bar.component';
import { ReportComponent } from './components/report/report.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InternetCareComponent,
    WifiCareComponent,
    DeviceCareComponent,
    PromosComponent,
    ToolbarComponent,
    NavBarComponent,
    BubbleChartComponent,
    HeatMapComponent,
    ReportComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }