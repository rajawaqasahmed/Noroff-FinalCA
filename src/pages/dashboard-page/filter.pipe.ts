import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(cardDetail: any, searchTerm: any): any {
    if(searchTerm === undefined) return cardDetail;

    return cardDetail.filter(function(card){
      return card.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }
}
