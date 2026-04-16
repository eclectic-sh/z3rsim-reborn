import { Config } from '../models/config.model';
import { DungeonPrize } from '../models/dungeon-prize.enum';
import { Dungeon } from '../models/dungeon.model';
export class Items {
  tunic: number;
  sword: number;
  shield: number;
  moonPearl: boolean;
  bow: number;
  boomerang: number;
  hookshot: boolean;
  bombs: boolean;
  shovel: boolean;
  mushroom: boolean;
  powder: boolean;
  fireRod: boolean;
  iceRod: boolean;
  bombos: boolean;
  ether: boolean;
  quake: boolean;
  lamp: boolean;
  hammer: boolean;
  flute: boolean;
  net: boolean;
  book: boolean;
  bottle: number;
  somaria: boolean;
  byrna: boolean;
  cape: boolean;
  mirror: boolean;
  boots: boolean;
  glove: number;
  flippers: boolean;
  halfMagic: number;
  crystal1: boolean;
  crystal2: boolean;
  crystal3: boolean;
  crystal4: boolean;
  crystal5: boolean;
  crystal6: boolean;
  crystal7: boolean;
  crystalSwitch: boolean;
  spFlooded: boolean;
  ttBlindDelivered: boolean;
  ttBombableFloor: boolean;
  ipBlockPushed: boolean;
  damFlooded: boolean;
  pendantCourage: boolean;
  pendantPower: boolean;
  pendantWisdom: boolean;
  agahnim: number;
  agahnim2: boolean;
  ganon: boolean;
  lwMapOpen: boolean;
  dwMapOpen: boolean;
  mmMedallionChecked: boolean;
  trMedallionChecked: boolean;
  hasPurpleChest: boolean;
  hasBigBomb: boolean;
  hasBlacksmiths: boolean;
  oldManRescued: boolean;
  blacksmithsRescued: boolean;
  isFluteActivated: boolean;
  isTROpened: boolean;
  iceArmosDefeated: boolean;
  lanmo2Defeated: boolean;
  moldorms2Defeated: boolean;
  triforcePieces: number;
  gameState: number;
  currentRegionInMap: number;
  dungeonItemsArray: DungeonPrize[];
  stats: { [key: string]: number };
  preEachDun: number[];
  preEachPendant: { [key: string]: number };
  preEachMedallion: { [key: string]: number };
  gtChestCount: number;
  startingHearts: number;
  startingItemCount: number[];
  visitedDungeon: boolean[];
  crystalList: string[];
  dungeonItemNames: string[];
  dungeonItemIndex: number;
  dungeonItemsShuffle: string;

