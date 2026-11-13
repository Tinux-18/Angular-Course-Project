import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataService } from '../../services/data.service';
import type { Investment } from '../../models/investment.model';

@Component({
  selector: 'app-investment-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './investment-input.component.html',
  styleUrl: './investment-input.component.css',
})
export class InvestmentInputComponent implements OnInit {
  dataService = inject(DataService);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      initialInvestment: new FormControl(100),
      annualInvestment: new FormControl(100),
      expectedReturn: new FormControl(1),
      duration: new FormControl(1),
    });
  }

  calculate(): void {
    this.dataService.setInvestment(this.form.value as Investment);
  }
}
