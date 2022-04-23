import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productservice:ProductServiceService,
    private router:Router) { }


  products:any;
  ngOnInit(): void {
    this._productservice.product()
    .subscribe(productData => {
      console.log(productData);
      this.products=productData})
  }

  addProduct(){
    this.router.navigate(['AddNewProduct'])
  }

 
}