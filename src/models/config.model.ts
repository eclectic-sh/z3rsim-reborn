import { SeedMetadata } from './seed-metadata.model';

// Game configuration - parsed from seed metadata + game parameters
export class Config {
  mode: string;
  dungeonItems: string;
  advancedItems: boolean;
  accessibility: string;
  goal: string;
  weapons: string;
  isEnemizer: boolean;
  isFullMap: boolean;
  isMystery: boolean;
  canGlitch: boolean;
  bosses: number[];
  hints: string[];
  hintsEnabled: boolean;
  towerCrystals: number;
  ganonCrystals: number;
  towerCrystalsRequested: string;
  ganonCrystalsRequested: string;
  mmMedallion: string;
  trMedallion: string;
  silversHint: string;
  data: string;
  noLogic: boolean;
  checkedBosses: boolean[];
  vtSeedNumber: string;

  constructor(
    seedNumber: string,
    seedMetadata: SeedMetadata,
    bosses: number[],
    canGlitch: boolean,
    isFullMap: boolean,
  ) {
    this.advancedItems = seedMetadata.item_placement === 'advanced';
    this.dungeonItems = seedMetadata.dungeon_items;
    this.accessibility = seedMetadata.accessibility;
    this.goal = seedMetadata.goal;
    this.towerCrystals = +seedMetadata.entry_crystals_tower;
    this.ganonCrystals = +seedMetadata.entry_crystals_ganon;
    this.mode = seedMetadata.mode;
    this.isEnemizer = seedMetadata.enemizer !== 'none';
    this.weapons = seedMetadata.weapons;
    this.mmMedallion = seedMetadata.mmMedallion;
    this.trMedallion = seedMetadata.trMedallion;
    this.bosses = bosses;
    this.canGlitch = canGlitch;
    this.isFullMap = isFullMap;
    this.vtSeedNumber = seedNumber;
    this.isMystery = false;
    this.hints = [];
    this.silversHint = '';
    this.checkedBosses = [false, false, false, false, false, false, false, false, false, false];
    this.noLogic = false;
  }
}
