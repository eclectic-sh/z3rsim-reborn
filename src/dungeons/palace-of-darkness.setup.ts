import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class PalaceOfDarknessSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Palace of Darkness',
      items[138],
      function (items, config) {
        if (config.mode === 'inverted') {
          return items.canInvertedNEDW(config.canGlitch);
        } else {
          return items.canNorthEastDarkWorld(config.canGlitch) && items.moonPearl;
        }
      },
      94,
      40,
    );
    var entryMap = new DungeonMap('pod-entry', 'Palace of Darkness Entrance');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'dw-eastern-palace' : 'exit',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        25,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-left',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'pod-fork1',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        75,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-tile',
      ),
    );
    dungeon.dungeonMaps.push(entryMap);
    var leftMap = new DungeonMap('pod-left', 'Shooter Room');
    leftMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-entry',
      ),
    );
    leftMap.nodes.push(
      new DungeonNode(
        'Shooter Room Chest',
        78,
        72,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[124],
      ),
    );
    dungeon.dungeonMaps.push(leftMap);
    var tileMap = new DungeonMap('pod-tile', 'Hint Tile Room');
    tileMap.nodes.push(
      new DungeonNode(
        '',
        53,
        53,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-entry',
      ),
    );
    if (config.hintsEnabled) {
      tileMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          50,
          20,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '5',
        ),
      );
    }
    tileMap.nodes.push(
      new DungeonNode(
        'Right Side',
        50,
        87,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hasBow() || (config.isEnemizer && config.mode !== 'standard');
        },
        'pod-right',
        'Bow Required',
        [-1],
        0,
        function (items, config) {
          return true;
        },
      ),
    );
    dungeon.dungeonMaps.push(tileMap);
    var rightMap = new DungeonMap('pod-right', 'Map Room');
    rightMap.nodes.push(
      new DungeonNode(
        '',
        63,
        78,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-tile',
      ),
    );
    rightMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        63,
        57.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[129],
      ),
    );
    rightMap.nodes.push(
      new DungeonNode(
        'Arena Ledge Chest',
        10,
        46,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[126],
      ),
    );
    rightMap.nodes.push(
      new DungeonNode(
        '',
        63,
        30,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer;
        },
        'pod-statue',
        'Hammer Required',
      ),
    );
    dungeon.dungeonMaps.push(rightMap);
    var fork1Map = new DungeonMap('pod-fork1', 'First Fork');
    fork1Map.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-entry',
      ),
    );
    fork1Map.nodes.push(
      new DungeonNode(
        '',
        25,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-jump',
      ),
    );
    fork1Map.nodes.push(
      new DungeonNode(
        '',
        75,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-jump',
      ),
    );
    fork1Map.nodes.push(
      new DungeonNode(
        '',
        67,
        54,
        NodeStatus.HOLE,
        function (items, config) {
          return true;
        },
        'pod-stalfos-drop',
      ),
    );
    fork1Map.nodes.push(
      new DungeonNode(
        '',
        25,
        38,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'pod-bk',
      ),
    );
    dungeon.dungeonMaps.push(fork1Map);
    var bigKeyMap = new DungeonMap('pod-bk', 'Big Key Room');
    bigKeyMap.nodes.push(
      new DungeonNode(
        '',
        73,
        56,
        NodeStatus.HOLE,
        function (items, config) {
          return true;
        },
        'pod-stalfos-drop',
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        50,
        60,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[125],
      ),
    );
    dungeon.dungeonMaps.push(bigKeyMap);
    var stalfosDropMap = new DungeonMap('pod-stalfos-drop', 'Stalfos Basement Room');
    stalfosDropMap.nodes.push(
      new DungeonNode(
        '',
        80,
        42,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-tile',
      ),
    );
    stalfosDropMap.nodes.push(
      new DungeonNode(
        'Stalfos Basement Chest',
        48.5,
        53,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[128],
      ),
    );
    dungeon.dungeonMaps.push(stalfosDropMap);
    var jumpMap = new DungeonMap('pod-jump', 'The Arena');
    jumpMap.nodes.push(
      new DungeonNode(
        '',
        25,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-fork1',
      ),
    );
    jumpMap.nodes.push(
      new DungeonNode(
        '',
        75,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-fork1',
      ),
    );
    jumpMap.nodes.push(
      new DungeonNode(
        'Arena Bridge Chest',
        73,
        71,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[127],
      ),
    );
    jumpMap.nodes.push(
      new DungeonNode(
        '',
        90,
        51.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-statue',
      ),
    );
    jumpMap.nodes.push(
      new DungeonNode(
        '',
        25,
        9.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'pod-fork2',
      ),
    );
    dungeon.dungeonMaps.push(jumpMap);
    var fork2Map = new DungeonMap('pod-fork2', 'Hammer Bridge');
    fork2Map.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-jump',
      ),
    );
    fork2Map.nodes.push(
      new DungeonNode(
        '',
        68,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-compass',
      ),
    );
    fork2Map.nodes.push(
      new DungeonNode(
        '',
        32,
        26,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.lamp;
        },
        'pod-maze',
        'Lamp Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    if (config.canGlitch) {
      fork2Map.nodes.push(
        new DungeonNode(
          '',
          42,
          61,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return false;
          },
          'pod-maze',
          '',
          [-1],
          0,
          DungeonNode.noReqs,
        ),
      );
    }
    dungeon.dungeonMaps.push(fork2Map);
    var mazeMap = new DungeonMap('pod-maze', 'Dark Maze');
    mazeMap.nodes.push(
      new DungeonNode(
        '',
        67,
        27,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'pod-fork2',
      ),
    );
    mazeMap.nodes.push(
      new DungeonNode(
        'Dark Maze Top Chest',
        29,
        15,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[135],
      ),
    );
    mazeMap.nodes.push(
      new DungeonNode(
        'Dark Maze Bottom Chest',
        64,
        84,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[136],
      ),
    );
    mazeMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        89,
        51,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return true;
        },
        items[130],
      ),
    );
    dungeon.dungeonMaps.push(mazeMap);
    var compassMap = new DungeonMap('pod-compass', 'Compass Room');
    compassMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-fork2',
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        '',
        31,
        20,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.lamp || (config.advancedItems && items.fireRod);
        },
        'pod-basement',
        'Lamp Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        '',
        69,
        20,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.lamp || (config.advancedItems && items.fireRod);
        },
        'pod-basement',
        'Lamp Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'pod-spike-statue',
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        'Compass Chest',
        50,
        53.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[131],
      ),
    );
    dungeon.dungeonMaps.push(compassMap);
    var spikeStatueMap = new DungeonMap('pod-spike-statue', 'Harmless Hellway');
    spikeStatueMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-compass',
      ),
    );
    spikeStatueMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-jump',
      ),
    );
    spikeStatueMap.nodes.push(
      new DungeonNode(
        'Harmless Hellway Chest',
        25,
        50,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[132],
      ),
    );
    dungeon.dungeonMaps.push(spikeStatueMap);
    var basementMap = new DungeonMap('pod-basement', 'Dark Basement Room');
    basementMap.nodes.push(
      new DungeonNode(
        '',
        39,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-compass',
      ),
    );
    basementMap.nodes.push(
      new DungeonNode(
        '',
        61,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-compass',
      ),
    );
    basementMap.nodes.push(
      new DungeonNode(
        'Dark Basement Left Chest',
        36,
        73,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[133],
      ),
    );
    basementMap.nodes.push(
      new DungeonNode(
        'Dark Basement Right Chest',
        63,
        73,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[134],
      ),
    );
    dungeon.dungeonMaps.push(basementMap);
    var statueMap = new DungeonMap('pod-statue', 'Statue Push Room');
    statueMap.nodes.push(
      new DungeonNode(
        '',
        29,
        79,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-jump',
      ),
    );
    statueMap.nodes.push(
      new DungeonNode(
        '',
        50,
        15,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.hasBow() && items.hammer && items.lamp;
        },
        'pod-to-helma',
        (config.canGlitch ? '' : 'Lamp, ') + 'Bow and Hammer Required',
        [-1],
        0,
        function (items, config) {
          return items.hasBow() && items.hammer;
        },
      ),
    );
    dungeon.dungeonMaps.push(statueMap);
    var toHelmaMap = new DungeonMap('pod-to-helma', 'Path to Helmasaur');
    toHelmaMap.nodes.push(
      new DungeonNode(
        '',
        49,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'pod-statue',
      ),
    );
    toHelmaMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return true;
        },
        'pod-helma',
      ),
    );
    dungeon.dungeonMaps.push(toHelmaMap);
    var helmaMap = new DungeonMap('pod-helma', 'Helmasaur King Room');
    helmaMap.nodes.push(
      new DungeonNode(
        'Helmasaur King',
        50,
        50,
        NodeStatus.BOSS,
        function (items, config) {
          return true;
        },
        items[137],
      ),
    );
    dungeon.dungeonMaps.push(helmaMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
