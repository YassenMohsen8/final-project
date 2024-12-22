import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstracanp'; // Import NgbModule

@NgModule({
  declarations: [StarRatingComponent],
  imports: [
    CommonModule,
    // NgbModule
  ],
  exports: [
    StarRatingComponent
  ]
})
export class FeatureModule { }
