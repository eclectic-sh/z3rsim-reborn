import { DarkWorldLocations } from '../data/dark-world-locations';
import { LightWorldLocations } from '../data/light-world-locations';
import { Location } from './location.model';
import { Config } from './config.model';

export class OverworldData {
  lwLocations: Location[];
  dwLocations: Location[];

  constructor(items: string[], config: Config) {
    this.lwLocations = LightWorldLocations.setup(items, config);
    this.dwLocations = DarkWorldLocations.setup(items, config);
  }
}
