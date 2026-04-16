import { Dungeon } from '../models/dungeon.model';
export class DungeonPrize {
  dungeonName: string;
  hasBigKey: boolean;
  smallKeys: number;
  hasCompass: boolean;
  hasMap: boolean;
  itemsLeft: number;
  isBossDefeated: boolean;
  mapPrizeStatus: number;
  dungeonPrize: string;
  bossId: number;
  dungeonId: number;

  static UNKNOWN = 0;
  static CRYSTAL = 1;
  static RED_CRYSTAL = 2;
  static PENDANT = 3;
  static GREEN_PENDANT = 4;
  static SOME_CRYSTAL = 5;
  static SOME_PENDANT = 6;

  constructor(dungeonName: string, itemsLeft: number, dungeonPrize: string, bossId: number) {
    this.dungeonName = dungeonName;
    this.hasBigKey = false;
    this.smallKeys = 0;
    this.hasCompass = false;
    this.hasMap = false;
    this.itemsLeft = itemsLeft;
    this.isBossDefeated = false;
    this.mapPrizeStatus = DungeonPrize.UNKNOWN;
    this.dungeonPrize = dungeonPrize;
    this.bossId = bossId;
    this.dungeonId = Dungeon.crystalDungeonNames.indexOf(dungeonName);
  }

  dunCount() {
    if (this.hasCompass) {
      if (this.hasMap) {
        return 2;
      } else {
        return 1;
      }
    } else if (this.hasMap) {
      return 1;
    } else {
      return 0;
    }
  }

  checkThisMap() {
    switch (this.dungeonPrize) {
      case '111':
      case '112':
        this.mapPrizeStatus = DungeonPrize.RED_CRYSTAL;
        break;
      case '129':
        this.mapPrizeStatus = DungeonPrize.GREEN_PENDANT;
        break;
      case '130':
      case '131':
        this.mapPrizeStatus = DungeonPrize.PENDANT;
        break;
      default:
        this.mapPrizeStatus = DungeonPrize.CRYSTAL;
    }
  }

  listenThisMap() {
    if (this.mapPrizeStatus === DungeonPrize.UNKNOWN) {
      if (+this.dungeonPrize >= 129) {
        this.mapPrizeStatus = DungeonPrize.SOME_PENDANT;
      } else {
        this.mapPrizeStatus = DungeonPrize.SOME_CRYSTAL;
      }
    }
  }
}
