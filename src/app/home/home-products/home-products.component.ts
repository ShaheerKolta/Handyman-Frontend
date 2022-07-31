import { Component, OnInit } from '@angular/core';
import { CraftService } from 'src/app/services/craft.service';
import { RegisterService } from 'src/app/services/register.service';
import { productsDB } from '../../shared/data/products';
@Component({
  selector: 'll-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
  products = [];
  crafts;
  constructor(private craftService: CraftService, private registerService: RegisterService) {
    this.products = productsDB.Product;
  }

  ngOnInit(): void {
    this.GetCraftbyid();
  }
  GetCraftbyid() {
    this.craftService.getCrafts().subscribe(
      res => {
        this.crafts = res;
      },
      err => {}
    );
  }
}
