import {
  ChangeDetectorRef,
  Component,
  inject,
  input,
  output,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ClinicDetails } from '../clinic-list/clinic-list.types';
import { TagModule } from 'primeng/tag';
import { HourlyTraffic } from './clinic-details-dialog';
import { ChartModule } from 'primeng/chart';
import { isPlatformBrowser } from '@angular/common';
import { DayRangePipe } from './day-range.pipe';
import { effect } from '@angular/core';

@Component({
  selector: 'app-clinic-detils-dialog',
  templateUrl: './clinic-detils-dialog.component.html',
  styleUrls: ['./clinic-detils-dialog.component.css'],
  standalone: true,
  imports: [DialogModule, TagModule, ChartModule, DayRangePipe],
})
export class ClinicDetilsDialogComponent  {
  clinicDetails = input<ClinicDetails>();
  visible = input(false);
  visibleChange = output<boolean>();
  traffic = signal<HourlyTraffic[]>([
    {
      hour: 7,
      totalVisitors: 10,
      trafficStatus: 'low',
    },
    {
      hour: 8,
      totalVisitors: 20,
      trafficStatus: 'low',
    },
    {
      hour: 9,
      totalVisitors: 34,
      trafficStatus: 'medium',
    },
    {
      hour: 10,
      totalVisitors: 32,
      trafficStatus: 'medium',
    },
    {
      hour: 11,
      totalVisitors: 50,
      trafficStatus: 'high',
    },
    {
      hour: 12,
      totalVisitors: 45,
      trafficStatus: 'high',
    },
    {
      hour: 13,
      totalVisitors: 29,
      trafficStatus: 'medium',
    },
    {
      hour: 14,
      totalVisitors: 24,
      trafficStatus: 'medium',
    },
    {
      hour: 15,
      totalVisitors: 12,
      trafficStatus: 'low',
    },
  ]);

  basicData: any;
  basicOptions: any;
  platformId = inject(PLATFORM_ID);
  private cd = inject(ChangeDetectorRef);

  constructor() {
    effect(() => {
      if (this.clinicDetails()) {
        this.initChart();
      }
    })
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--p-text-muted-color'
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        '--p-content-border-color'
      );

      this.basicData = {
        labels: this.traffic().map((traffic) => traffic.hour),
        datasets: [
          {
            label: 'Prognozowane natężenie osób w przychodni',
            data: this.traffic().map((traffic) => traffic.totalVisitors),
            backgroundColor: this.traffic().map((traffic) => new Date().getHours() === traffic.hour ? 'rgba(253, 147, 147, 0.2)' : 'rgba(147, 197, 253, 0.2)'),
            borderColor: this.traffic().map((traffic) => new Date().getHours() === traffic.hour ? 'rgb(253, 147, 147)' : 'rgb(147, 197, 253)'),
            borderWidth: 1,
            barPercentage: 1,
            categoryPercentage: 1,
          },
        ],
      };

      this.basicOptions = {
        plugins: {
          legend: {
            display: false,
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              color: textColorSecondary,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}
