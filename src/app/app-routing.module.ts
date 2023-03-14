import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "about", component: AboutComponent },
{ path: "product", component: ProductComponent },
{ path: "search", component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
