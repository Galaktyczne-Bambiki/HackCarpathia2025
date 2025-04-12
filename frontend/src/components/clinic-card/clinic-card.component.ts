import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-clinic-card',
  imports: [ButtonModule, CardModule],
  template: `
    <p-card>
      <ng-template #title> {{ clinicName() }} </ng-template>
      <ng-template #subtitle> {{ address() }} </ng-template>
      <div class="mt-card__info">
        <div class="mt-card__info-box">
          <span class="pi pi-users"></span>
          <span class="mt-card__info-text">Szacowana liczba osób:</span>
          <span class="mt-card__estimated-value">{{
            estimatedVisitors()
          }}</span>
        </div>
        <div class="mt-card__info-box">
          <span class="pi pi-clock"></span>
          <span class="mt-card__info-text">Szacowany czas oczekiwania:</span>
          <span class="mt-card__estimated-value"
            >{{ waitingTime() }} minut</span
          >
        </div>
      </div>
      <ng-template #footer>
        <div class="flex gap-4 mt-1">
          <p-button label="Szczegóły" />
        </div>
      </ng-template>
    </p-card>
  `,
  styleUrl: './clinic-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClinicCardComponent {
  clinicName = input<string>();
  address = input<string>();
  estimatedVisitors = input<number>();
  waitingTime = input<number>();
}
