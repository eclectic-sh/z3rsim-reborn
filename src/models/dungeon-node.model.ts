import { MapNode } from './map-node.model';
import { Items } from './items.model';
import { Config } from './config.model';

export class DungeonNode {
  static noReqs = (items: Items, config: Config) => true;

  static bossReqs = [
    // 0: Armos Knights
    (items: Items, config: Config) =>
      items.sword || items.hammer || items.hasBow() || items.boomerang ||
      (items.hasMagicBars(4) && (items.fireRod || items.iceRod)) ||
      (items.hasMagicBars(2) && (items.byrna || items.somaria)),
    // 1: Lanmolas
    (items: Items, config: Config) =>
      items.sword || items.hammer || items.hasBow() || items.fireRod || items.iceRod || items.byrna || items.somaria,
    // 2: Moldorm
    (items: Items, config: Config) => items.sword || items.hammer,
    // 3: Helmasaur King
    (items: Items, config: Config) => items.sword || items.hasBow(),
    // 4: Arrghus
    (items: Items, config: Config) =>
      items.hookshot && (items.hammer || items.sword || ((items.hasMagicBars(2) || items.hasBow()) && (items.fireRod || items.iceRod))),
    // 5: Mothula
    (items: Items, config: Config) =>
      items.sword || items.hammer ||
      (items.hasMagicBars(2) && (items.fireRod || items.somaria || items.byrna)) ||
      (items.net && items.bottle && (items.boots || (items.sword && items.quake))),
    // 6: Blind
    (items: Items, config: Config) => items.sword || items.hammer || items.somaria || items.byrna,
    // 7: Kholdstare
    (items: Items, config: Config) =>
      items.hasMeltyPower(config) &&
      (items.hammer || items.sword || (items.hasMagicBars(3) && items.fireRod) || (items.hasMagicBars(2) && items.fireRod && items.bombos)),
    // 8: Vitreous
    (items: Items, config: Config) => items.hammer || items.sword || items.hasBow(),
    // 9: Trinexx
    (items: Items, config: Config) =>
      items.fireRod && items.iceRod &&
      (items.sword >= 3 || items.hammer || (items.hasMagicBars(2) && items.sword >= 2) || (items.hasMagicBars(4) && items.sword)),
  ];

  static glitchedBossReqs = [
    // 0: Armos Knights
    (items: Items, config: Config) => items.fireRod || items.iceRod || items.byrna || items.somaria,
    // 1: Lanmolas
    (items: Items, config: Config) => true,
    // 2: Moldorm
    null,
    // 3: Helmasaur King
    (items: Items, config: Config) => items.sword || items.hasBow() || items.hammer,
    // 4: Arrghus
    (items: Items, config: Config) => items.hookshot && (items.fireRod || items.iceRod),
    // 5: Mothula
    (items: Items, config: Config) => items.fireRod || items.somaria || items.byrna,
    // 6: Blind
    null,
    // 7: Kholdstare
    (items: Items, config: Config) => items.hasMeltyPower(config),
    // 8: Vitreous
    null,
    // 9: Trinexx
    (items: Items, config: Config) =>
      items.fireRod && items.iceRod && (items.sword >= 2 || (items.sword && items.hasMagicBars(2))),
  ];

  mirrorAccessibleSectionArray: number[];
  mirrorDestinationSection: number;
  name: string;
  x: number;
  y: number;
  canOpen: (items: Items, config: Config) => any;
  content: string;
  errorMessage: string;
  mapNode: { [key: string]: any };
  private _status: number | string;
  accessibleSectionArray: number[];
  destinationSection: number;
  canGlitch: (items: Items, config: Config) => any;

  constructor(
    name: string,
    x: number,
    y: number,
    status: number,
    canOpen: (items: Items, config: Config) => any,
    content: string,
    errorMessage = '',
    accessibleSectionArray = [-1],
    destinationSection = 0,
    canGlitch = null,
    mirrorAccessibleSectionArray = [-1],
    mirrorDestinationSection = 0,
  ) {
    this.mirrorAccessibleSectionArray = mirrorAccessibleSectionArray;
    this.mirrorDestinationSection = mirrorDestinationSection;
    this.name = name;
    this.x = x;
    this.y = y;
    this.canOpen = canOpen;
    this.content = content;
    this.errorMessage = errorMessage;
    this.mapNode = new MapNode();
    this.status = status;
    this.accessibleSectionArray = accessibleSectionArray;
    this.destinationSection = destinationSection;
    this.canGlitch = canGlitch;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
    this.mapNode.status = value.toString();
  }

  isDoable(items: Items, config: Config): number {
    if (this.canOpen && this.canOpen(items, config)) {
      return 2;
    } else if (this.canGlitch && this.canGlitch(items, config)) {
      return 1;
    } else {
      return 0;
    }
  }
}
