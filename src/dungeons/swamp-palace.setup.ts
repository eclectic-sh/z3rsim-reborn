import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class SwampPalaceSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Swamp Palace',
      items[149],
      function (items, config) {
        return config.mode === 'inverted' || (items.moonPearl && items.canSouthDarkWorld(config.canGlitch));
      },
      47,
      91,
    );
    var entryMap = new DungeonMap('sp-entry', 'Swamp Palace Entrance');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'dw-flute7' : 'exit',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Entrance Chest',
        36,
        21,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return (
            items.flippers &&
            items.mirror &&
            (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl))
          );
        },
        items[139],
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        25,
        9.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return (
            items.flippers &&
            items.mirror &&
            (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl))
          );
        },
        'sp-tall-room',
      ),
    );
    if (config.hintsEnabled) {
      entryMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          60,
          41,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '6',
        ),
      );
    }
    dungeon.dungeonMaps.push(entryMap);
    var tallRoomMap = new DungeonMap('sp-tall-room', 'Key Pot Corridor');
    tallRoomMap.nodes.push(
      new DungeonNode(
        '',
        75,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-entry',
      ),
    );
    tallRoomMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        12.5,
        26.8,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[142],
      ),
    );
    tallRoomMap.nodes.push(
      new DungeonNode(
        '',
        58,
        76.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer;
        },
        'sp-main-hub',
        'Hammer Required',
      ),
    );
    dungeon.dungeonMaps.push(tallRoomMap);
    var mainHubMap = new DungeonMap('sp-main-hub', 'Main Hub');
    mainHubMap.nodes.push(
      new DungeonNode(
        '',
        93,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-tall-room',
      ),
    );
    mainHubMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        48.5,
        44.5,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return true;
        },
        items[140],
      ),
    );
    mainHubMap.nodes.push(
      new DungeonNode(
        'Small Key',
        91,
        51.5,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return items.hookshot;
        },
        '',
        'Hookshot Required',
      ),
    );
    mainHubMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.hookshot;
        },
        'sp-downstairs1',
        'Hookshot Required',
      ),
    );
    mainHubMap.nodes.push(
      new DungeonNode(
        '',
        7,
        26,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'sp-switch',
      ),
    );
    mainHubMap.nodes.push(
      new DungeonNode(
        '',
        7,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-south-switch',
      ),
    );
    mainHubMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-south',
      ),
    );
    dungeon.dungeonMaps.push(mainHubMap);
    var southMap = new DungeonMap('sp-south', 'Compass Room');
    southMap.nodes.push(
      new DungeonNode(
        '',
        50,
        15,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-main-hub',
      ),
    );
    southMap.nodes.push(
      new DungeonNode(
        'Compass Chest',
        23.5,
        17.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[144],
      ),
    );
    dungeon.dungeonMaps.push(southMap);
    var switchMap = new DungeonMap('sp-switch', 'Switch Room');
    switchMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-main-hub',
      ),
    );
    switchMap.nodes.push(
      new DungeonNode(
        'Crystal Switch',
        40,
        41,
        NodeStatus.SWITCH,
        function (items, config) {
          return true;
        },
        'switch',
      ),
    );
    switchMap.nodes.push(
      new DungeonNode(
        'Water Switch',
        27,
        39,
        NodeStatus.WATER_SWITCH,
        function (items, config) {
          return items.crystalSwitch;
        },
        'flood',
      ),
    );
    switchMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.crystalSwitch;
        },
        'sp-south-switch',
        'Switch on Blue Required',
      ),
    );
    dungeon.dungeonMaps.push(switchMap);
    var southSwitchMap = new DungeonMap('sp-south-switch', 'South of Switch Room');
    southSwitchMap.nodes.push(
      new DungeonNode(
        '',
        93,
        51.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-main-hub',
      ),
    );
    southSwitchMap.nodes.push(
      new DungeonNode(
        '',
        75,
        35,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.crystalSwitch;
        },
        'sp-switch',
        'Switch on Blue Required',
      ),
    );
    southSwitchMap.nodes.push(
      new DungeonNode(
        '',
        7,
        51.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.spFlooded;
        },
        'sp-left',
        'Flooded Swamp Required',
      ),
    );
    southSwitchMap.nodes.push(
      new DungeonNode(
        '',
        50,
        39,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return !items.spFlooded;
        },
        'sp-left-key',
        'Room must not be flooded (leave dungeon to reset)',
      ),
    );
    dungeon.dungeonMaps.push(southSwitchMap);
    var leftKeyMap = new DungeonMap('sp-left-key', 'Key Pot Room');
    leftKeyMap.nodes.push(
      new DungeonNode(
        '',
        50,
        79,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-south-switch',
      ),
    );
    leftKeyMap.nodes.push(
      new DungeonNode(
        '',
        47,
        41,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(leftKeyMap);
    var leftMap = new DungeonMap('sp-left', 'Left Side');
    leftMap.nodes.push(
      new DungeonNode(
        '',
        93,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-south-switch',
      ),
    );
    leftMap.nodes.push(
      new DungeonNode(
        'Left Side Chest',
        38,
        26.7,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[143],
      ),
    );
    leftMap.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        92,
        26.7,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return !items.crystalSwitch;
        },
        items[141],
        'Switch on Red Required',
      ),
    );
    dungeon.dungeonMaps.push(leftMap);
    var downstairs1Map = new DungeonMap('sp-downstairs1', 'Flooded Room');
    downstairs1Map.nodes.push(
      new DungeonNode(
        '',
        84,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-main-hub',
      ),
    );
    downstairs1Map.nodes.push(
      new DungeonNode(
        'Flooded Room Left Chest',
        67,
        68,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[145],
      ),
    );
    downstairs1Map.nodes.push(
      new DungeonNode(
        'Flooded Room Right Chest',
        76.5,
        68,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[146],
      ),
    );
    downstairs1Map.nodes.push(
      new DungeonNode(
        '',
        25,
        13.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-downstairs2',
      ),
    );
    dungeon.dungeonMaps.push(downstairs1Map);
    var downstairs2Map = new DungeonMap('sp-downstairs2', 'Waterfall Room');
    downstairs2Map.nodes.push(
      new DungeonNode(
        '',
        25,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-downstairs1',
      ),
    );
    downstairs2Map.nodes.push(
      new DungeonNode(
        'Hidden Waterfall Chest',
        54.7,
        76.7,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[147],
      ),
    );
    downstairs2Map.nodes.push(
      new DungeonNode(
        '',
        75,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-arrghus',
      ),
    );
    dungeon.dungeonMaps.push(downstairs2Map);
    var arrghusMap = new DungeonMap('sp-arrghus', 'Arrghus Room');
    arrghusMap.nodes.push(
      new DungeonNode(
        'Arrghus',
        50,
        60,
        NodeStatus.BOSS,
        function (items, config) {
          return true;
        },
        items[148],
      ),
    );
    dungeon.dungeonMaps.push(arrghusMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