  constructor() {
    this.tunic = 1;
    this.sword = 0;
    this.shield = 0;
    this.moonPearl = false;
    this.bow = 0;
    this.boomerang = 0;
    this.hookshot = false;
    this.bombs = true;
    this.shovel = false;
    this.mushroom = false;
    this.powder = false;
    this.fireRod = false;
    this.iceRod = false;
    this.bombos = false;
    this.ether = false;
    this.quake = false;
    this.lamp = false;
    this.hammer = false;
    this.flute = false;
    this.net = false;
    this.book = false;
    this.bottle = 0;
    this.somaria = false;
    this.byrna = false;
    this.cape = false;
    this.mirror = false;
    this.boots = false;
    this.glove = 0;
    this.flippers = false;
    this.halfMagic = 0;
    this.crystal1 = false;
    this.crystal2 = false;
    this.crystal3 = false;
    this.crystal4 = false;
    this.crystal5 = false;
    this.crystal6 = false;
    this.crystal7 = false;
    this.crystalSwitch = false;
    this.spFlooded = false;
    this.ttBlindDelivered = false;
    this.ttBombableFloor = false;
    this.ipBlockPushed = false;
    this.damFlooded = false;
    this.pendantCourage = false;
    this.pendantPower = false;
    this.pendantWisdom = false;
    this.agahnim = 0;
    this.agahnim2 = false;
    this.ganon = false;
    this.lwMapOpen = false;
    this.dwMapOpen = false;
    this.mmMedallionChecked = false;
    this.trMedallionChecked = false;
    this.hasPurpleChest = false;
    this.hasBigBomb = false;
    this.hasBlacksmiths = false;
    this.oldManRescued = false;
    this.blacksmithsRescued = false;
    this.isFluteActivated = false;
    this.isTROpened = false;
    this.iceArmosDefeated = false;
    this.lanmo2Defeated = false;
    this.moldorms2Defeated = false;
    this.triforcePieces = 0;
    this.gameState = 0;
    this.currentRegionInMap = 0;
    this.dungeonItemsArray = [];
    this.stats = {
      totalCount: 0,
      overworldCount: 0,
      dungeonCount: 0,
      capacityUpgrades: 0,
      heartPieces: 0,
      heartContainers: 0,
      maps: 0,
      compasses: 0,
      sks: 0,
      bks: 0,
      bigChests: 0,
      bosses: 0,
      itemsPreGTBK: 0,
      totalItemsPreGTBK: 0,
      sword0B: 0,
      sword1B: 0,
      sword2B: 0,
      sword3B: 0,
      sword4B: 0,
      preBoots: 0,
      preMirror: 0,
      preFlute: 0,
      preGlove: 0,
      preMitts: 0,
      preBow: 0,
      preSilvers: 0,
      prePearl: 0,
      preHammer: 0,
      preMS: 0,
      preFireRod: 0,
      preIceRod: 0,
      preHook: 0,
      preLamp: 0,
      preSomaria: 0,
      preFlippers: 0,
      preDW: 0,
      preGo: 0,
      preGanon: 0,
      startTime: 0,
      rupeeCount: 0,
    };
    this.preEachDun = [];
    this.preEachPendant = {};
    this.preEachMedallion = {};
    this.gtChestCount = 0;
    this.startingHearts = 3;
    this.startingItemCount = [];
    this.visitedDungeon = [];
    this.crystalList = [
      'crystal1',
      'crystal2',
      'crystal3',
      'crystal4',
      'crystal5',
      'crystal6',
      'crystal7',
    ];
    this.dungeonItemNames = ['map', 'compass', 'smallKey', 'bigKey'];
    this.dungeonItemIndex = 0;
  }

  get totalHealth() {
    return (
      this.startingHearts + this.stats.heartContainers + Math.floor(this.stats.heartPieces / 4)
    );
  }

  setup(dungeonItemsShuffle: string, isMystery: boolean, dungeonsData: Dungeon[], isFullMap: boolean, bosses: number[], isInverted: boolean) {
    this.dungeonItemsShuffle = dungeonItemsShuffle;
    switch (dungeonItemsShuffle) {
      case 'standard':
        this.startingItemCount = [6, 3, 2, 2, 1, 5, 6, 2, 4, 3, 2, 6, 20];
        this.dungeonItemIndex = 0;
        break;
      case 'mc':
        this.startingItemCount = [7, 5, 4, 4, 1, 7, 8, 4, 6, 5, 4, 8, 22];
        this.dungeonItemIndex = 2;
        break;
      case 'mcs':
        this.startingItemCount = [8, 5, 5, 5, 3, 13, 9, 7, 7, 7, 7, 12, 26];
        this.dungeonItemIndex = 3;
        break;
      case 'full':
        this.startingItemCount = [8, 6, 6, 6, 3, 14, 10, 8, 8, 8, 8, 13, 27];
        this.dungeonItemIndex = 4;
    }
    if (isMystery) {
      this.startingItemCount = [8, 6, 6, 6, 3, 14, 10, 8, 8, 8, 8, 13, 27];
      this.dungeonItemIndex = 4;
    }
    if (isFullMap) {
      this.startingItemCount[11]--;
    }
    Dungeon.dungeonNames.forEach((dungeonName, index) => {
      if (index === 0) {
        this.dungeonItemsArray.push(new DungeonPrize('Hyrule Castle', this.startingItemCount[0], '', -1));
      } else if (Dungeon.crystalDungeonNames.includes(dungeonName)) {
        this.dungeonItemsArray.push(
          new DungeonPrize(
            dungeonName,
            this.startingItemCount[index],
            dungeonsData[index - 1].dungeonPrize,
            bosses[Dungeon.crystalDungeonNames.indexOf(dungeonName)],
          ),
        );
      } else {
        this.dungeonItemsArray.push(
          new DungeonPrize(dungeonName, this.startingItemCount[index], dungeonsData[index - 1].dungeonPrize, -1),
        );
      }
    });
    this.stats.startTime = Date.now();
    this.preEachDun = [0, 0, 0, 0, 0, 0, 0];
    this.visitedDungeon = [false, false, false, false, false, false, false, false, false, false];
    this.preEachPendant = {
      pendantCourage: 0,
      pendantPower: 0,
      pendantWisdom: 0,
    };
    this.preEachMedallion = {
      bombos: 0,
      ether: 0,
      quake: 0,
    };
  }

