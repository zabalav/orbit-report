import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Vince's Angular Page";
  name: string = "Vince Z";
  itemList: string[] = ["item1", "item2", "item3", "item4"];
  	
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
      return this.length * this.width;
    }
  }
}
