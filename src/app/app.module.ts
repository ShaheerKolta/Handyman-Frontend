import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { PlumberComponentComponent } from './plumber-component/plumber-component.component';
import { ClientEditProfileComponent } from 'src/client-profile/client-edit-profile/client-edit-profile.component';
import { HistoryOfRequestsComponent } from './history-of-requests/history-of-requests.component';
import { HandymenComponent } from './handymen/handymen.component';
import { CarpentersComponent } from './carpenters/carpenters.component';
import { ElectriciansComponent } from './electricians/electricians.component';
import { PaintersComponent } from './painters/painters.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { AppliancesTechnicianComponent } from './appliances-technician/appliances-technician.component';
import { OtherComponent } from './other/other.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenServiceService } from './services/token-service.service';

@NgModule({
  declarations: [AppComponent, 
                 PlumberComponentComponent,
                 HistoryOfRequestsComponent, 
                 HandymenComponent, 
                 CarpentersComponent, 
                 ElectriciansComponent, 
                 PaintersComponent, 
                 MechanicsComponent, AppliancesTechnicianComponent, OtherComponent],
  imports: [BrowserModule, 
            AppRoutingModule, 
            BrowserAnimationsModule, 
            SharedModule, 
            NgxSkeletonLoaderModule
    ,RouterModule.forRoot([
    {
      path: 'handymen/1',
      component: PlumberComponentComponent
    },
    {
      path: 'client-edit-profile',
      component: ClientEditProfileComponent
    },
    {
      path: 'handymen',
      component: HandymenComponent
    },
    {
      path: 'handymen/2',
      component: CarpentersComponent
    },
    {
      path: 'handymen/3',
      component: MechanicsComponent
    },
    {
      path: 'handymen/4',
      component: PaintersComponent
    },
    {
      path: 'handymen/5',
      component: ElectriciansComponent
    },
    {
      path: 'handymen/6',
      component: AppliancesTechnicianComponent
    },
    {
      path: 'handymen/7',
      component: OtherComponent
    }
  ])
],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenServiceService,
    multi: true
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
