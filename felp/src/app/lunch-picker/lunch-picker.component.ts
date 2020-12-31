import { Component, OnInit } from '@angular/core';
import { LunchProviderService } from '../services/lunch-provider.service';
import { LunchDishCharacters } from '../types/lunch-dish-characters';
import { CharacterIconFetcherService } from '../services/character-icon-fetcher.service';

@Component({
  selector: 'app-lunch-picker',
  templateUrl: './lunch-picker.component.html',
  styleUrls: ['./lunch-picker.component.less']
})
export class LunchPickerComponent implements OnInit {

  selectedCharacter1: string;
  selectedCharacter2: string;
  lunches: Array<LunchDishCharacters>;
  characters: Array<string>

  constructor(
    private lunchProvider: LunchProviderService,
    private imageProvider: CharacterIconFetcherService,
  ) {
    this.characters = this.lunchProvider.getCharacters();
    this.selectedCharacter1 = this.characters[0];
    this.selectedCharacter2 = this.characters[1];
    this.lunches = this.lunchProvider.find(this.selectedCharacter1, this.selectedCharacter2);
  }

  ngOnInit(): void {
  }

  findLunch(): void {
    this.lunches = this.lunchProvider.find(this.selectedCharacter1, this.selectedCharacter2);
  }

  getPortrait(name: string): string {
    return this.imageProvider.getPortrait(name);
  }

}
