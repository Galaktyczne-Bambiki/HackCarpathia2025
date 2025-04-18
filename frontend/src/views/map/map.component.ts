import { Component, computed, OnInit, signal, viewChild } from '@angular/core';
import {
  GoogleMap,
  GoogleMapsModule,
  MapInfoWindow,
} from '@angular/google-maps';
import environment from '../../environments/environment';
import { ClinicListComponent } from '../../components/clinic-list/clinic-list.component';
import { ClinicDetails } from '../../components/clinic-list/clinic-list.types';
import { ClinicDetilsDialogComponent } from '../../components/clinic-detils-dialog/clinic-detils-dialog.component';
import { clinics } from '../../mocks';
import { ascend } from 'ramda'

type ClinicMarker = {
  lat: number;
  lng: number;
  label: string;
  content: HTMLElement;
  id: string;
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  imports: [GoogleMapsModule, ClinicListComponent, ClinicDetilsDialogComponent],
  standalone: true,
})
export class MapComponent implements OnInit {
  map = viewChild.required(GoogleMap);
  infoWindow = viewChild<MapInfoWindow>('infoWindow');
  clinicToShow = signal<ClinicDetails | null>(null);

  options: google.maps.MapOptions = {
    mapId: environment.mapId,
    disableDefaultUI: true,
    colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? google.maps.ColorScheme.DARK
      : google.maps.ColorScheme.LIGHT,
  };
  center: google.maps.LatLngLiteral = {
    lat: 50.027666,
    lng: 21.9983901,
  };
  zoom = 16;
  clinics = signal<ClinicDetails[]>(clinics.sort(ascend(item => item.waitingTime)));
  markers = computed<ClinicMarker[]>(() =>
    this.clinics().map((item) => {
      const icon = document.createElement('i');
      icon.className = 'pi pi-map-marker';
      icon.style.color = 'var(--p-button-primary-background)';
      icon.style.fontSize = '2rem';
      icon.style.backgroundColor = 'var(--p-card-background)';
      icon.style.padding = '0.5rem';
      icon.style.borderRadius = '50%';
      icon.style.border = '2px solid var(--p-button-primary-background)';

      return {
        label: item.name,
        lat: item.lat,
        lng: item.lng,
        content: icon,
        id: item.id,
      };
    })
  );

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  handleClinicClick(clinic: ClinicDetails) {
    this.map().panTo({ lat: clinic.lat, lng: clinic.lng });
    this.clinicToShow.set(clinic);
  }

  handleMarkerClick(event: google.maps.MapMouseEvent, id: string) {
    event.latLng && this.map().panTo(event.latLng.toJSON());

    const clinic = this.clinics().find((item) => item.id === id);

    clinic && this.clinicToShow.set(clinic);
  }
}
