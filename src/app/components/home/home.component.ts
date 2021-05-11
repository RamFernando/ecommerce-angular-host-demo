import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModelServer, serverResponse} from "../../models/product.model";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  products: ProductModelServer[] = [];

  public testProducts = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router:Router) {
  }

  ngOnInit() {
    this.productService.showMessage();

    this.productService.getAllProducts().subscribe((prods: ProductModelServer[] ) => {
      this.products = prods;
      console.log(prods);
    });
    
  }

  AddProduct(id: Number) {
    this.cartService.AddProductToCart(id);
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
}
