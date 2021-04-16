import { Injectable } from '@angular/core';

@Injectable()
export class RechercheService {
  recherche: string="";

  constructor() { }

  public getFilter(): string {
    return this.recherche;
  }

  public setFilter(value): void {
    this.recherche = value;
  }

}