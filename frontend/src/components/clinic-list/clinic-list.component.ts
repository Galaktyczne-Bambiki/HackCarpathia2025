import { Component, computed, signal } from '@angular/core';
import { ClinicCardComponent } from '../clinic-card/clinic-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputIcon } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

type Clinic = {
  name: string;
  address: string;
  estimatedVisitors: number;
  waitingTime: number;
}

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css'],
  standalone: true,
  imports: [
    ClinicCardComponent,
    InputTextModule,
    FloatLabel,
    FormsModule,
    InputIcon,
    IconFieldModule,
  ],
})
export class ClinicListComponent {
  searchValue = signal('')
  clinics = signal<Clinic[]>([
    { name: 'Przychodnia Specjalistyczna Nr 1', address: 'ul. Hetmańska 21, 35-001 Rzeszów', estimatedVisitors: 45, waitingTime: 150 },
    { name: 'Przychodnia Specjalistyczna Nr 2', address: 'ul. Hetmańska 22, 35-001 Rzeszów', estimatedVisitors: 45, waitingTime: 150 },
    { name: 'Przychodnia Specjalistyczna Nr 3', address: 'ul. Hetmańska 23, 35-001 Rzeszów', estimatedVisitors: 45, waitingTime: 150 },
    { name: 'Przychodnia Specjalistyczna Nr 4', address: 'ul. Hetmańska 24, 35-001 Rzeszów', estimatedVisitors: 45, waitingTime: 150 },
    { name: 'Przychodnia Specjalistyczna Nr 5', address: 'ul. Hetmańska 25, 35-001 Rzeszów', estimatedVisitors: 45, waitingTime: 150 },
    { name: 'Przychodnia Specjalistyczna Nr 6', address: 'ul. Hetmańska 26, 35-001 Rzeszów', estimatedVisitors: 45, waitingTime: 150 },
    { name: 'Przychodnia Specjalistyczna Nr 7', address: 'ul. Hetmańska 27, 35-001 Rzeszów', estimatedVisitors: 45, waitingTime: 150 },
  ])
  filteredClinics = computed(() => this.clinics().filter(clinic => clinic.name.includes(this.searchValue())))
}
