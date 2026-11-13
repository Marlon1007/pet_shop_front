import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Breed, BreedService } from '../services/breed.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.scss'
})
export class BreedComponent implements OnInit {
  private readonly breedService = inject(BreedService);
  breeds: Breed[] = [];
  visible = false;
  saving = false;
  breedId = -1;
  errorMessage = '';
  readonly breedForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  ngOnInit(): void {
    this.getBreeds();
  }

  getBreeds(): void {
    this.errorMessage = '';
    this.breedService.getBreeds().subscribe({
      next: (breeds) => this.breeds = breeds,
      error: (error: HttpErrorResponse) => this.showError(error, 'Unable to load breeds.')
    });
  }

  showDialog(): void {
    this.breedId = -1;
    this.breedForm.reset();
    this.errorMessage = '';
    this.visible = true;
  }

  editBreed(breed: Breed): void {
    this.breedId = breed.id;
    this.breedForm.setValue({ name: breed.name });
    this.errorMessage = '';
    this.visible = true;
  }

  deleteBreed(breed: Breed): void {
    Swal.fire({
      title: 'Delete this breed?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.breedService.deleteBreed(breed.id).subscribe({
          next: () => {
            this.breedId = -1;
            this.getBreeds();
            this.alert('Deleted', 'The breed was deleted.', 'success');
          },
          error: (error: HttpErrorResponse) => this.showError(error, 'Unable to delete the breed.')
        });
      }
    });
  }

  saveBreed(): void {
    const name = this.breedForm.controls.name.value.trim();
    if (this.saving) {
      return;
    }
    if (this.breedForm.invalid || !name) {
      this.breedForm.controls.name.setErrors({ required: true });
      this.breedForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.errorMessage = '';
    const editing = this.breedId > 0;
    const request = editing ? this.breedService.updateBreed(this.breedId, name) : this.breedService.saveBreed(name);
    request.subscribe({
      next: () => {
        this.saving = false;
        this.visible = false;
        this.breedId = -1;
        this.breedForm.reset();
        this.getBreeds();
        this.alert(editing ? 'Updated' : 'Saved', `The breed was ${editing ? 'updated' : 'saved'}.`, 'success');
      },
      error: (error: HttpErrorResponse) => {
        this.saving = false;
        this.showError(error, 'Unable to save the breed. It may already exist.');
      }
    });
  }

  private showError(error: HttpErrorResponse, fallback: string): void {
    this.errorMessage = error.status === 401 ? 'Your session has expired. Please sign in again.' : fallback;
    this.alert('Error', this.errorMessage, 'error');
  }

  private alert(title: string, text: string, icon: SweetAlertIcon): void {
    void Swal.fire({ title, text, icon });
  }
}
