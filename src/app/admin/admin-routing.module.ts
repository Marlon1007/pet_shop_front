import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PetComponent } from './inventory/pet/pet.component';
import { BreedComponent } from './inventory/breed/breed.component';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'pets',
        component: PetComponent
      },
      {
        path: 'breeds',
        component: BreedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
