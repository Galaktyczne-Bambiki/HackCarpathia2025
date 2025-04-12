import { Component, OnInit, viewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapInfoWindow,  } from '@angular/google-maps';
import environment from '../../environments/environment';

type ClinicMarker = {
  lat: number;
  lng: number;
  label: string;
  content: HTMLElement
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  imports: [GoogleMapsModule],
  standalone: true,
})
export class MapComponent implements OnInit {
  map = viewChild.required(GoogleMap)
  infoWindow = viewChild<MapInfoWindow>('infoWindow')

  options: google.maps.MapOptions = {
    mapId: environment.mapId,
    disableDefaultUI: true,
    colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? google.maps.ColorScheme.DARK
      : google.maps.ColorScheme.LIGHT,
  }
  center: google.maps.LatLngLiteral = {
    lat: 50.027666,
    lng: 21.9983901
  }
  zoom = 16
  markers: ClinicMarker[] = [
    { lat: 50.027666, lng: 21.9983901, label: 'A' },
    { lat: 50.028666, lng: 21.9993901, label: 'B' },
    { lat: 50.029666, lng: 22.0003901, label: 'C' },
    { lat: 50.030666, lng: 22.0013901, label: 'D' },
    { lat: 50.031666, lng: 22.0023901, label: 'E' },
    { lat: 50.032666, lng: 22.0033901, label: 'F' },
    { lat: 50.033666, lng: 22.0043901, label: 'G' },
    { lat: 50.034666, lng: 22.0053901, label: 'H' },
    { lat: 50.035666, lng: 22.0063901, label: 'I' },
    { lat: 50.036666, lng: 22.0073901, label: 'J' }
  ].map(item => {
    const icon = document.createElement('i')
    icon.className = 'pi pi-map-marker'
    icon.style.color = 'var(--p-button-primary-background)'
    icon.style.fontSize = '2rem'

    return {
      ...item,
      content: icon
    }
  })

  ngOnInit(): void {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   };
    // });
  }

  handleMarkerClick(event: google.maps.MapMouseEvent, elem: HTMLElement) {
    console.log(elem)
    // this.infoWindow()?.open(elem)
  }
}


// <i class="pi pi-check"></i>