import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class ThievesTownSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Thieves Town',
      items[167],
      function (items, config) {
        return config.mode === 'inverted' || (items.moonPearl && items.canNorthWestDarkWorld(config.canGlitch));
      },
      12.8,
      47.9,
    );
    var entryMap = new DungeonMap('tt-entry', 'Thieves Town Great Hall');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        25,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'dw-kakariko' : 'exit',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        87.5,
        6,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return true;
        },
        'tt-stalfo-corridor',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        13.5,
        66.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[161],
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Ambush Chest',
        19,
        30.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[163],
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Compass Chest',
        68.6,
        80,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[162],
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        39,
        85.3,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[160],
      ),
    );
    dungeon.dungeonMaps.push(entryMap);
    var stalfoCorridorMap = new DungeonMap('tt-stalfo-corridor', 'Stalfo Corridor');
    stalfoCorridorMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-entry',
      ),
    );
    stalfoCorridorMap.nodes.push(
      new DungeonNode(
        'Blind',
        50,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return (
            !!config.isEnemizer ||
            (items.ttBlindDelivered &&
              items.ttBombableFloor &&
              (items.sword || items.hammer || items.somaria || items.byrna))
          );
        },
        'tt-blind',
        'Floor Destroyed, Blind Rescued and a Weapon Required',
      ),
    );
    stalfoCorridorMap.nodes.push(
      new DungeonNode(
        '',
        33,
        77,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'tt-hellway',
      ),
    );
    stalfoCorridorMap.nodes.push(
      new DungeonNode(
        '',
        54,
        17,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(stalfoCorridorMap);
    var hellwayMap = new DungeonMap('tt-hellway', 'Hellway');
    hellwayMap.nodes.push(
      new DungeonNode(
        '',
        68,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-stalfo-corridor',
      ),
    );
    hellwayMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-tile',
      ),
    );
    hellwayMap.nodes.push(
      new DungeonNode(
        '',
        68,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-fork',
      ),
    );
    dungeon.dungeonMaps.push(hellwayMap);
    var tileMap = new DungeonMap('tt-tile', 'Hint Tile Room');
    tileMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-hellway',
      ),
    );
    tileMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-bombable-floor',
      ),
    );
    if (config.hintsEnabled) {
      tileMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          34,
          20.5,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '7',
        ),
      );
    }
    dungeon.dungeonMaps.push(tileMap);
    var forkMap = new DungeonMap('tt-fork', 'Conveyor Belt Circle');
    forkMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-hellway',
      ),
    );
    forkMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-fork2',
      ),
    );
    forkMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-stalfo-corridor',
      ),
    );
    dungeon.dungeonMaps.push(forkMap);
    var fork2Map = new DungeonMap('tt-fork2', 'Downstairs');
    fork2Map.nodes.push(
      new DungeonNode(
        '',
        75,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-fork',
      ),
    );
    fork2Map.nodes.push(
      new DungeonNode(
        '',
        7,
        77,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'tt-bc',
      ),
    );
    fork2Map.nodes.push(
      new DungeonNode(
        '',
        93,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-maiden',
      ),
    );
    dungeon.dungeonMaps.push(fork2Map);
    var maidenMap = new DungeonMap('tt-maiden', 'Blind Cell');
    maidenMap.nodes.push(
      new DungeonNode(
        '',
        32,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-fork2',
      ),
    );
    maidenMap.nodes.push(
      new DungeonNode(
        "Blind's Chest",
        61,
        19,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[165],
      ),
    );
    if (!config.isEnemizer) {
      maidenMap.nodes.push(
        new DungeonNode(
          '',
          51,
          22,
          NodeStatus.BLIND_RESCUE,
          function (items, config) {
            return true;
          },
          'blind',
        ),
      );
    }
    dungeon.dungeonMaps.push(maidenMap);
    var bigChestMap = new DungeonMap('tt-bc', 'Big Chest');
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-fork2',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        50,
        49,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return items.hammer;
        },
        items[164],
        'Hammer Required',
      ),
    );
    dungeon.dungeonMaps.push(bigChestMap);
    var bombableFloorMap = new DungeonMap('tt-bombable-floor', 'Attic');
    bombableFloorMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tt-tile',
      ),
    );
    bombableFloorMap.nodes.push(
      new DungeonNode(
        'Attic Chest',
        22,
        29,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[159],
      ),
    );
    if (!config.isEnemizer) {
      bombableFloorMap.nodes.push(
        new DungeonNode(
          'Bomb the Floor',
          50,
          38,
          NodeStatus.TT_BOMB_FLOOR,
          function (items, config) {
            return true;
          },
          'tt-bomb',
        ),
      );
    }
    dungeon.dungeonMaps.push(bombableFloorMap);
    var blindMap = new DungeonMap('tt-blind', 'Blind Room');
    blindMap.nodes.push(
      new DungeonNode(
        'Blind',
        50,
        50,
        NodeStatus.BOSS,
        function (items, config) {
          return true;
        },
        items[166],
      ),
    );
    dungeon.dungeonMaps.push(blindMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
