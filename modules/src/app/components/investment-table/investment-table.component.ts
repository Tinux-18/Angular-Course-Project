import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css',
})
export class InvestmentTableComponent {
  dataService = inject(DataService);
}
