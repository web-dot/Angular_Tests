import { Component, OnInit } from '@angular/core';
import { isComponent } from '@angular/core/src/render3/util';
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
  totalAmount : number = 0;
  isReset: boolean = false;

  constructor() { }

  ngOnInit() {
    this.feeItem.forEach(item => {
      console.log("amt", item.itemAmount)
      this.totalAmount = this.totalAmount + item.itemAmount;
    });
  }
  
  onSubmit(){
    this.feeItem = this.feeItem.filter(item => item.itemName != undefined && item.itemName.trim() != '')
  }

  addFeeItem(){
    let newItem = new FeeItem();
    newItem.itemAmount = 0;
    this.feeItem.push(newItem);
  }

  calculateTotalAmount(iComp: number){
    let duplicate = false;
    for(let i=0; i<this.feeItem.length; i++){
      if(i != iComp){
        if(this.feeItem[i].itemName == this.feeItem[iComp].itemName){
          duplicate = true;
          break;
        }
      }
      if(duplicate){
        this.feeItem[i].itemName = "";
      }
    }
    this.isReset = true;
    this.totalAmount = 0;
    
    this.feeItem.forEach(item => {
      if(item.itemAmount){
        this.totalAmount = this.totalAmount + item.itemAmount;
      }
    });
  }

}

export class FeeItem {
  itemName: string;
  itemAmount: number;
}
