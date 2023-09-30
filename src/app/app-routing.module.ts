import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import("./landing-page/landing-page.module").then(m => m.LandingPageModule) },
  { path: "new", loadChildren: () => import("./new-project-page/new-project-page.module").then(m => m.NewProjectPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
