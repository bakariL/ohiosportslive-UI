import { Component } from '@angular/core';

@Component({
  selector: 'osl-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.css'],
})
export class ManageSubscriptionComponent {
  plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0 / mo',
      description: 'Access basic schedules, scores, and limited highlights.',
    },
    {
      id: 'pro',
      name: 'OSL Plus',
      price: '$5 / mo',
      description: 'Full game replays, premium highlights, and ad-free viewing.',
    },
  ];

  activePlanId = 'free';

  selectPlan(planId: string): void {
    this.activePlanId = planId;
  }
}
