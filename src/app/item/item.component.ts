import { Component, OnInit } from '@angular/core';
import {Item} from './item';
import {Customer} from '../customer/customer';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  constructor() { }

  ngOnInit() {
  }

  addItem(code: string, name: string, qty: string, unit: string): void {
    const item = new Item(code, name, qty, unit);
    this.items.push(item);
  }

  removeItem(item: Item): void {
    if (confirm('Are you sure ?')) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }

}
