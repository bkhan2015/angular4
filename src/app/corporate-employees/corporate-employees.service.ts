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

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<CorporateEmployeesModel[]>{
    return this.http.get<CorporateEmployeesModel[]>(this.employeeUrl)
      .map(employees => employees.sort(employee => {
        return employee.name.localeCompare(employee.name)
      } ))
      .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse){
    console.log(err);
    return Observable.throw(err.message);
  }
}
