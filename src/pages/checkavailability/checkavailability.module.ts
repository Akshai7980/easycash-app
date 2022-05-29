import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckavailabilityPage } from './checkavailability';

@NgModule({
  declarations: [
    CheckavailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckavailabilityPage),
  ],
})
export class CheckavailabilityPageModule {}
