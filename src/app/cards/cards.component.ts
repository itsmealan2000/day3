import { Component } from '@angular/core';
import { district } from 'src/assets/data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  
    item = { name: 'Example Card' };
    ite = { des: 'Example description'};
    items = district;
   
}
