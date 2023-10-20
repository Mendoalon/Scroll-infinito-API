import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { Card } from 'src/app/core/interfaces/card.interface';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {
  id: string = '';
  isLoading: boolean = true;
  card$!: Observable<Card>;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.card$ = this.cardService.getCardById(this.id).pipe(
      tap(() => {
        this.isLoading = false;
      })
    );
  }


}
