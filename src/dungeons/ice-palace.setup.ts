import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class IcePalaceSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Ice Palace',
      items[176],
      function (items, config) {
        if (config.mode === 'inverted') {
          return (
            items.flippers ||
            (config.canGlitch &&
              ((items.flute && items.canInvertedLW()) ||
                (items.canInvertedNEDW(true) && (items.hammer || items.glove)) ||
                (items.canInvertedLW() && items.mirror && items.moonPearl) ||
                items.boots))
          );
        } else {
          return (
            (items.flippers || config.canGlitch) && (items.moonPearl || config.canGlitch) && items.glove === 2
          );
        }
      },
      79.6,
      85.8,
    );
    var entryMap = new DungeonMap('ip-entry', 'Ice Palace Entrance');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'dw-lake-hylea' : 'exit',
        '',
        [-1],
        1,
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hasMeltyPower(config) && (items.moonPearl || config.mode === 'inverted');
        },
        'ip-first-fork',
        'Fire Rod or Bombos Required',
        [-1],
        0,
        function (items, config) {
          return items.hasMeltyPower(config);
        },
      ),
    );
    if (config.hintsEnabled) {
      entryMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          50,
          20,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '8',
        ),
      );
    }
    dungeon.dungeonMaps.push(entryMap);
    var firstForkMap = new DungeonMap('ip-first-fork', 'Push Block Cross');
    firstForkMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-entry',
      ),
    );
    firstForkMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-compass',
      ),
    );
    firstForkMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-tile',
      ),
    );
    dungeon.dungeonMaps.push(firstForkMap);
    var compassMap = new DungeonMap('ip-compass', 'Compass Room');
    compassMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-first-fork',
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        'Compass Chest',
        47,
        66,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[169],
      ),
    );
    dungeon.dungeonMaps.push(compassMap);
    var tileMap = new DungeonMap('ip-tile', 'Giant Stalfo Room');
    tileMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-conveyor-room',
      ),
    );
    if (config.hintsEnabled) {
      tileMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          50,
          19,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '9',
        ),
      );
    }
    dungeon.dungeonMaps.push(tileMap);
    var conveyorRoomMap = new DungeonMap('ip-conveyor-room', 'Conveyor Room');
    conveyorRoomMap.nodes.push(
      new DungeonNode(
        '',
        55,
        53,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    conveyorRoomMap.nodes.push(
      new DungeonNode(
        '',
        20,
        42,
        NodeStatus.SWITCH,
        function (items, config) {
          return true;
        },
        'switch',
      ),
    );
    conveyorRoomMap.nodes.push(
      new DungeonNode(
        '',
        25,
        69,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-bj',
      ),
    );
    dungeon.dungeonMaps.push(conveyorRoomMap);
    var bjMap = new DungeonMap('ip-bj', 'Bomb Jump Room');
    bjMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-conveyor-room',
      ),
    );
    bjMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return !items.crystalSwitch;
        },
        'ip-plus',
        'Switch on Red Required',
        [-1],
        0,
        function (items, config) {
          return true;
        },
      ),
    );
    dungeon.dungeonMaps.push(bjMap);
    var plusMap = new DungeonMap('ip-plus', 'Plus Shaped Room');
    plusMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-bj',
      ),
    );
    plusMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-spike-room',
      ),
    );
    plusMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-tall-room',
      ),
    );
    plusMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-double-freezor',
      ),
    );
    dungeon.dungeonMaps.push(plusMap);
    var doubleFreezorMap = new DungeonMap('ip-double-freezor', 'Freezor Room');
    doubleFreezorMap.nodes.push(
      new DungeonNode(
        '',
        28,
        67,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-plus',
      ),
    );
    doubleFreezorMap.nodes.push(
      new DungeonNode(
        'Freezor Chest',
        46.5,
        53.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[172],
      ),
    );
    doubleFreezorMap.nodes.push(
      new DungeonNode(
        '',
        27,
        50,
        NodeStatus.HOLE,
        function (items, config) {
          return true;
        },
        'ip-bc',
      ),
    );
    if (config.canGlitch) {
      doubleFreezorMap.nodes.push(
        new DungeonNode(
          '',
          88,
          53.5,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return true;
          },
          'ip-tall-room',
        ),
      );
    }
    dungeon.dungeonMaps.push(doubleFreezorMap);
    var tallRoomMap = new DungeonMap('ip-tall-room', 'Tall Icy Room');
    if (config.canGlitch) {
      tallRoomMap.nodes.push(
        new DungeonNode(
          '',
          32,
          77,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return true;
          },
          'ip-double-freezor',
        ),
      );
    } else {
      tallRoomMap.nodes.push(
        new DungeonNode(
          '',
          32,
          77,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return true;
          },
          'ip-bc',
        ),
      );
    }
    tallRoomMap.nodes.push(
      new DungeonNode(
        '',
        68,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hookshot;
        },
        'ip-spike-room',
        'Hookshot Required',
        [-1],
        0,
        function (items, config) {
          return true;
        },
      ),
    );
    tallRoomMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-double-jelly',
      ),
    );
    if (config.hintsEnabled) {
      tallRoomMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          50,
          9.5,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '10',
        ),
      );
    }
    dungeon.dungeonMaps.push(tallRoomMap);
    var spikeRoomMap = new DungeonMap('ip-spike-room', 'Spike Room');
    spikeRoomMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-plus',
      ),
    );
    spikeRoomMap.nodes.push(
      new DungeonNode(
        'Spike Room Chest',
        28.5,
        72,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[171],
      ),
    );
    spikeRoomMap.nodes.push(
      new DungeonNode(
        '',
        72,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-map',
      ),
    );
    dungeon.dungeonMaps.push(spikeRoomMap);
    var mapMap = new DungeonMap('ip-map', 'Map Room');
    mapMap.nodes.push(
      new DungeonNode(
        '',
        72,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-spike-room',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        72,
        72,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hammer && items.glove;
        },
        items[170],
        'Hammer and Glove Required',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Small Key',
        50,
        50,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return items.hammer && items.glove;
        },
        '',
        'Hammer and Glove Required',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Big Key Room',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer && items.glove;
        },
        'ip-bk',
        'Hammer and Glove Required',
      ),
    );
    dungeon.dungeonMaps.push(mapMap);
    var bigKeyMap = new DungeonMap('ip-bk', 'Big Key Room');
    bigKeyMap.nodes.push(
      new DungeonNode(
        '',
        40.5,
        34,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-map',
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-first-fork',
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        44,
        72,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[168],
      ),
    );
    dungeon.dungeonMaps.push(bigKeyMap);
    var bigChestMap = new DungeonMap('ip-bc', 'Big Chest Room');
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-push-block',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        25,
        30,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return true;
        },
        items[174],
      ),
    );
    dungeon.dungeonMaps.push(bigChestMap);
    var doubleJellyMap = new DungeonMap('ip-double-jelly', 'Iced T Room');
    doubleJellyMap.nodes.push(
      new DungeonNode(
        '',
        31,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-tall-room',
      ),
    );
    doubleJellyMap.nodes.push(
      new DungeonNode(
        'Iced T Chest',
        28,
        72,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[173],
      ),
    );
    doubleJellyMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-icy-pot',
      ),
    );
    dungeon.dungeonMaps.push(doubleJellyMap);
    var icyPotMap = new DungeonMap('ip-icy-pot', 'Skull Pot Firebar Room');
    icyPotMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-push-block-right',
      ),
    );
    icyPotMap.nodes.push(
      new DungeonNode(
        '',
        19,
        38,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    icyPotMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-double-jelly',
      ),
    );
    dungeon.dungeonMaps.push(icyPotMap);
    var pushBlockMap = new DungeonMap('ip-push-block', 'Push Block Room');
    pushBlockMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hookshot;
        },
        'ip-bc',
        'Hookshot Required',
      ),
    );
    pushBlockMap.nodes.push(
      new DungeonNode(
        '',
        42,
        52,
        NodeStatus.OPEN_DOOR_PUSH_BLOCK,
        function (items, config) {
          return items.crystalSwitch;
        },
        'ip-switch-room',
        'Switch on Blue Required',
      ),
    );
    pushBlockMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return !items.crystalSwitch;
        },
        'ip-icy-pot',
        'Switch on Red Required',
      ),
    );
    pushBlockMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return !items.crystalSwitch;
        },
        'ip-fairy-drop',
        'Switch on Red Required',
      ),
    );
    dungeon.dungeonMaps.push(pushBlockMap);
    var pushBlockRightMap = new DungeonMap('ip-push-block-right', 'Push Block Room');
    pushBlockRightMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hookshot && !items.crystalSwitch;
        },
        'ip-bc',
        'Hookshot and Switch on Red Required',
      ),
    );
    pushBlockRightMap.nodes.push(
      new DungeonNode(
        '',
        59,
        47,
        NodeStatus.HOLE,
        function (items, config) {
          return items.crystalSwitch;
        },
        'ip-switch-room',
        'Switch on Blue Required',
      ),
    );
    pushBlockRightMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-icy-pot',
      ),
    );
    pushBlockRightMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-fairy-drop',
      ),
    );
    dungeon.dungeonMaps.push(pushBlockRightMap);
    var fairyDropMap = new DungeonMap('ip-fairy-drop', 'Fairy Drop Room');
    fairyDropMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-push-block-right',
      ),
    );
    fairyDropMap.nodes.push(
      new DungeonNode(
        '',
        31,
        46,
        NodeStatus.HOLE,
        function (items, config) {
          return items.crystalSwitch;
        },
        'ip-switch-room',
        'Switch on Blue Required',
      ),
    );
    fairyDropMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-switch-room',
      ),
    );
    dungeon.dungeonMaps.push(fairyDropMap);
    var switchRoomMap = new DungeonMap('ip-switch-room', 'Button Switch Room');
    switchRoomMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-fairy-drop',
      ),
    );
    switchRoomMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-final-switch',
      ),
    );
    switchRoomMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.somaria || items.ipBlockPushed;
        },
        'ip-pre-khold',
        'Somaria or Block Pushed from Above Required',
      ),
    );
    dungeon.dungeonMaps.push(switchRoomMap);
    var finalSwitchMap = new DungeonMap('ip-final-switch', 'Crystal Switch Room');
    finalSwitchMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ip-switch-room',
      ),
    );
    finalSwitchMap.nodes.push(
      new DungeonNode(
        '',
        72,
        54,
        NodeStatus.SWITCH,
        function (items, config) {
          return true;
        },
        'switch',
      ),
    );
    dungeon.dungeonMaps.push(finalSwitchMap);
    var preKholdMap = new DungeonMap('ip-pre-khold', 'Room Above Boss');
    preKholdMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ip-switch-room',
      ),
    );
    preKholdMap.nodes.push(
      new DungeonNode(
        '',
        25,
        76.5,
        NodeStatus.HOLE,
        function (items, config) {
          return items.hammer && items.glove;
        },
        'ip-khold',
        'Hammer Required',
      ),
    );
    dungeon.dungeonMaps.push(preKholdMap);
    var kholdMap = new DungeonMap('ip-khold', 'Kholdstare Room');
    kholdMap.nodes.push(
      new DungeonNode(
        'Kholdstare',
        50,
        50,
        NodeStatus.BOSS,
        function (items, config) {
          return true;
        },
        items[175],
      ),
    );
    dungeon.dungeonMaps.push(kholdMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
