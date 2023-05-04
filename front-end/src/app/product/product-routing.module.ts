import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductHomeComponent } from "./pages/product-home/product-home.component";

import { ProductBagsComponent } from "./pages/product-bags/product-bags.component";
import { ProductAcessoriesComponent } from "./pages/product-acessories/product-acessories.component";
import { ProductMakeupComponent } from "./pages/product-makeup/product-makeup.component";
import { ProductClothesComponent } from "./pages/product-clothes/product-clothes.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { SubCategoryComponent } from "./sub-category/sub-category.component";

const routes: Routes = [
    {
        path: 'bags/:id',
        component: SubCategoryComponent,
    },
    {
        path: '',
        component: ProductHomeComponent
    },
    {
        path: 'bags',
        component: ProductBagsComponent,
    },
    {
        path: 'details/:id',
        component:ProductDetailsComponent,
    },
    {
        path: 'acessories',
        component: ProductAcessoriesComponent,
    },
    {
        path: 'makeup',
        component: ProductMakeupComponent,
    },
    {
        path: 'clothes',
        component: ProductClothesComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}