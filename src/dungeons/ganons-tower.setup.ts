import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class GanonsTowerSetup {
  static setup(items: string[], config: Config): Dungeon {

    var xCoords = [49.6, 55];
    var yCoords = [39, 4.5];
    var dungeon = new Dungeon(
      'Ganons Tower',
      'Agahnim 2',
      function (items, config) {
        return (
          ((config.mode !== 'inverted' && items.canDarkEastDeathMountain(config.canGlitch)) ||
            (config.mode === 'inverted' && items.canInvertedLW())) &&
          items.canEnterGT(config)
        );
      },
      xCoords[config.mode === 'inverted' ? 0 : 1],
      yCoords[config.mode === 'inverted' ? 0 : 1],
    );
    var entryMap = new DungeonMap('gt-entry', 'Ganons Tower Entrance');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'dw-hera' : 'exit',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        25,
        14,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-first-left',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return (config.isEnemizer && config.mode !== 'standard') || items.hasBow();
        },
        'gt-lanmo2',
        'Bow Required',
        [-1],
        0,
        function (items, config) {
          return true;
        },
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        75,
        14,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-first-right',
      ),
    );
    dungeon.dungeonMaps.push(entryMap);
    var firstRightMap = new DungeonMap('gt-first-right', 'Hope Room');
    firstRightMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-entry',
      ),
    );
    firstRightMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-first-left',
      ),
    );
    firstRightMap.nodes.push(
      new DungeonNode(
        'Tile Room',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.somaria;
        },
        'gt-tile-room',
        'Cane of Somaria Required',
      ),
    );
    firstRightMap.nodes.push(
      new DungeonNode(
        'Hope Room Left Chest',
        22,
        29,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[211],
      ),
    );
    firstRightMap.nodes.push(
      new DungeonNode(
        'Hope Room Right Chest',
        78,
        29,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[212],
      ),
    );
    dungeon.dungeonMaps.push(firstRightMap);
    var tileRoomMap = new DungeonMap('gt-tile-room', 'Tile Room');
    tileRoomMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-first-right',
      ),
    );
    if (config.canGlitch) {
      tileRoomMap.nodes.push(
        new DungeonNode(
          '',
          88,
          53.5,
          NodeStatus.SK_LOCKED,
          function (items, config) {
            return items.fireRod || items.lamp;
          },
          'gt-right-side',
          'Fire Source Required',
        ),
      );
    } else {
      tileRoomMap.nodes.push(
        new DungeonNode(
          '',
          88,
          53.5,
          NodeStatus.SK_LOCKED,
          function (items, config) {
            return items.fireRod;
          },
          'gt-right-side',
          'Fire Rod Required',
        ),
      );
    }
    tileRoomMap.nodes.push(
      new DungeonNode(
        'Tile Room Chest',
        53,
        28.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[214],
      ),
    );
    dungeon.dungeonMaps.push(tileRoomMap);
    var rightSideMap = new DungeonMap('gt-right-side', 'Compass Room');
    rightSideMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-tile-room',
      ),
    );
    rightSideMap.nodes.push(
      new DungeonNode(
        '',
        28,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-sk-corridor',
      ),
    );
    rightSideMap.nodes.push(
      new DungeonNode(
        'Compass Room Chest 1',
        41,
        41,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[215],
      ),
    );
    rightSideMap.nodes.push(
      new DungeonNode(
        'Compass Room Chest 2',
        59.5,
        41,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[216],
      ),
    );
    rightSideMap.nodes.push(
      new DungeonNode(
        'Compass Room Chest 3',
        41,
        66,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[217],
      ),
    );
    rightSideMap.nodes.push(
      new DungeonNode(
        'Compass Room Chest 4',
        59.5,
        66,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[218],
      ),
    );
    dungeon.dungeonMaps.push(rightSideMap);
    var skCorridorMap = new DungeonMap('gt-sk-corridor', 'Key Pot Corridor');
    skCorridorMap.nodes.push(
      new DungeonNode(
        '',
        93,
        51.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-invisible-maze',
      ),
    );
    skCorridorMap.nodes.push(
      new DungeonNode(
        'Small Key',
        50,
        40,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(skCorridorMap);
    var invisibleMazeMap = new DungeonMap('gt-invisible-maze', 'Invisible Maze');
    invisibleMazeMap.nodes.push(
      new DungeonNode(
        '',
        25,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-bc',
      ),
    );
    invisibleMazeMap.nodes.push(
      new DungeonNode(
        '',
        75,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-bobs-room',
      ),
    );
    dungeon.dungeonMaps.push(invisibleMazeMap);
    var bigChestMap = new DungeonMap('gt-bc', 'Big Chest Room');
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-invisible-maze',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-first-left',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        50,
        52,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return true;
        },
        items[210],
      ),
    );
    dungeon.dungeonMaps.push(bigChestMap);
    var bobsRoomMap = new DungeonMap('gt-bobs-room', "Bob's Room");
    bobsRoomMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-invisible-maze',
      ),
    );
    bobsRoomMap.nodes.push(
      new DungeonNode(
        '',
        68,
        80,
        NodeStatus.HOLE,
        function (items, config) {
          return true;
        },
        'gt-armos',
      ),
    );
    bobsRoomMap.nodes.push(
      new DungeonNode(
        "Bob's Chest",
        78,
        72.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[213],
      ),
    );
    dungeon.dungeonMaps.push(bobsRoomMap);
    var armosMap = new DungeonMap('gt-armos', 'Ice Armos Room');
    armosMap.nodes.push(
      new DungeonNode(
        'Ice Armos',
        50,
        50,
        NodeStatus.BOSS,
        DungeonNode.bossReqs[0],
        'Ice Armos',
        '',
        [-1],
        0,
        DungeonNode.glitchedBossReqs[0],
      ),
    );
    armosMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.iceArmosDefeated;
        },
        'gt-bc',
        'Boss Defeated Required',
      ),
    );
    armosMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.iceArmosDefeated;
        },
        'gt-bk',
        'Boss Defeated Required',
      ),
    );
    dungeon.dungeonMaps.push(armosMap);
    var lanmo2Map = new DungeonMap('gt-lanmo2', 'Lanmolas 2 Room');
    lanmo2Map.nodes.push(
      new DungeonNode(
        'Lanmolas 2',
        50,
        50,
        NodeStatus.BOSS,
        DungeonNode.bossReqs[1],
        'Lanmolas 2',
        '',
        [-1],
        0,
        DungeonNode.glitchedBossReqs[1],
      ),
    );
    lanmo2Map.nodes.push(new DungeonNode('', 88, 53.5, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'gt-entry'));
    lanmo2Map.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.lanmo2Defeated;
        },
        'gt-upstairs',
        'Boss Defeated Required',
      ),
    );
    dungeon.dungeonMaps.push(lanmo2Map);
    var bigKeyMap = new DungeonMap('gt-bk', 'Big Key Room');
    bigKeyMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-armos',
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        'Big Key Chest 1',
        50,
        41,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[219],
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        'Big Key Chest 2',
        41,
        29,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[220],
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        'Big Key Chest 3',
        60,
        29,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[221],
      ),
    );
    dungeon.dungeonMaps.push(bigKeyMap);
    var _ = new DungeonMap('gt-first-left', "Bob's Torch Room");
    _.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-entry',
      ),
    );
    _.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-hammer-pegs',
      ),
    );
    _.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-first-right',
      ),
    );
    _.nodes.push(
      new DungeonNode(
        "Bob's Torch Item",
        59.5,
        47.5,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.boots;
        },
        items[199],
        'Boots Required',
      ),
    );
    dungeon.dungeonMaps.push(_);
    var hammerPegsMap = new DungeonMap('gt-hammer-pegs', 'Hammer Pegs Room');
    hammerPegsMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-first-left',
      ),
    );
    hammerPegsMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer;
        },
        'gt-hookshot-room',
        'Hammer Required',
      ),
    );
    hammerPegsMap.nodes.push(
      new DungeonNode(
        '',
        78.5,
        79,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(hammerPegsMap);
    var hookshotRoomMap = new DungeonMap('gt-hookshot-room', 'Hookshot Room');
    hookshotRoomMap.nodes.push(
      new DungeonNode(
        '',
        68,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-hammer-pegs',
      ),
    );
    hookshotRoomMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hookshot;
        },
        'gt-stalfo',
        'Hookshot Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    hookshotRoomMap.nodes.push(
      new DungeonNode(
        '',
        68,
        77,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.hookshot || items.boots;
        },
        'gt-double-firebar',
        'Hookshot or Boots Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    hookshotRoomMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hookshot;
        },
        'gt-double-switch',
        'Hookshot Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    dungeon.dungeonMaps.push(hookshotRoomMap);
    var stalfoMap = new DungeonMap('gt-stalfo', 'Stalfos Room');
    stalfoMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-hookshot-room',
      ),
    );
    stalfoMap.nodes.push(
      new DungeonNode(
        'Stalfos Room Chest 1',
        22,
        28.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[200],
      ),
    );
    stalfoMap.nodes.push(
      new DungeonNode(
        'Stalfos Room Chest 2',
        78.5,
        28.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[201],
      ),
    );
    stalfoMap.nodes.push(
      new DungeonNode(
        'Stalfos Room Chest 3',
        22,
        54,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[202],
      ),
    );
    stalfoMap.nodes.push(
      new DungeonNode(
        'Stalfos Room Chest 4',
        78.5,
        54,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[203],
      ),
    );
    dungeon.dungeonMaps.push(stalfoMap);
    var doubleFirebarMap = new DungeonMap('gt-double-firebar', 'Double Firebar Room');
    doubleFirebarMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-hookshot-room',
      ),
    );
    doubleFirebarMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        53,
        54,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[209],
      ),
    );
    dungeon.dungeonMaps.push(doubleFirebarMap);
    var doubleSwitchMap = new DungeonMap('gt-double-switch', 'Double Switch Room');
    doubleSwitchMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-hookshot-room',
      ),
    );
    doubleSwitchMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-firesnake',
      ),
    );
    doubleSwitchMap.nodes.push(
      new DungeonNode(
        '',
        78,
        78.5,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(doubleSwitchMap);
    var firesnakeMap = new DungeonMap('gt-firesnake', 'Firesnake Room');
    firesnakeMap.nodes.push(
      new DungeonNode(
        '',
        25,
        69,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.hookshot;
        },
        'gt-teleports',
        'Hookshot Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    firesnakeMap.nodes.push(
      new DungeonNode(
        'Firesnake Chest',
        23.5,
        52,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hookshot;
        },
        items[208],
        'Hookshot Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    dungeon.dungeonMaps.push(firesnakeMap);
    var teleportsMap = new DungeonMap('gt-teleports', 'Teleport Room');
    teleportsMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-firesnake',
      ),
    );
    teleportsMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-rando-room',
      ),
    );
    teleportsMap.nodes.push(
      new DungeonNode(
        '',
        21.5,
        78.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-invisible-maze',
      ),
    );
    dungeon.dungeonMaps.push(teleportsMap);
    var randoRoomMap = new DungeonMap('gt-rando-room', 'Randomizer Room');
    randoRoomMap.nodes.push(
      new DungeonNode(
        '',
        68,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'gt-teleports',
      ),
    );
    randoRoomMap.nodes.push(
      new DungeonNode(
        'Rando Room Chest 1',
        45,
        26.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[204],
      ),
    );
    randoRoomMap.nodes.push(
      new DungeonNode(
        'Rando Room Chest 2',
        54.6,
        26.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[205],
      ),
    );
    randoRoomMap.nodes.push(
      new DungeonNode(
        'Rando Room Chest 3',
        45,
        36.3,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[206],
      ),
    );
    randoRoomMap.nodes.push(
      new DungeonNode(
        'Rando Room Chest 4',
        54.6,
        36.3,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[207],
      ),
    );
    dungeon.dungeonMaps.push(randoRoomMap);
    var upstairsMap = new DungeonMap('gt-upstairs', 'Mini Helmasaur Room');
    upstairsMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-refill',
      ),
    );
    upstairsMap.nodes.push(
      new DungeonNode(
        'Mini Helma Chest 1',
        22,
        28.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[222],
      ),
    );
    upstairsMap.nodes.push(
      new DungeonNode(
        'Mini Helma Chest 2',
        78.5,
        28.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[223],
      ),
    );
    upstairsMap.nodes.push(
      new DungeonNode(
        '',
        50,
        47,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(upstairsMap);
    var refillMap = new DungeonMap('gt-refill', 'Pre-Moldorm Room');
    refillMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-upstairs',
      ),
    );
    refillMap.nodes.push(
      new DungeonNode(
        'Pre-Moldorm Chest',
        47,
        53.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[224],
      ),
    );
    refillMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'gt-moldorm',
      ),
    );
    dungeon.dungeonMaps.push(refillMap);
    var moldormMap = new DungeonMap('gt-moldorm', 'Moldorm Room');
    moldormMap.nodes.push(
      new DungeonNode(
        'Moldorm 2',
        50,
        50,
        NodeStatus.BOSS,
        DungeonNode.bossReqs[2],
        'Moldorm 2',
        '',
        [-1],
        0,
        DungeonNode.glitchedBossReqs[2],
      ),
    );
    moldormMap.nodes.push(
      new DungeonNode(
        'Moldorm Chest',
        56.5,
        73.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hookshot && items.moldorms2Defeated;
        },
        items[225],
        'Hookshot and Boss Defeated Required',
        [-1],
        0,
        function (items, config) {
          return items.moldorms2Defeated && items.boots;
        },
      ),
    );
    moldormMap.nodes.push(
      new DungeonNode(
        '',
        7,
        77,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return items.hookshot && items.moldorms2Defeated;
        },
        'gt-aga2',
        'Hookshot Required',
        [-1],
        0,
        function (items, config) {
          return items.boots || (items.sword && !config.isEnemizer);
        },
      ),
    );
    dungeon.dungeonMaps.push(moldormMap);
    var aga2Map = new DungeonMap('gt-aga2', 'Agahnim 2 Room');
    aga2Map.nodes.push(
      new DungeonNode(
        'Agahnim 2',
        50,
        56,
        NodeStatus.BOSS,
        function (items, config) {
          return items.sword || items.hammer || items.net;
        },
        'Agahnim 2',
      ),
    );
    dungeon.dungeonMaps.push(aga2Map);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
