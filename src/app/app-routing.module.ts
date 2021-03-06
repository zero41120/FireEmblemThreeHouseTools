import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LunchPickerComponent } from './lunch-picker/lunch-picker.component';

const routes: Routes = [
  { path: '**', redirectTo: '/lunchPicker', pathMatch: 'full' },
  { path: 'lunchPicker', component: LunchPickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
