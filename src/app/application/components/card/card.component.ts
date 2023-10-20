import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from 'src/app/core/interfaces/card.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card | null = null;


  constructor(private router: Router) {

  }

  goToCard() {
    if (this.card && this.card.id) {
      this.router.navigate([`/application/card/${this.card.id}`]);
    }
    
  }
}