  add(itemName: string, dungeonName: string, isDungeonItem?: boolean) {
    if (isDungeonItem === undefined) {
      isDungeonItem = false;
    }
    if (itemName) {
      var nonCountableItems = [
        'flood',
        'blind',
        'tt-bomb',
        'switch',
        'ip-switch-room',
        'crystal1',
        'crystal2',
        'crystal3',
        'crystal4',
        'crystal5',
        'crystal6',
        'crystal7',
        'pendantCourage',
        'pendantPower',
        'pendantWisdom',
        'Agahnim',
        'Agahnim 2',
        'Ganon',
      ];
      var bossItems = [
        'crystal1',
        'crystal2',
        'crystal3',
        'crystal4',
        'crystal5',
        'crystal6',
        'crystal7',
        'pendantCourage',
        'pendantPower',
        'pendantWisdom',
        'Agahnim',
        'Agahnim 2',
        'Ganon',
      ];
      if (nonCountableItems.indexOf(itemName) === -1 && !isDungeonItem) {
        this.stats.totalCount++;
        if (dungeonName === 'Hyrule Castle' || Dungeon.dungeonsWithDunItemsCount.indexOf(dungeonName) > -1) {
          this.stats.dungeonCount++;
        } else {
          this.stats.overworldCount++;
        }
      }
      if (bossItems.indexOf(itemName) > -1 && !this[itemName]) {
        this.stats.bosses++;
        switch (this.sword) {
          case 0:
            this.stats.sword0B++;
            break;
          case 1:
            this.stats.sword1B++;
            break;
          case 2:
            this.stats.sword2B++;
            break;
          case 3:
            this.stats.sword3B++;
            break;
          case 4:
            this.stats.sword4B++;
        }
        if (itemName.indexOf('crystal') > -1) {
          this.preEachDun[+itemName.charAt(7) - 1] = this.stats.totalCount;
        } else if (itemName.indexOf('pendant') > -1) {
          this.preEachPendant[itemName] = this.stats.totalCount;
        }
      }
      switch (itemName) {
        case 'bottle':
          this.bottle++;
          break;
        case 'bow':
          if (this.bow === 0) {
            this.stats.preBow = this.stats.totalCount;
          } else {
            this.stats.preSilvers = this.stats.totalCount;
          }
          this.bow++;
          break;
        case 'boomerang':
          this.boomerang++;
          break;
        case 'magicBoomerang':
          this.boomerang += 2;
          break;
        case 'mirror':
          this.mirror = true;
          this.stats.preMirror = this.stats.totalCount;
          break;
        case 'boots':
          this.boots = true;
          this.stats.preBoots = this.stats.totalCount;
          break;
        case 'flute':
          this.flute = true;
          this.stats.preFlute = this.stats.totalCount;
          break;
        case 'hammer':
          this.hammer = true;
          this.stats.preHammer = this.stats.totalCount;
          break;
        case 'fireRod':
          this.fireRod = true;
          this.stats.preFireRod = this.stats.totalCount;
          break;
        case 'iceRod':
          this.iceRod = true;
          this.stats.preIceRod = this.stats.totalCount;
          break;
        case 'flippers':
          this.flippers = true;
          this.stats.preFlippers = this.stats.totalCount;
          break;
        case 'somaria':
          this.somaria = true;
          this.stats.preSomaria = this.stats.totalCount;
          break;
        case 'lamp':
          this.lamp = true;
          this.stats.preLamp = this.stats.totalCount;
          break;
        case 'hookshot':
          this.hookshot = true;
          this.stats.preHook = this.stats.totalCount;
          break;
        case 'moonPearl':
          this.moonPearl = true;
          this.stats.prePearl = this.stats.totalCount;
          break;
        case 'silvers':
          this.bow += 1;
          break;
        case 'halfMagic':
          this.halfMagic++;
          break;
        case 'tunic':
          this.tunic++;
          break;
        case 'glove':
          this.glove++;
          if (this.glove === 1) {
            this.stats.preGlove = this.stats.totalCount;
          }
          if (this.glove === 2) {
            this.stats.preMitts = this.stats.totalCount;
          }
          break;
        case 'shield':
          this.shield++;
          break;
        case 'sword':
          this.sword++;
          if (this.sword === 2) {
            this.stats.preMS = this.stats.totalCount;
          }
          break;
        case 'Agahnim':
          this.agahnim = 1;
          break;
        case 'Agahnim 2':
          this.agahnim2 = true;
          break;
        case 'pieceHeart':
          this.stats.heartPieces++;
          break;
        case 'heartContainer':
          this.stats.heartContainers++;
          break;
        case 'flood':
          this.spFlooded = true;
          break;
        case 'blind':
          this.ttBlindDelivered = true;
          break;
        case 'tt-bomb':
          this.ttBombableFloor = true;
          break;
        case 'Ganon':
          this.ganon = true;
          this.stats.preGanon = this.stats.totalCount;
          break;
        case 'switch':
          this.crystalSwitch = !this.crystalSwitch;
          break;
        case 'ip-switch-room':
          this.ipBlockPushed = true;
          break;
        case 'triforcePieces':
          this.triforcePieces++;
          break;
        case 'bombos':
          this.bombos = true;
          this.preEachMedallion.bombos = this.stats.totalCount;
          break;
        case 'ether':
          this.ether = true;
          this.preEachMedallion.ether = this.stats.totalCount;
          break;
        case 'quake':
          this.quake = true;
          this.preEachMedallion.quake = this.stats.totalCount;
          break;
        default:
          if (this[itemName] !== undefined) {
            this[itemName] = true;
          }
      }
      this.dungeonItemNames.forEach((dunItemName) => {
        if (itemName.indexOf(dunItemName) > -1) {
          this.addDungeonItem(itemName);
        }
      });
      if (
        this.stats.preDW === 0 &&
        this.moonPearl &&
        (this.agahnim || (this.hammer && this.glove) || this.glove === 2)
      ) {
        this.stats.preDW = this.stats.totalCount;
      }
      if (dungeonName === 'Ganons Tower' && this.stats.itemsPreGTBK === 0) {
        this.gtChestCount++;
        if (itemName === 'bigKey-12') {
          this.stats.itemsPreGTBK = this.gtChestCount;
        }
      }
      if (itemName === 'bigKey-12') {
        this.stats.totalItemsPreGTBK = this.stats.totalCount;
      }
      if (itemName.indexOf('Upgrade') > -1) {
        this.stats.capacityUpgrades++;
      }
      var stateToggleItems = ['flood', 'blind', 'tt-bomb', 'switch', 'ip-switch-room'];
      if (
        !isDungeonItem &&
        itemName.indexOf('crystal') === -1 &&
        itemName.indexOf('pendant') === -1 &&
        itemName.indexOf('Agahnim 2') === -1 &&
        itemName.indexOf('Ganon') === -1 &&
        stateToggleItems.indexOf(itemName) === -1 &&
        Dungeon.dungeonsWithDunItemsCount.indexOf(dungeonName) > -1
      ) {
        var isTrackedDungeonItem = false;
        this.dungeonItemNames.forEach((dunItemName, dunItemIndex) => {
          if (itemName.indexOf(dunItemName) > -1 && dunItemIndex >= this.dungeonItemIndex) {
            isTrackedDungeonItem = true;
          }
        });
        if (!isTrackedDungeonItem) {
          this.dungeonItemsArray[Dungeon.dungeonNames.indexOf(dungeonName)].itemsLeft--;
        }
      }
      if (itemName.indexOf('rupee') > -1) {
        var rupeeValue = +itemName.split('rupee')[0];
        this.stats.rupeeCount += rupeeValue;
      }
    }
  }

