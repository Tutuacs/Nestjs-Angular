import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  public href!: string;
  subCategory: any;
  routeName!: string;

  constructor(private readonly activatedRout: ActivatedRoute,
    public productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(
      data => {
        this.routeName = data['id']
        this.productService.getSubCategory(data['id']).subscribe(
          products => {
            this.subCategory = products
          }
        )
      }
    )
  }

}
