import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { CorporateEmployeesModel } from './corporate-employees.model';

@Injectable()
export class CorporateEmployeesService {
  private employeeUrl = './assets/data/corporate_employees.json';
  totalDev: number = 0;
  totalQA: number = 0;
  totalCEO: number = 0;
  totalCFO: number = 0;
  totalMarketing: number = 0;
  totalJobTitle:number[] = [];
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<CorporateEmployeesModel[]>{
    return this.http.get<CorporateEmployeesModel[]>(this.employeeUrl)
      .map(employees => employees.sort(employee => {
        if (employee.jobTitle === 'QA') {
          this.totalQA = this.totalQA + 1;
        }
        if (employee.jobTitle === 'Developer') {
          this.totalDev = this.totalDev + 1;
        }
        if (employee.jobTitle === 'Marketing Specialist') {
          this.totalMarketing = this.totalMarketing + 1;
        }
        if (employee.jobTitle === 'CEO') {
          this.totalCEO = this.totalCEO + 1;
        }
        if (employee.jobTitle === 'CFO') {
          this.totalCFO = this.totalCFO + 1;
        }
        this.totalJobTitle =[this.totalQA, this.totalDev, this.totalMarketing, this.totalCEO, this.totalCFO];
        return employee.name.localeCompare(employee.name)
      }) )
      .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse){
    console.log(err);
    return Observable.throw(err.message);
  }

}
