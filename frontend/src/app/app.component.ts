import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from '../components/logo/logo.component';
import { ClinicListComponent } from '../components/clinic-list/clinic-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent, LogoComponent, ClinicListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
