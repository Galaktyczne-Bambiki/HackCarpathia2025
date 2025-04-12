import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ClinicDetilsDialogComponent } from '../clinic-detils-dialog/clinic-detils-dialog.component';
import { TagModule } from 'primeng/tag';
import { ClinicDetails } from '../clinic-list/clinic-list.types';

@Component({
  selector: 'app-clinic-card',
  imports: [ButtonModule, CardModule, ClinicDetilsDialogComponent, TagModule],
  templateUrl: './clinic-card.component.html',
  styleUrl: './clinic-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClinicCardComponent {
  clinicDetails = input<ClinicDetails>();
  dialogVisible = signal<boolean>(false);

  iconColor = computed(() => {
    if (this.clinicDetails()?.trafficStatus === 'medium')
      return `color: var(--p-tag-warn-color)`;

    if (this.clinicDetails()?.trafficStatus === 'high')
      return `color: var(--p-tag-danger-color)`;

    if (this.clinicDetails()?.trafficStatus === 'veryHigh')
      return `color: var(--p-tag-danger-color)`;

    return `color: var(--p-tag-success-color)`;
  });

  showDetails() {
    this.dialogVisible.set(true);
  }
}
