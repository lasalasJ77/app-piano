import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-piano';

  aplicarSonido(numero: number): void {
    const audio = new Audio();
    audio.src = '/sonidos/note' + numero + '.mp3';
    audio.load();
    audio.play();
  }
}
