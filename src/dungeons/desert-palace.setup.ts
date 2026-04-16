import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class DesertPalaceSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Desert Palace',
      items[73],
      function (items, config) {
        if (config.mode === 'inverted') {
          return items.book && items.canInvertedLW() && (items.moonPearl || config.canGlitch);
        } else {
          return items.book || (items.canMire(config) && items.mirror);
        }
      },
      7.6,
      78.4,
    );
    var entryMap = new DungeonMap('dp-entry', 'Desert Palace Big Hall');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        83,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'lw-desert' : 'exit',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        7,
        27,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-bc',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        12.5,
        16.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-torch',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        37.5,
        16.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-map',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        62.5,
        16.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-map',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        93,
        50.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'dp-right',
      ),
    );
    if (config.isFullMap) {
      entryMap.nodes.push(
        new DungeonNode(
          'Desert Ledge',
          7,
          76,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return true;
          },
          'lw-desert',
          '',
          [-1],
          2,
        ),
      );
    } else {
      entryMap.nodes.push(
        new DungeonNode(
          'Desert Final Section',
          7,
          76,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return items.glove && (config.mode !== 'inverted' || items.moonPearl);
          },
          'dp-first-tile',
          'Power Gloves Required',
        ),
      );
    }
    dungeon.dungeonMaps.push(entryMap);
    var torchMap = new DungeonMap('dp-torch', 'Torch Room');
    torchMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-entry',
      ),
    );
    torchMap.nodes.push(
      new DungeonNode(
        'Torch Item',
        28.3,
        41,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.boots;
        },
        items[69],
        'Boots Required',
      ),
    );
    if (config.hintsEnabled) {
      torchMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          50,
          19,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '2',
        ),
      );
    }
    dungeon.dungeonMaps.push(torchMap);
    var mapMap = new DungeonMap('dp-map', 'Map Room');
    mapMap.nodes.push(
      new DungeonNode(
        '',
        25,
        70,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-entry',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        '',
        75,
        70,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-entry',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        50,
        50,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[68],
      ),
    );
    dungeon.dungeonMaps.push(mapMap);
    var rightMap = new DungeonMap('dp-right', 'Right Side');
    rightMap.nodes.push(
      new DungeonNode(
        '',
        39,
        85,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-entry',
      ),
    );
    rightMap.nodes.push(
      new DungeonNode(
        'Compass Chest',
        50,
        79,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[71],
      ),
    );
    rightMap.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        50,
        12,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[70],
      ),
    );
    dungeon.dungeonMaps.push(rightMap);
    var bigChestMap = new DungeonMap('dp-bc', 'Big Chest Room');
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-entry',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        50,
        49,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return true;
        },
        items[67],
      ),
    );
    dungeon.dungeonMaps.push(bigChestMap);
    var firstTileMap = new DungeonMap('dp-first-tile', 'Tile Room');
    firstTileMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'lw-desert' : 'dp-entry',
        '',
        [-1],
        2,
      ),
    );
    firstTileMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'dp-big-door',
      ),
    );
    firstTileMap.nodes.push(
      new DungeonNode(
        '',
        21.5,
        79,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(firstTileMap);
    var bigDoorMap = new DungeonMap('dp-big-door', 'Big Door');
    bigDoorMap.nodes.push(
      new DungeonNode(
        '',
        75,
        69,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dp-first-tile',
      ),
    );
    bigDoorMap.nodes.push(
      new DungeonNode(
        'Lanmolas Room',
        26,
        35,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return items.hasFiresource();
        },
        'dp-lanmo',
        'Fire Source and Weapon Required',
        [-1],
        0,
        function (items, config) {
          return items.hasFiresource();
        },
      ),
    );
    dungeon.dungeonMaps.push(bigDoorMap);
    var lanmoMap = new DungeonMap('dp-lanmo', 'Lanmolas Room');
    lanmoMap.nodes.push(
      new DungeonNode(
        'Lanmolas',
        50,
        50,
        NodeStatus.BOSS,
        function (items, config) {
          return (
            items.hasFiresource() &&
            (items.sword ||
              items.hammer ||
              items.hasBow() ||
              items.fireRod ||
              items.iceRod ||
              items.byrna ||
              items.somaria)
          );
        },
        items[72],
      ),
    );
    dungeon.dungeonMaps.push(lanmoMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
