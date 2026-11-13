import { Component } from '@angular/core';

interface Pet {
  id: number;
  name: string;
  breed: string;
  age: number;
  gender: string;
  image: string;
  status: string;
}

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.scss'
})
export class PetComponent {
  pets: Pet[] = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    name: 'Buddy',
    breed: 'Mixed breed',
    age: 2,
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=100',
    status: 'Available'
  }));

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'breed', header: 'Breed' },
    { field: 'age', header: 'Age' },
    { field: 'gender', header: 'Gender' },
    { field: 'status', header: 'Status' }
  ];

  openNew(): void { }
  editPet(_pet: Pet): void { }
  deletePet(_pet: Pet): void { }
}