  addDungeonItem(itemKey: string) {
    var itemType = itemKey.split('-')[0];
    var dungeonIndex = +itemKey.split('-')[1];
    switch (itemType) {
      case 'smallKey':
        this.dungeonItemsArray[dungeonIndex].smallKeys++;
        this.stats.sks++;
        break;
      case 'bigKey':
        this.dungeonItemsArray[dungeonIndex].hasBigKey = true;
        this.stats.bks++;
        break;
      case 'map':
        this.dungeonItemsArray[dungeonIndex].hasMap = true;
        this.stats.maps++;
        break;
      case 'compass':
        this.dungeonItemsArray[dungeonIndex].hasCompass = true;
        this.stats.compasses++;
    }
  }

  remove(itemName: string, dungeonName: string) {
    switch (itemName) {
      case 'Mushroom':
        this.mushroom = false;
        break;
      case 'flood':
        this.spFlooded = false;
        break;
      case 'blind':
        this.ttBlindDelivered = false;
        break;
      case 'Key':
        this.dungeonItemsArray[Dungeon.dungeonNames.indexOf(dungeonName)].smallKeys--;
    }
  }

  hasLightsource(settings: Config) {
    return this.lamp || settings.canGlitch;
  }

  hasBottle() {
    return this.bottle > 0;
  }

