import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { Card, CardResponse } from 'src/app/core/interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private api_base: string = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http: HttpClient) { }


  getCards(offset = 0): Observable<Card[]> {
    const params = new HttpParams()
      .set('num', '20')
      .set('offset', offset.toString());

    return this.http.get<CardResponse>(this.api_base, { params }).pipe(
      map((resp: CardResponse) => resp.data),
      catchError(() => throwError(() => new Error('Something went wrong')))
    );
  }

  searchCard(fname: string): Observable<Card[]> {
    const params = new HttpParams().set('fname', fname);

    return this.http.get<CardResponse>(this.api_base, { params }).pipe(
      map((resp: CardResponse) => resp.data),
      catchError(() => throwError(() => new Error('Something went wrong')))
    );
  }

  getCardById(id: string): Observable<Card> {
    const params = new HttpParams().set('id', id);

    return this.http.get<CardResponse>(this.api_base, { params }).pipe(
      map((resp: CardResponse) => {
        return resp.data[0];
      }),
      catchError(() => throwError(() => new Error('Something went wrong')))
    );
  }

}
