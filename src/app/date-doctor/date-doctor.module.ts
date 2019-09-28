import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DateDoctorPage } from './date-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: DateDoctorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DateDoctorPage]
})
export class DateDoctorPageModule {}
