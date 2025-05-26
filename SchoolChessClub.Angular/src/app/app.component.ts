import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { ContentComponent } from './content/content.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent]
})
export class AppComponent {
  
}
