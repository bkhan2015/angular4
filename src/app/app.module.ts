import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CorporateEmployeesComponent } from './corporate-employees/corporate-employees.component';
import { CorporateEmployeesService } from './corporate-employees/corporate-employees.service';

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
    RouterModule.forRoot(
      <Routes>routes, {enableTracing: true} // <-- debugging -->
    )
  ],
  providers: [CorporateEmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
