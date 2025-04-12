import {
  AfterViewInit,
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

@Component({
  selector: 'app-clinic-detils-dialog',
  templateUrl: './clinic-detils-dialog.component.html',
  styleUrls: ['./clinic-detils-dialog.component.css'],
  standalone: true,
  imports: [DialogModule, TagModule, ChartModule],
})
export class ClinicDetilsDialogComponent implements AfterViewInit {
  clinicDetails = input<ClinicDetails>();
  visible = input(false);
  visibleChange = output<boolean>();
  traffic = signal<HourlyTraffic[]>([
    {
      hour: '7:00',
      totalVisitors: 10,
      trafficStatus: 'low',
    },
    {
      hour: '8:00',
      totalVisitors: 20,
      trafficStatus: 'low',
    },
    {
      hour: '9:00',
      totalVisitors: 34,
      trafficStatus: 'medium',
    },
    {
      hour: '10:00',
      totalVisitors: 32,
      trafficStatus: 'medium',
    },
    {
      hour: '12:00',
      totalVisitors: 50,
      trafficStatus: 'high',
    },
    {
      hour: '13:00',
      totalVisitors: 45,
      trafficStatus: 'high',
    },
    {
      hour: '14:00',
      totalVisitors: 29,
      trafficStatus: 'medium',
    },
    {
      hour: '15:00',
      totalVisitors: 24,
      trafficStatus: 'medium',
    },
    {
      hour: '16:00',
      totalVisitors: 12,
      trafficStatus: 'low',
    },
  ]);

  basicData: any;
  basicOptions: any;
  platformId = inject(PLATFORM_ID);
  private cd = inject(ChangeDetectorRef);

  ngAfterViewInit() {
    this.initChart();
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
            backgroundColor: ['rgba(147, 197, 253, 0.2)'],
            borderColor: ['rgb(147, 197, 253)'],
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
