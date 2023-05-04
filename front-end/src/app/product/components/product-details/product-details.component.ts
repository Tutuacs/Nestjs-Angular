import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { async } from 'rxjs/internal/scheduler/async';

declare var valores:any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: any;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    public productService: ProductService,
  ) { }

  ngOnInit(): void {


      this.activatedRoute.params.subscribe(url => {
        this.productService.getProductId(url['id']).subscribe(
          data => {
            this.product = data;
          }
        );
      });

    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
      },
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          name: this.product.title,
          description: this.product.description,
          purchase_units: [{
            amount: {
              currency_code: 'BRL',
              value: this.product.price,
            }
          }]
        });
      },

      onApprove: (data: any, actions: any) => {
        return actions.order.capture()
          .then(function (details: any) {
            console.log(details);
          });
      },
      onCancel: (data: any, actions: any) => {
        return actions.redirect('/');
      },
      onError: (err: any) => {
        console.log('ERROR : ', err);
      },
    }).render('#paypalRef');

  }

}