  hasBow() {
    return this.bow >= 1;
  }

  hasFiresource() {
    return this.lamp || this.fireRod;
  }

  hasMagicExtension(settings: Config) {
    return this.halfMagic || this.bottle > 0 || settings.canGlitch;
  }

  hasSilvers() {
    return this.bow >= 2;
  }

  hasMeltyPower(settings: Config) {
    return this.fireRod || (this.bombos && (this.sword || settings.weapons === 'swordless'));
  }

  hasBeamReflection(settings: Config) {
    return this.cape || this.byrna || this.shield === 3;
  }

  hasInvincibilityItem(settings: Config) {
    return this.cape || this.byrna || settings.canGlitch;
  }

  hasMedallion(dungeonKey: string, settings: Config) {
    return (
      (!!this.ether && !!this.bombos && !!this.quake) ||
      (dungeonKey === 'mm' && this.mmMedallionChecked
        ? this[settings.mmMedallion]
        : dungeonKey === 'tr' && !!this.trMedallionChecked && this[settings.trMedallion])
    );
  }

  hasMagicBars(requiredBars: number) {
    var availableBars = 1;
    availableBars += this.bottle;
    if (this.halfMagic > 0) {
      availableBars *= this.halfMagic * 2;
    }
    return availableBars >= requiredBars;
  }

  canWestDeathMountain(canGlitch = false) {
    return this.flute || (this.glove && (this.lamp || canGlitch));
  }

  canEastDeathMountain(canGlitch = false) {
    return this.canWestDeathMountain(canGlitch) && (this.hookshot || (this.mirror && this.hammer));
  }

  canDarkEastDeathMountain(canGlitch = false) {
    return this.glove === 2 && this.canEastDeathMountain(canGlitch);
  }

  canDarkWestDeathMountain(canGlitch = false) {
    return this.canWestDeathMountain(canGlitch) && this.moonPearl;
  }

  canNorthEastDarkWorld(canGlitch = false) {
    return (
      this.agahnim ||
      (this.hammer && this.glove && this.moonPearl) ||
      (this.glove === 2 && (this.flippers || canGlitch) && this.moonPearl)
    );
  }

  canNorthWestDarkWorld(canGlitch = false) {
    return (
      ((this.canNorthEastDarkWorld(canGlitch) &&
        this.hookshot &&
        (this.hammer || this.glove || this.flippers || (canGlitch && this.canAncillaFF()))) ||
        (this.hammer && this.glove) ||
        this.glove === 2) &&
      this.moonPearl
    );
  }

