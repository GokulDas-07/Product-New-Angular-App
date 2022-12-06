import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productid=""
  productname=""
  manufacture=""
  expiry=""
  brand=""
  price=""
  seller=""
  distributor=""


  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"productid":this.productid,"productname":this.productname,"manufacture":this.manufacture,"expiry":this.expiry,"brand":this.brand,
    "price":this.price,"seller":this.seller,"distributor":this.distributor}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        alert("product added")
        this.productid=""
        this.productname=""
        this.manufacture=""
        this.expiry=""
        this.brand=""
        this.price=""
        this.seller=""
        this.distributor=""
      }
    )
  }
  

}
