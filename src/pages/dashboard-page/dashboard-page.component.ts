import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from './../../services/card-service.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [CardService]
})
export class DashboardPageComponent implements OnInit {

  public cardDetail: Array<any>;

  constructor(protected router: Router, protected cardService: CardService) {
   }

  ngOnInit() {
    this.cardService.getCardData()
    .subscribe(
      card => {
      this.cardDetail = card.cards;
    });
  }

  onSelect(cardReceived){
    console.log("id passed here is: ", cardReceived.id);
    this.router.navigate(['/card-specific',cardReceived.id]);
  }
}