  canSouthDarkWorld(canGlitch = false) {
    return (
      this.moonPearl &&
      ((this.hammer && this.glove) ||
        this.glove === 2 ||
        this.canNorthWestDarkWorld(canGlitch) ||
        (this.hammer && this.agahnim))
    );
  }

  canMire(settings: Config) {
    if (settings.mode === 'inverted') {
      return (this.flute && this.canInvertedLW()) || (this.mirror && this.canInvertedLW());
    } else {
      return this.flute && this.glove === 2;
    }
  }

  canInvertedLW() {
    return (
      this.agahnim > 0 || (this.moonPearl && ((this.hammer && this.glove > 0) || this.glove === 2))
    );
  }

  canInvertedEastDeathMountain(canGlitch = false) {
    return (
      (this.glove === 2 && this.canInvertedEastDarkDeathMountain(canGlitch)) ||
      (this.moonPearl && this.hookshot && this.canWestDeathMountain(canGlitch))
    );
  }

  canInvertedEastDarkDeathMountain(canGlitch = false) {
    return (this.flute && this.canInvertedLW()) || (this.glove && (this.lamp || canGlitch));
  }

  canInvertedNEDW(canGlitch = false) {
    return this.hammer || this.flippers || (this.mirror && this.canInvertedLW()) || canGlitch;
  }

  canEnterGT(settings: Config) {
    var crystalCount = 0;
    this.crystalList.forEach((crystal) => {
      if (this[crystal]) {
        crystalCount++;
      }
    });
    return crystalCount >= settings.towerCrystals;
  }

  canDamageGanon(settings: Config) {
    var crystalCount = 0;
    if (settings.goal === 'pedestal' || settings.goal === 'triforce') {
      return false;
    }
    this.crystalList.forEach((crystal) => {
      if (this[crystal]) {
        crystalCount++;
      }
    });
    return (
      !!(settings.goal === 'dungeons'
        ? this.pendantCourage &&
          this.pendantPower &&
          this.pendantWisdom &&
          this.agahnim &&
          this.agahnim2 &&
          crystalCount >= 7
        : crystalCount >= settings.ganonCrystals) &&
      (this.lamp || this.fireRod) &&
      (this.sword >= 2 ||
        (settings.weapons === 'swordless' && this.hammer && this.hasSilvers() && this.hasBow()))
    );
  }

  canAncillaFF() {
    return this.hasBow() || this.somaria || this.boomerang >= 2 || this.iceRod;
  }

  getDungeonItems(dungeonName: string) {
    return this.dungeonItemsArray[Dungeon.allDungeonNames.indexOf(dungeonName)];
  }

  getAllDungeonItems() {
    var result = [];
    Dungeon.crystalDungeonNames.forEach((dungeonName) => {
      result.push({
        name: dungeonName,
        items: this.dungeonItemsArray[Dungeon.allDungeonNames.indexOf(dungeonName)],
      });
    });
    return result;
  }

  visitDungeon(dungeonName: string) {
    var crystalIndex = Dungeon.crystalDungeonNames.indexOf(dungeonName);
    if (crystalIndex > -1 && this.dungeonItemsShuffle === 'standard') {
      this.visitedDungeon[crystalIndex] = true;
      var allDungeonIndex = Dungeon.allDungeonNames.indexOf(dungeonName);
      if (this.dungeonItemsArray[allDungeonIndex].mapPrizeStatus === DungeonPrize.UNKNOWN) {
        this.dungeonItemsArray[allDungeonIndex].listenThisMap();
      }
    }
  }

  hasVisitedDungeon(dungeonName: string) {
    var crystalDungeonList = [
      'Eastern Palace',
      'Desert Palace',
      'Tower of Hera',
      'Palace of Darkness',
      'Swamp Palace',
      'Skull Woods',
      'Thieves Town',
      'Ice Palace',
      'Misery Mire',
      'Turtle Rock',
    ];
    return crystalDungeonList.indexOf(dungeonName) > -1 && this.visitedDungeon[crystalDungeonList.indexOf(dungeonName)];
  }
}
