import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  getPromotions(): Observable<Promotion[]> {
     return of(PROMOTIONS).pipe(delay(2000));
   }

   getPromotion(id: number): Observable<Promotion> {
     return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000));
   }

   getFeaturedPromoiton(): Observable<Promotion> {
     return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
   }


  constructor() { }
}
