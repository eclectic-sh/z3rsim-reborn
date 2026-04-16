import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class EasternPalaceSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Eastern Palace',
      items[66],
      function (items, config) {
        return config.mode !== 'inverted' || (items.canInvertedLW() && (items.moonPearl || config.canGlitch));
      },
      93.6,
      38.8,
    );
    var entryMap = new DungeonMap('ep-entry', 'Eastern Palace Big Ball Room');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'lw-eastern-palace' : 'exit',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Cannonball Chest',
        79.6,
        58,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[62],
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        10,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-fork',
      ),
    );
    dungeon.dungeonMaps.push(entryMap);
    var forkMap = new DungeonMap('ep-fork', 'First Fork');
    forkMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-entry',
      ),
    );
    forkMap.nodes.push(
      new DungeonNode(
        '',
        93,
        51.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-map',
      ),
    );
    forkMap.nodes.push(
      new DungeonNode(
        '',
        7,
        51.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-compass',
      ),
    );
    dungeon.dungeonMaps.push(forkMap);
    var mapMap = new DungeonMap('ep-map', 'Map Room');
    mapMap.nodes.push(
      new DungeonNode(
        '',
        7,
        51.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-fork',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Map Room Chest',
        86,
        73.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[64],
      ),
    );
    dungeon.dungeonMaps.push(mapMap);
    var compassMap = new DungeonMap('ep-compass', 'Compass Room');
    compassMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-fork',
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        'Compass Room Chest',
        44.5,
        31.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[60],
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        '',
        79,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-tile',
      ),
    );
    dungeon.dungeonMaps.push(compassMap);
    var tileMap = new DungeonMap('ep-tile', 'Hint Tile Room');
    tileMap.nodes.push(
      new DungeonNode(
        '',
        21,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-compass',
      ),
    );
    if (config.hintsEnabled) {
      tileMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          50,
          41,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '1',
        ),
      );
    }
    tileMap.nodes.push(
      new DungeonNode(
        '',
        79,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-bc',
      ),
    );
    dungeon.dungeonMaps.push(tileMap);
    var bigChestMap = new DungeonMap('ep-bc', 'Big Chest Room');
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        9,
        27,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-tile',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        50,
        44,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return true;
        },
        items[61],
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        10,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          if (config.isEnemizer) {
            return items.lamp || (config.advancedItems && items.fireRod);
          } else {
            return items.hasBow() && (items.lamp || (config.advancedItems && items.fireRod));
          }
        },
        'ep-armos',
        (config.isEnemizer && config.mode !== 'standard'
          ? 'Lamp'
          : 'Bow' + (config.canGlitch ? '' : ' and Lamp')) + ' Required',
        [-1],
        0,
        function (items, config) {
          return !!config.isEnemizer || items.hasBow();
        },
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        91,
        27,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.lamp;
        },
        'ep-bk',
        'Lamp Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    dungeon.dungeonMaps.push(bigChestMap);
    var bigKeyMap = new DungeonMap('ep-bk', 'Big Key Room');
    bigKeyMap.nodes.push(
      new DungeonNode(
        '',
        50,
        10,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ep-tile',
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        51.5,
        27,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[63],
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        '',
        68,
        27,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.lamp;
        },
        'ep-bc',
        '',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    dungeon.dungeonMaps.push(bigKeyMap);
    var armosMap = new DungeonMap('ep-armos', 'Armos Room');
    armosMap.nodes.push(
      new DungeonNode(
        'Armos Knights',
        50,
        50,
        NodeStatus.BOSS,
        function (items, config) {
          return true;
        },
        items[65],
      ),
    );
    dungeon.dungeonMaps.push(armosMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
