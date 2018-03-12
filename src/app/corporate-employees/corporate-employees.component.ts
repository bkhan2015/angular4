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
  public pieChartData: number[] = [];
  order: string = 'name';
  errorMessage: string;
  constructor(private router: Router, private corporateEmplyeesService: CorporateEmployeesService) { }

  ngOnInit() {
    this.corporateEmplyeesService.getEmployees().subscribe(
      employees => {
        this.employees = employees,
        this.pieChartData = this.corporateEmplyeesService.totalJobTitle,
        error => this.errorMessage = error
      }
    );
  }
  // pie
  public pieChartLabels: string[] = ['QA', 'Developer', 'Marketing Specialist', 'CFO', 'CEO'];

  pieChartType:string = 'pie';
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
}
