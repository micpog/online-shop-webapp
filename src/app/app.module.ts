import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserComponent } from './navigation-bar/user/user.component';
import { ShoppingCartComponent } from './navigation-bar/shopping-cart/shopping-cart.component';
import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';
import { ProductComponent } from './products-carousel/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    UserComponent,
    ShoppingCartComponent,
    ProductsCarouselComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
