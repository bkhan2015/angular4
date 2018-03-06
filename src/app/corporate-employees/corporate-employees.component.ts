import {Component, OnInit, Pipe} from '@angular/core';
import { Router } from '@angular/router';
import {CorporateEmployeesService} from './corporate-employees.service';
import {CorporateEmployeesModel} from './corporate-employees.model';

@Component({
  selector: 'app-corporate-employees',
  templateUrl: './corporate-employees.component.html',
  styleUrls: ['./corporate-employees.component.css']
})

export class CorporateEmployeesComponent implements OnInit {
  employees: CorporateEmployeesModel[] = [];
  errorMessage: string;

  constructor(private router: Router, private corporateemplyeesservice: CorporateEmployeesService) { }

  ngOnInit() {
  this.corporateemplyeesservice.getEmployees().subscribe(
    employees => this.employees = employees,
    error => this.errorMessage = error
  )
  }
}
