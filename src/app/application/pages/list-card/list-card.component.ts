import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from 'src/app/core/interfaces/card.interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  cards: Card[] = [];
  isLoading: boolean = false;
  firstLoad: boolean = true;
  offset: number = 0;
  searchTerm = new FormControl('');

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.searchTerm.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((term: string | null) => {
      if (term !== null) {
        this.searchCard(term);
      }
    });

    this.getCards();
  }

  getCards(): void {
    if (this.isLoading) {
      return; // Evitar múltiples solicitudes mientras se está cargando
    }
    this.isLoading = true;

    this.cardService.getCards(this.offset).subscribe({
      next: (cards: Card[]) => {
        this.isLoading = false;
        this.cards = this.cards.concat(cards);
        if (this.firstLoad) {
          this.firstLoad = false;
        }
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('Error fetching cards:', error);
      }
    });
  }

  searchCard(term: string): void {
    this.isLoading = true;
    this.cards = []; // Limpiar los datos existentes
    this.cardService.searchCard(term).subscribe({
      next: (cards: Card[]) => {
        this.cards = cards;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('Error fetching cards:', error);
      }
    });
  }

  onScroll() {
    if (!this.isLoading) {
      this.offset += 20;
      this.getCards();
    }

  }


}
