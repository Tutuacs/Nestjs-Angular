import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { ProductBagsComponent } from './pages/product-bags/product-bags.component';
import { ProductAcessoriesComponent } from './pages/product-acessories/product-acessories.component';
import { ProductClothesComponent } from './pages/product-clothes/product-clothes.component';
import { ProductMakeupComponent } from './pages/product-makeup/product-makeup.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { ProductFooterComponent } from './components/product-footer/product-footer.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';




@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductBagsComponent,
    ProductAcessoriesComponent,
    ProductClothesComponent,
    ProductMakeupComponent,
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
