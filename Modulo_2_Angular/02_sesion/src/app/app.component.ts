import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './Components/card/card.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PROYECTO1';
  miNombre='Jorge Armando';
  miEmpresa='Megacable';
}
