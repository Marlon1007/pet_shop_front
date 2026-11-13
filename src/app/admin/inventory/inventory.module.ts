import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { PetComponent } from './pet/pet.component';
import { BreedComponent } from './breed/breed.component';

@NgModule({
  declarations: [BreedComponent, PetComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, DialogModule, InputTextModule, TableModule, ToolbarModule],
  exports: [BreedComponent, PetComponent]
})
export class InventoryModule { }
