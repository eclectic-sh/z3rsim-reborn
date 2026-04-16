import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class SkullWoodsSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Skull Woods',
      items[158],
      function (items, config) {
        return config.mode === 'inverted' || (items.moonPearl && items.canNorthWestDarkWorld(config.canGlitch));
      },
      6.6,
      5.4,
    );
    var entryMap = new DungeonMap('sw-entry', 'Skull Woods Entrance');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        57.5,
        87,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'exit',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        27.5,
        87,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-left-drop',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        90,
        74.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-right-drop',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        80,
        15.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-northeast-bc',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        71,
        46,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-bc',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        8.5,
        40,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-part21',
      ),
    );
    dungeon.dungeonMaps.push(entryMap);
    var leftDropMap = new DungeonMap('sw-left-drop', 'Compass Room');
    leftDropMap.nodes.push(
      new DungeonNode(
        '',
        75,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-gibdo-stalfo',
      ),
    );
    leftDropMap.nodes.push(
      new DungeonNode(
        'Compass Chest',
        76.5,
        45,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[152],
      ),
    );
    leftDropMap.nodes.push(
      new DungeonNode(
        '',
        93,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-right-drop',
      ),
    );
    dungeon.dungeonMaps.push(leftDropMap);
    var gibdoStalfoMap = new DungeonMap('sw-gibdo-stalfo', 'Pot Prison Room');
    gibdoStalfoMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-left-drop',
      ),
    );
    gibdoStalfoMap.nodes.push(
      new DungeonNode(
        'Pot Prison Chest',
        22,
        28.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[155],
      ),
    );
    gibdoStalfoMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'sw-bc',
      ),
    );
    dungeon.dungeonMaps.push(gibdoStalfoMap);
    var bigChestMap = new DungeonMap('sw-bc', 'Big Chest Room');
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'sw-gibdo-stalfo',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'dw-lostwoods' : 'sw-entry',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-map',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        50,
        39.4,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return true;
        },
        items[150],
      ),
    );
    dungeon.dungeonMaps.push(bigChestMap);
    var rightDropMap = new DungeonMap('sw-right-drop', 'Pinball Room');
    rightDropMap.nodes.push(
      new DungeonNode(
        '',
        75,
        9.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'sw-map',
      ),
    );
    rightDropMap.nodes.push(
      new DungeonNode(
        'Pinball Chest',
        51.5,
        45,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[156],
      ),
    );
    dungeon.dungeonMaps.push(rightDropMap);
    var mapMap = new DungeonMap('sw-map', 'Map Room');
    mapMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'sw-right-drop',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-bc',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-northeast-bc',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        79,
        28,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[153],
      ),
    );
    dungeon.dungeonMaps.push(mapMap);
    var northeastBigChestMap = new DungeonMap('sw-northeast-bc', 'Circle of Pots Room');
    northeastBigChestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-map',
      ),
    );
    northeastBigChestMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-bc',
      ),
    );
    dungeon.dungeonMaps.push(northeastBigChestMap);
    var part21Map = new DungeonMap('sw-part21', 'Big Key Room');
    part21Map.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'dw-lostwoods' : 'sw-entry',
      ),
    );
    part21Map.nodes.push(
      new DungeonNode(
        '',
        32,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-part22',
      ),
    );
    part21Map.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        51.5,
        25,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[151],
      ),
    );
    dungeon.dungeonMaps.push(part21Map);
    var part22Map = new DungeonMap('sw-part22', 'Key Pot Room');
    part22Map.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sw-part21',
      ),
    );
    if (config.isFullMap) {
      part22Map.nodes.push(
        new DungeonNode(
          '',
          50,
          88,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return true;
          },
          'dw-lostwoods',
          '',
          [-1],
          1,
        ),
      );
    } else {
      part22Map.nodes.push(
        new DungeonNode(
          '',
          50,
          88,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return items.fireRod;
          },
          'sw-final',
          'Fire Rod Required',
        ),
      );
    }
    part22Map.nodes.push(
      new DungeonNode(
        '',
        21,
        28,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(part22Map);
    var finalMap = new DungeonMap('sw-final', 'Final Section');
    if (config.isFullMap) {
      finalMap.nodes.push(
        new DungeonNode(
          '',
          25,
          95,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return true;
          },
          'dw-lostwoods',
          '',
          [-1],
          1,
        ),
      );
    } else {
      finalMap.nodes.push(
        new DungeonNode(
          '',
          25,
          95,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return true;
          },
          'sw-part22',
        ),
      );
    }
    finalMap.nodes.push(
      new DungeonNode(
        'Mothula Room',
        25,
        9.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.sword || config.weapons === 'swordless';
        },
        'sw-mothula',
        'Sword Required',
      ),
    );
    finalMap.nodes.push(
      new DungeonNode(
        'Bridge Room Chest',
        33,
        74,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[154],
      ),
    );
    dungeon.dungeonMaps.push(finalMap);
    var mothulaMap = new DungeonMap('sw-mothula', 'Mothula Room');
    mothulaMap.nodes.push(
      new DungeonNode(
        'Mothula',
        50,
        50,
        NodeStatus.BOSS,
        function (items, config) {
          return true;
        },
        items[157],
      ),
    );
    dungeon.dungeonMaps.push(mothulaMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
