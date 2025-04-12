import {
  Component,
  computed,
  input,
  linkedSignal,
  output,
  signal,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ClinicDetails } from '../clinic-list/clinic-list.types';

@Component({
  selector: 'app-clinic-detils-dialog',
  templateUrl: './clinic-detils-dialog.component.html',
  styleUrls: ['./clinic-detils-dialog.component.css'],
  standalone: true,
  imports: [DialogModule],
})
export class ClinicDetilsDialogComponent {
  clinicDetails = input<ClinicDetails>();
  visible = input(false);
  visibleChange = output<boolean>();
}
