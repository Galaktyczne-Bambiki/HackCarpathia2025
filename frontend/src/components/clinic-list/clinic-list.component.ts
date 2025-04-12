import { Component, computed, input, output, signal } from '@angular/core';
import { ClinicCardComponent } from '../clinic-card/clinic-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputIcon } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ClinicDetails } from './clinic-list.types';
import { DialogModule } from 'primeng/dialog';

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
    DialogModule,
],
})
export class ClinicListComponent {
  searchValue = signal('');
  clinics = input.required<ClinicDetails[]>();
  clinicClicked = output<ClinicDetails>();
  filteredClinics = computed(() =>
    this.clinics().filter((clinic) =>
      clinic.name
        .toLocaleLowerCase()
        .includes(this.searchValue().toLocaleLowerCase())
    )
  );
}
