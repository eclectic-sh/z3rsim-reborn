import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class MiseryMireSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Misery Mire',
      items[185],
      function (items, config) {
        return (
          (items.moonPearl || config.mode === 'inverted') &&
          items.canMire(config) &&
          items.hasMedallion('mm', config) &&
          (items.sword || config.weapons === 'swordless') &&
          ((items.boots && config.advancedItems) || items.hookshot)
        );
      },
      11.6,
      82.9,
    );
    var entryMap = new DungeonMap('mm-entry', 'Misery Mire Main Lobby');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        75,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'dw-desert' : 'exit',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        7,
        77,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'mm-switch-room',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        7,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-lone-stalfo',
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
        'mm-west-spike',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        93,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-bc',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        93,
        26,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.crystalSwitch;
        },
        'mm-map',
        'Switch on Blue Required',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Main Lobby Chest',
        57,
        14,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.crystalSwitch;
        },
        items[178],
        'Switch on Blue Required',
      ),
    );
    dungeon.dungeonMaps.push(entryMap);
    var westSpikeMap = new DungeonMap('mm-west-spike', 'Push Block Room');
    westSpikeMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-entry',
      ),
    );
    westSpikeMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-two-bridges',
      ),
    );
    westSpikeMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-spike-room',
      ),
    );
    dungeon.dungeonMaps.push(westSpikeMap);
    var spikeRoomMap = new DungeonMap('mm-spike-room', 'Spike Room');
    spikeRoomMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-west-spike',
      ),
    );
    spikeRoomMap.nodes.push(
      new DungeonNode(
        'Spike Room Chest',
        59.5,
        54,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[183],
      ),
    );
    spikeRoomMap.nodes.push(
      new DungeonNode(
        '',
        22.5,
        29,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    spikeRoomMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'mm-north-spike',
      ),
    );
    spikeRoomMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.crystalSwitch;
        },
        'mm-map',
        'Switch on Blue Required',
      ),
    );
    dungeon.dungeonMaps.push(spikeRoomMap);
    var northSpikeMap = new DungeonMap('mm-north-spike', 'North of Spike Room');
    northSpikeMap.nodes.push(
      new DungeonNode(
        '',
        50,
        85,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'mm-spike-room',
      ),
    );
    northSpikeMap.nodes.push(
      new DungeonNode(
        '',
        22,
        50,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-big-door',
      ),
    );
    northSpikeMap.nodes.push(
      new DungeonNode(
        '',
        50,
        16,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-fish-spine',
      ),
    );
    dungeon.dungeonMaps.push(northSpikeMap);
    var fishSpineMap = new DungeonMap('mm-fish-spine', 'Fish Spine');
    fishSpineMap.nodes.push(
      new DungeonNode(
        '',
        75,
        95,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.crystalSwitch;
        },
        'mm-lone-stalfo',
        'Switch on Blue Required',
      ),
    );
    fishSpineMap.nodes.push(
      new DungeonNode(
        '',
        93,
        50,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-north-spike',
      ),
    );
    fishSpineMap.nodes.push(
      new DungeonNode(
        '',
        19,
        22,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    fishSpineMap.nodes.push(
      new DungeonNode(
        '',
        33,
        26,
        NodeStatus.SWITCH,
        function (items, config) {
          return true;
        },
        'switch',
      ),
    );
    dungeon.dungeonMaps.push(fishSpineMap);
    var mapMap = new DungeonMap('mm-map', 'Map Room');
    mapMap.nodes.push(
      new DungeonNode(
        '',
        32,
        26,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'mm-entry',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.crystalSwitch;
        },
        'mm-spike-room',
        'Switch on Blue Required',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        '',
        32,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.crystalSwitch;
        },
        'mm-entry',
        'Switch on Blue Required',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        '',
        68,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.crystalSwitch;
        },
        'mm-bc',
        'Switch on Blue Required',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        41,
        26,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.crystalSwitch;
        },
        items[182],
      ),
    );
    dungeon.dungeonMaps.push(mapMap);
    var switchRoomMap = new DungeonMap('mm-switch-room', 'Switch Room');
    switchRoomMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'mm-entry',
      ),
    );
    switchRoomMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'mm-four-torch',
      ),
    );
    switchRoomMap.nodes.push(
      new DungeonNode(
        '',
        34.5,
        47,
        NodeStatus.SWITCH,
        function (items, config) {
          return true;
        },
        'switch',
      ),
    );
    switchRoomMap.nodes.push(
      new DungeonNode(
        '',
        22,
        72,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(switchRoomMap);
    var fourTorchMap = new DungeonMap('mm-four-torch', 'Four Torch Room');
    fourTorchMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'mm-switch-room',
      ),
    );
    fourTorchMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hasFiresource();
        },
        'mm-compass',
        'Fire Source Required',
      ),
    );
    fourTorchMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hasFiresource();
        },
        'mm-tile',
        'Fire Source Required',
      ),
    );
    dungeon.dungeonMaps.push(fourTorchMap);
    var compassMap = new DungeonMap('mm-compass', 'Compass Room');
    compassMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-four-torch',
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-lone-stalfo',
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        'Compass Chest',
        50,
        47,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.crystalSwitch;
        },
        items[180],
        'Switch on Blue Required',
      ),
    );
    dungeon.dungeonMaps.push(compassMap);
    var tileMap = new DungeonMap('mm-tile', 'Moving Wall Room');
    tileMap.nodes.push(
      new DungeonNode(
        '',
        32,
        76.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-four-torch',
      ),
    );
    tileMap.nodes.push(
      new DungeonNode(
        '',
        56.5,
        76.5,
        NodeStatus.HOLE,
        function (items, config) {
          return true;
        },
        'mm-bk',
      ),
    );
    if (config.hintsEnabled) {
      tileMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          36,
          33,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '11',
        ),
      );
    }
    dungeon.dungeonMaps.push(tileMap);
    var bigKeyMap = new DungeonMap('mm-bk', 'Big Key Room');
    bigKeyMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-lone-stalfo',
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        50,
        50,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[179],
      ),
    );
    dungeon.dungeonMaps.push(bigKeyMap);
    var loneStalfoMap = new DungeonMap('mm-lone-stalfo', 'Lonely Stalfo Room');
    loneStalfoMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-entry',
      ),
    );
    loneStalfoMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return true;
        },
        'mm-big-door',
      ),
    );
    dungeon.dungeonMaps.push(loneStalfoMap);
    var bigDoorMap = new DungeonMap('mm-big-door', 'Big Door Room');
    bigDoorMap.nodes.push(
      new DungeonNode(
        '',
        90,
        51.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-north-spike',
      ),
    );
    bigDoorMap.nodes.push(
      new DungeonNode('', 50, 34, NodeStatus.BK_LOCKED, DungeonNode.noReqs, 'mm-two-bridges', '', [-1], 1),
    );
    dungeon.dungeonMaps.push(bigDoorMap);
    var bigChestMap = new DungeonMap('mm-bc', 'Big Chest Room');
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        32,
        50,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-entry',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        32,
        25,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.crystalSwitch;
        },
        'mm-map',
        'Switch on Blue Required',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        50,
        15,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return true;
        },
        items[177],
      ),
    );
    dungeon.dungeonMaps.push(bigChestMap);
    var preVittyMap = new DungeonMap('mm-pre-vitty', 'Room before Vitreous');
    preVittyMap.nodes.push(
      new DungeonNode(
        '',
        75,
        60,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'mm-two-bridges',
        '',
        [-1],
        1,
      ),
    );
    preVittyMap.nodes.push(
      new DungeonNode(
        '',
        25,
        35,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return true;
        },
        'mm-vitty',
      ),
    );
    dungeon.dungeonMaps.push(preVittyMap);
    var twoBridgesMap = new DungeonMap('mm-two-bridges', 'Bridge Room');
    twoBridgesMap.nodes.push(
      new DungeonNode(
        '',
        50,
        13,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.lamp && items.somaria && items.currentRegionInMap === 1;
        },
        'mm-pre-vitty',
        'Somaria ' + (config.canGlitch ? 'and Boots if hovering ' : 'and Lamp ') + 'required',
        [0, 1],
        0,
        function (items, config) {
          return items.somaria && (items.currentRegionInMap === 1 || items.boots);
        },
      ),
    );
    twoBridgesMap.nodes.push(new DungeonNode('', 50, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'mm-big-door', '', [1]));
    twoBridgesMap.nodes.push(
      new DungeonNode(
        '',
        75,
        93,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.currentRegionInMap === 0 || items.hookshot;
        },
        'mm-west-spike',
        'Hookshot Required',
      ),
    );
    twoBridgesMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        75,
        30,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.currentRegionInMap === 0 || items.hookshot;
        },
        items[181],
        'Hookshot Required',
        [0, 1],
      ),
    );
    dungeon.dungeonMaps.push(twoBridgesMap);
    var vittyMap = new DungeonMap('mm-vitty', 'Vitreous Room');
    vittyMap.nodes.push(
      new DungeonNode(
        'Vitreous',
        50,
        52,
        NodeStatus.BOSS,
        function (items, config) {
          return items.hammer || items.sword || items.hasBow();
        },
        items[184],
      ),
    );
    dungeon.dungeonMaps.push(vittyMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
