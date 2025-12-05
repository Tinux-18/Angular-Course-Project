import { Injectable, signal, computed } from '@angular/core';
import { Investment, InvestmentResult } from '../models/investment.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  // Writable signal - null by default (not initialized until data is sent)
  private investmentSignal = signal<Investment | null>(null);

  // Expose as read-only signal
  investment = this.investmentSignal.asReadonly();

  // Computed signal - check if data has been received
  hasData = computed(() => this.investment() !== null);

  // Computed signal - investment results table data
  investmentResults = computed<InvestmentResult[]>(() => {
    const investment = this.investment();
    if (investment === null) {
      return [];
    }
    return this.calculateInvestmentResults(investment);
  });

  // Method to send investment data
  setInvestment(investment: Investment) {
    this.investmentSignal.set(investment);
  }

  // Method to clear (back to null/uninitialized)
  clear() {
    this.investmentSignal.set(null);
  }

  // Calculate investment results for each year
  private calculateInvestmentResults(
    investment: Investment
  ): InvestmentResult[] {
    const annualData = [];
    let investmentValue = investment.initialInvestment;

    for (let i = 0; i < investment.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investment.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investment.annualInvestment;
      const totalInterest =
        investmentValue -
        investment.annualInvestment * year -
        investment.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investment.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investment.initialInvestment + investment.annualInvestment * year,
      });
    }

    return annualData;
  }
}
