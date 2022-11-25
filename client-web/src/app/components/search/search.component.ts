import { Component } from '@angular/core';
import { MoviePreview } from '../../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchResult?: MoviePreview[];
}
