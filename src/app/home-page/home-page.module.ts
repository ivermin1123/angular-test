import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HomePageRoutingModule } from "./home-page-routing.module"
import { HomeComponent } from "./home/home.component"
import { RouterModule } from "@angular/router"
import { HomePageComponent } from "./home-page.component"

@NgModule({
  declarations: [HomePageComponent, HomeComponent],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
