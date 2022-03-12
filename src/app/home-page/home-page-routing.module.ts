import { Component, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomePageComponent } from "./home-page.component"
import { HomeComponent } from "./home/home.component"

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
