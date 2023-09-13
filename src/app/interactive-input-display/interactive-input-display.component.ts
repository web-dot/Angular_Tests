import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-interactive-input-display',
  templateUrl: './interactive-input-display.component.html',
  styleUrls: ['./interactive-input-display.component.css']
})
export class InteractiveInputDisplayComponent implements OnInit {


  feeItem: FeeItem[] = [
    {
      itemName: "Hostel Fee",
      itemAmount: 1000
    }
  ]

  itemName: string;
  itemAmount: number;

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
    this.feeItem = this.feeItem.filter(item => item.itemName != undefined && item.itemName.trim() != '')
  }

  addFeeItem(){
    let newItem = new FeeItem();
    newItem.itemAmount = 0;
    this.feeItem.push(newItem);
  }

}

export class FeeItem {
  itemName: string;
  itemAmount: number;
}
