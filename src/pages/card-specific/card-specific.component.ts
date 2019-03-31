import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from './../../services/card-service.service';

//import { parse } from 'path';
@Component({
  selector: 'app-card-specific',
  templateUrl: './card-specific.component.html',
  styleUrls: ['./card-specific.component.scss'],
  providers: [CardService]
})
export class CardSpecificComponent implements OnInit {
  public AllCards: Array<any>;
  public cardSelected: any;
  constructor(private route: ActivatedRoute, protected cardService: CardService) { }

  ngOnInit() {
     let id= this.route.snapshot.paramMap.get('id');
     console.log("ID got: ", id);
     
     //this.cardId = id;


     this.cardService.getCardData()
     .subscribe(
       card => {
        console.log(" ids are:", card.cards); 
       this.AllCards = card.cards;
       for(let thiscard of card.cards){
        // console.log("all card id", thiscard.id);
           if(thiscard.id == id){
            this.cardSelected = thiscard;
            console.log("cardSelected id", this.cardSelected.id);
           }
       }
     });








    //  for(let thiscard of this.AllCards)
    //  {
    //   if(thiscard.id === id){
    //     this.cardSelected = thiscard;
    //   }
    //  }

    //  console.log("ID got: ", cardSelected.id);
  }

}
