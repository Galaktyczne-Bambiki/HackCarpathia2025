import { Component, computed, signal } from '@angular/core';
import { ClinicCardComponent } from '../clinic-card/clinic-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputIcon } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ClinicDetails } from './clinic-list.types';

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
  searchValue = signal('');
  clinics = signal<ClinicDetails[]>([
    {
      id: 'id-1',
      name: 'Przychodnia Specjalistyczna Nr 1',
      address: 'ul. Hetmańska 21, 35-001 Rzeszów',
      estimatedVisitors: 20,
      waitingTime: 110,
      availableProcedureTypes: ['dietetyk', 'okulista', 'kardiolog'],
      trafficStatus: 'medium',
    },
    {
      id: 'id-2',
      name: 'Przychodnia Specjalistyczna Nr 2',
      address: 'ul. Hetmańska 21, 35-001 Rzeszów',
      estimatedVisitors: 60,
      waitingTime: 240,
      availableProcedureTypes: ['dietetyk', 'okulista', 'kardiolog'],
      trafficStatus: 'high',
    },
    {
      id: 'id-3',
      name: 'Przychodnia Specjalistyczna Nr 3',
      address: 'ul. Hetmańska 21, 35-001 Rzeszów',
      estimatedVisitors: 5,
      waitingTime: 30,
      availableProcedureTypes: ['dietetyk', 'okulista', 'kardiolog'],
      trafficStatus: 'low',
    },
    {
      id: 'id-4',
      name: 'Przychodnia Specjalistyczna Nr 3',
      address: 'ul. Hetmańska 21, 35-001 Rzeszów',
      estimatedVisitors: 5,
      waitingTime: 30,
      availableProcedureTypes: ['dietetyk', 'okulista', 'kardiolog'],
      trafficStatus: 'low',
    },
    {
      id: 'id-5',
      name: 'Przychodnia Specjalistyczna Nr 3',
      address: 'ul. Hetmańska 21, 35-001 Rzeszów',
      estimatedVisitors: 5,
      waitingTime: 30,
      availableProcedureTypes: ['dietetyk', 'okulista', 'kardiolog'],
      trafficStatus: 'low',
    },
  ]);
  filteredClinics = computed(() =>
    this.clinics().filter((clinic) =>
      clinic.name
        .toLocaleLowerCase()
        .includes(this.searchValue().toLocaleLowerCase())
    )
  );
}
