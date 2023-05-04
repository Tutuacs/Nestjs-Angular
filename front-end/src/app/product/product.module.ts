import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { ProductBagsComponent } from './pages/product-bags/product-bags.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { ProductFooterComponent } from './components/product-footer/product-footer.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';




@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductBagsComponent,
    ProductDetailsComponent,
    ProductHeaderComponent,
    ProductFooterComponent,
    SubCategoryComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
