import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from '../components/logo/logo.component';
import { ClinicListComponent } from '../components/clinic-list/clinic-list.component';
import environment from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent, LogoComponent, ClinicListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  showApp = signal(false)

  ngOnInit(): void {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`
    script.onload = () => this.showApp.set(true)
    
    document.head.appendChild(script)
  }
}
