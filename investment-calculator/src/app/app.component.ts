import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InvestmentInputComponent } from './components/investment-input/investment-input.component';
import { InvestmentTableComponent } from './components/investment-table/investment-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    InvestmentInputComponent,
    InvestmentTableComponent,
  ],
})
export class AppComponent {}
