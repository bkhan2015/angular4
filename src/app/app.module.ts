import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { CorporateEmployeesComponent } from './corporate-employees/corporate-employees.component';
import { CorporateEmployeesService } from './corporate-employees/corporate-employees.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: 'corporate-employees', pathMatch: 'full'},
  {path: 'corporate-employees', component: CorporateEmployeesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CorporateEmployeesComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ChartsModule,
    Ng2OrderModule,
    RouterModule.forRoot(
      <Routes>routes, {enableTracing: true} // <-- debugging -->
    )
  ],
  providers: [CorporateEmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
