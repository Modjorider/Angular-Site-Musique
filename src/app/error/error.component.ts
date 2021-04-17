import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  name: string;
  taille: boolean;

  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;
    this.taille = true;
  }

  ngOnInit(): void {

  }
}
