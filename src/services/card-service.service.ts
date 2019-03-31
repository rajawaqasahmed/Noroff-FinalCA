import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private url = 'https://api.magicthegathering.io/v1/cards';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {
   }

  getCardData(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        console.log(response.json());
        return response.json();
      })
    );
  }
}
