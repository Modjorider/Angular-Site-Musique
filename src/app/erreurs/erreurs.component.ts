import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-erreurs',
  templateUrl: './erreurs.component.html',
  styleUrls: ['./erreurs.component.css']
})
export class ErreursComponent implements OnInit {
  name: string;
  taille: boolean= true;


  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.url[this.route.snapshot.url.length-1].path;
  }


  ngOnInit(): void {
  }

}
