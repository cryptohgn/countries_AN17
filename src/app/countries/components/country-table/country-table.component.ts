import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { NgIf } from '@angular/common';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
  img {
    width: 2em;
  }
  `
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = []

}
