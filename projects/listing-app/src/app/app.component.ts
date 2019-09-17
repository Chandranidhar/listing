import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { switchMap, map, takeWhile } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listing-app';
}
