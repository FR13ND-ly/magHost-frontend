import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectPageComponent } from './new-project-page.component';
import { RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { FilesComponent } from './files/files.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewProjectPageComponent,
  ],
  imports: [
    CommonModule,
    ResultComponent,
    FilesComponent,
    FormsModule,
    RouterModule.forChild([
      { path: "", component: NewProjectPageComponent }
    ])
  ]
})
export class NewProjectPageModule { }
