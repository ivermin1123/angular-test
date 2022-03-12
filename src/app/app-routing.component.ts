import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomePageRoutingModule } from "./home-page/home-page-routing.module"

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home-page/home-page.module").then(m => m.HomePageModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
