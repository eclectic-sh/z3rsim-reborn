import { Items } from './items.model';
import { Config } from './config.model';

export class Location {
  location: string;
  x: number;
  y: number;
  canGet: (items: Items, config: Config) => any;
  canView: (items: Items, config: Config) => any;
  canGlitch: (items: Items, config: Config) => any;
  canViewGlitch: (items: Items, config: Config) => any;
  region: string;
  item: string[];
  isOpened: boolean;
  mapNode: { [key: string]: any };

  constructor(
    location: string,
    x: number,
    y: number,
    canGet = null,
    canView = null,
    item: string[],
    region = '',
    canGlitch = null,
    canViewGlitch = null,
  ) {
    this.location = location;
    this.x = x;
    this.y = y;
    if (canGet) {
      this.canGet = canGet;
    }
    if (canView) {
      this.canView = canView;
    }
    if (canGlitch) {
      this.canGlitch = canGlitch;
    }
    if (canViewGlitch) {
      this.canViewGlitch = canViewGlitch;
    }
    this.region = region;
    this.item = item;
    this.isOpened = false;
  }
}
