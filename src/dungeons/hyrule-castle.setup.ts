import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class HyruleCastleSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Hyrule Castle',
      '',
      function (items, config) {
        return config.mode !== 'inverted' || (items.canInvertedLW() && (config.canGlitch || items.moonPearl));
      },
      0,
      0,
    );
    var entryMap = new DungeonMap('hc-entry', 'Hyrule Castle Entrance');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'lw-hyrule-castle',
        '',
        [-1],
        2,
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        11,
        52,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'hc-left',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        10,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return (
            (items.lamp && config.mode.indexOf('standard') === -1) ||
            (items.fireRod && config.mode.indexOf('standard') === -1 && config.advancedItems) ||
            (config.mode.indexOf('standard') > -1 && items.gameState >= 2)
          );
        },
        'hc-darkchest',
        config.isFullMap && config.mode.indexOf('standard') > -1
          ? 'Zelda must be accompanying you'
          : 'Lamp Required',
        [-1],
        0,
        function (items, config) {
          return config.mode.indexOf('standard') === -1;
        },
      ),
    );
    dungeon.dungeonMaps.push(entryMap);
    var leftMap = new DungeonMap('hc-left', 'Left Corridor');
    leftMap.nodes.push(
      new DungeonNode(
        '',
        63,
        51,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'hc-entry',
      ),
    );
    leftMap.nodes.push(
      new DungeonNode(
        '',
        50,
        14,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'hc-map',
      ),
    );
    leftMap.nodes.push(
      new DungeonNode(
        '',
        50,
        93,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.gameState === 4;
        },
        'lw-hyrule-castle',
        'Zelda must be rescued first',
        [-1],
        1,
      ),
    );
    dungeon.dungeonMaps.push(leftMap);
    var sanctuaryMap = new DungeonMap('hc-sanctuary', 'Sanctuary', true);
    sanctuaryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        89,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'lw-sanctuary-entrance',
      ),
    );
    sanctuaryMap.nodes.push(
      new DungeonNode(
        'Sanctuary Chest',
        45,
        17,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[52],
      ),
    );
    dungeon.dungeonMaps.push(sanctuaryMap);
    var mapMap = new DungeonMap('hc-map', 'Keyguard Room');
    mapMap.nodes.push(
      new DungeonNode(
        '',
        50,
        39,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'hc-left',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        '',
        50,
        68,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'hc-boomerang',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        '',
        55,
        47,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        48,
        55,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[58],
      ),
    );
    dungeon.dungeonMaps.push(mapMap);
    var boomerangMap = new DungeonMap('hc-boomerang', 'Boomerang Room');
    boomerangMap.nodes.push(
      new DungeonNode(
        '',
        25,
        64.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'hc-map',
      ),
    );
    boomerangMap.nodes.push(
      new DungeonNode(
        '',
        25,
        34,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'hc-zelda',
      ),
    );
    boomerangMap.nodes.push(
      new DungeonNode(
        '',
        84,
        54,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    boomerangMap.nodes.push(
      new DungeonNode(
        'Boomerang Chest',
        75,
        52,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[57],
      ),
    );
    dungeon.dungeonMaps.push(boomerangMap);
    var boomerangMap = new DungeonMap('hc-zelda', "Zelda's Cell");
    boomerangMap.nodes.push(
      new DungeonNode(
        '',
        17,
        34,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'hc-boomerang',
      ),
    );
    boomerangMap.nodes.push(
      new DungeonNode(
        "Zelda's Chest",
        65,
        39,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[59],
      ),
    );
    dungeon.dungeonMaps.push(boomerangMap);
    var darkchestMap = new DungeonMap('hc-darkchest', 'Dark Sewers Room');
    darkchestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        93,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'hc-entry',
      ),
    );
    darkchestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        10,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'hc-keyrat',
      ),
    );
    darkchestMap.nodes.push(
      new DungeonNode(
        'Dark Sewers Chest',
        76,
        42,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[56],
      ),
    );
    dungeon.dungeonMaps.push(darkchestMap);
    var keyratMap = new DungeonMap('hc-keyrat', 'Key Rat');
    keyratMap.nodes.push(
      new DungeonNode(
        '',
        49,
        69,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'hc-darkchest',
      ),
    );
    keyratMap.nodes.push(
      new DungeonNode(
        '',
        75,
        34,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'hc-bombablewall',
      ),
    );
    keyratMap.nodes.push(
      new DungeonNode(
        'Boomerang Chest',
        17,
        45,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        items[56],
      ),
    );
    dungeon.dungeonMaps.push(keyratMap);
    var bombablewallMap = new DungeonMap('hc-bombablewall', 'Sewers Bombable Wall');
    bombablewallMap.nodes.push(
      new DungeonNode(
        '',
        75,
        93,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return (
            (items.lamp && config.mode.indexOf('standard') === -1) ||
            (items.fireRod && config.mode.indexOf('standard') === -1 && config.advancedItems) ||
            config.mode.indexOf('standard') > -1
          );
        },
        'hc-keyrat',
        'Lamp Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    bombablewallMap.nodes.push(
      new DungeonNode(
        '',
        75,
        10,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'hc-sanctuary',
      ),
    );
    bombablewallMap.nodes.push(
      new DungeonNode(
        'Bombable Wall Chest 1',
        14,
        56,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[53],
      ),
    );
    bombablewallMap.nodes.push(
      new DungeonNode(
        'Bombable Wall Chest 2',
        20,
        56,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[54],
      ),
    );
    bombablewallMap.nodes.push(
      new DungeonNode(
        'Bombable Wall Chest 3',
        26,
        56,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[55],
      ),
    );
    dungeon.dungeonMaps.push(bombablewallMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
