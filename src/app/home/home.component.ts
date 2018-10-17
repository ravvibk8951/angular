import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { Leader} from '../shared/leader';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dishes: Dish[];
  promotions: Promotion[];
  leaders:Leader[];

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
  private leaderService : LeaderService) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders);
    this.promotionService.getPromotions().subscribe(promotions => this.promotions = promotions);


  }

}
