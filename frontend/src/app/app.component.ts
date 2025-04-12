import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from '../components/logo/logo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
