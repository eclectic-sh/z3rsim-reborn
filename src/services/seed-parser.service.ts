import { Injectable } from '@angular/core';
import { SeedMetadata } from '../models/seed-metadata.model';

@Injectable()
export class SeedParser {
  constructor() {}

  // Original used switch/case with no default - out-of-range values leave the field undefined.
  // A previous version of the deobfuscation used array-lookup with fallback defaults (e.g. || 'basic'),
  // which silently added safety not present in the original.
  static collectSeedMetadata(seedData: string): SeedMetadata {
    var metadata = {} as SeedMetadata;
    metadata.seed = seedData.substr(0, 20);
    switch (seedData.substr(20, 1)) {
      case '0': metadata.item_placement = 'basic'; break;
      case '1': metadata.item_placement = 'advanced'; break;
    }
    switch (seedData.substr(21, 1)) {
      case '0': metadata.dungeon_items = 'standard'; break;
      case '1': metadata.dungeon_items = 'mc'; break;
      case '2': metadata.dungeon_items = 'mcs'; break;
      case '3': metadata.dungeon_items = 'full'; break;
    }
    switch (seedData.substr(22, 1)) {
      case '0': metadata.accessibility = 'items'; break;
      case '1': metadata.accessibility = 'locations'; break;
      case '2': metadata.accessibility = 'none'; break;
    }
    switch (seedData.substr(23, 1)) {
      case '0': metadata.goal = 'ganon'; break;
      case '1': metadata.goal = 'dungeons'; break;
      case '2': metadata.goal = 'pedestal'; break;
      case '3': metadata.goal = 'triforce'; break;
      case '4': metadata.goal = 'fast_ganon'; break;
    }
    metadata.entry_crystals_tower = seedData.substr(24, 1);
    metadata.entry_crystals_ganon = seedData.substr(25, 1);
    switch (seedData.substr(26, 1)) {
      case '0': metadata.mode = 'standard'; break;
      case '1': metadata.mode = 'open'; break;
      case '2': metadata.mode = 'inverted'; break;
    }
    switch (seedData.substr(27, 1)) {
      case '0': metadata.enemizer = 'none'; break;
      case '1': metadata.enemizer = 'simple'; break;
      case '2': metadata.enemizer = 'full'; break;
      case '3': metadata.enemizer = 'random'; break;
    }
    switch (seedData.substr(28, 1)) {
      case '0': metadata.weapons = 'randomized'; break;
      case '1': metadata.weapons = 'assured'; break;
      case '2': metadata.weapons = 'vanilla'; break;
      case '3': metadata.weapons = 'swordless'; break;
    }
    switch (seedData.substr(29, 1)) {
      case '0': metadata.mmMedallion = 'bombos'; break;
      case '1': metadata.mmMedallion = 'ether'; break;
      case '2': metadata.mmMedallion = 'quake'; break;
    }
    switch (seedData.substr(30, 1)) {
      case '0': metadata.trMedallion = 'bombos'; break;
      case '1': metadata.trMedallion = 'ether'; break;
      case '2': metadata.trMedallion = 'quake'; break;
    }
    return metadata;
  }

  formatNumber(value: number, digits: number): string {
    return '0'.repeat(digits - value.toString().length) + value.toString();
  }
}
