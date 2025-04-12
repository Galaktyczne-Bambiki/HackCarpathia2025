import { Component, OnInit } from '@angular/core';
import { ClinicCardComponent } from '../clinic-card/clinic-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputIcon } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

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
  searchValue: string = '';
}
