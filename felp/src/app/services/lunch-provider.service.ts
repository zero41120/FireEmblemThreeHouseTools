import { Injectable } from '@angular/core';
import { data } from './lunch.json';
import { LunchDishCharacters } from '../types/lunch-dish-characters.js';

@Injectable({
  providedIn: 'root'
})
export class LunchProviderService {
  private lunchData: Array<LunchDishCharacters>;
  private characters: Array<string>;

  constructor() {
    this.lunchData = this.convertRawData();
    this.characters = this.readCharactersFromLunchData();
  }

  /**
   * This function convert raw json string into an array of LunchDishCharacters
   * @returns an array of lunch data
   */
  private convertRawData(): Array<LunchDishCharacters> {
    return data.split('\n').map(line => {
      let [name, charactersCommaList] = line.split('\t');
      let characters = charactersCommaList.split(', ');
      return { name, characters }
    });
  }

  /**
   * This function gets all the characters in the raw data, then get removes all the
   * duplicates by using set.
   * @return an array of character names
   */
  private readCharactersFromLunchData(): string[] {
    const charactersWithDuplicates = this.lunchData.map(data => data.characters).flat();
    const characters = new Set(charactersWithDuplicates);
    return Array.from(characters).sort();
  }

  public getCharacters(): Array<string> {
    return this.characters;
  }

  /**
   * This function finds the lunch that is enjoyed by the 2 provided characters.
   * @param character1 name of a character to search for lunch
   * @param character2 name of a character to search for lunch
   * @returns an array of LunchDishCharacters
   */
  public find(character1: string, character2: string): Array<LunchDishCharacters> {
    const defaultLDC: LunchDishCharacters = {
      name: "They don't share any meal", 
      characters: [],
    }

    let meals = this.lunchData.filter(pair => 
      pair.characters.includes(character1) && 
      pair.characters.includes(character2)
    );

    if (meals.length === 0) meals = [defaultLDC];
    return meals.sort();
  }
}
