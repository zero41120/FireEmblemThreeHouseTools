import { Injectable } from '@angular/core';
import { data } from './portrait.json';

@Injectable({
  providedIn: 'root'
})
export class CharacterIconFetcherService {
  cache: { [key: string]: string; } = {};

  getPortrait(name: string) {
    const lName = name.toLowerCase();
    if (!this.cache[lName]) this.cache[lName] = this.findUrlFromData(lName);
    return this.cache[lName];
  }

  private findUrlFromData(name: string): string {
    return data.find(url => url.includes(name)) ?? "";
  }
}
