import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { userRoutes } from './user.routes';

// feature / lazy-loadable module
@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(userRoutes)
  ],
  declarations: [
      ProfileComponent
  ],
  providers: []
})
export class UserModule {}
