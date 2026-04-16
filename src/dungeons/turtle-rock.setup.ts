import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class TurtleRockSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Turtle Rock',
      items[198],
      function (items, config) {
        if (config.mode === 'inverted') {
          return (
            items.isTROpened ||
            (items.canInvertedEastDarkDeathMountain(config.canGlitch) &&
              (items.sword || config.weapons === 'swordless') &&
              items.hasMedallion('tr', config))
          );
        } else {
          return (
            items.moonPearl &&
            items.canDarkEastDeathMountain(config.canGlitch) &&
            (items.sword || config.weapons === 'swordless') &&
            items.hasMedallion('tr', config) &&
            items.hammer
          );
        }
      },
      93.8,
      10,
    );
    var entryMap = new DungeonMap('tr-entry', 'Turtle Rock Entrance');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'dw-trportal' : 'exit',
        '',
        [-1],
        1,
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.somaria;
        },
        'tr-hall',
      ),
    );
    if (config.hintsEnabled) {
      entryMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          36,
          78.5,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '12',
        ),
      );
    }
    dungeon.dungeonMaps.push(entryMap);
    var hallMap = new DungeonMap('tr-hall', 'Main Lobby');
    hallMap.nodes.push(
      new DungeonNode(
        '',
        75,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-entry',
      ),
    );
    hallMap.nodes.push(
      new DungeonNode(
        '',
        25,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-compass',
      ),
    );
    hallMap.nodes.push(
      new DungeonNode(
        '',
        93,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.fireRod;
        },
        'tr-map',
        'Fire Rod Required',
      ),
    );
    hallMap.nodes.push(
      new DungeonNode(
        '',
        25,
        9.5,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'tr-chain-chomp',
      ),
    );
    dungeon.dungeonMaps.push(hallMap);
    var compassMap = new DungeonMap('tr-compass', 'Compass Room');
    compassMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-hall',
      ),
    );
    compassMap.nodes.push(
      new DungeonNode(
        'Compass Chest',
        50,
        58,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[187],
      ),
    );
    dungeon.dungeonMaps.push(compassMap);
    var mapMap = new DungeonMap('tr-map', 'Roller Room');
    mapMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-hall',
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Roller Room Left Chest',
        44,
        17.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[188],
      ),
    );
    mapMap.nodes.push(
      new DungeonNode(
        'Roller Room Right Chest',
        56,
        17.5,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[189],
      ),
    );
    dungeon.dungeonMaps.push(mapMap);
    var chainChompMap = new DungeonMap('tr-chain-chomp', 'Chain Chomp Room');
    chainChompMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.somaria;
        },
        'tr-hall',
      ),
    );
    chainChompMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'tr-pipe-room',
      ),
    );
    chainChompMap.nodes.push(
      new DungeonNode(
        'Chain Chomps Chest',
        50,
        35,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[186],
      ),
    );
    dungeon.dungeonMaps.push(chainChompMap);
    var pipeRoomMap = new DungeonMap('tr-pipe-room', 'Pipe Room');
    pipeRoomMap.nodes.push(
      new DungeonNode(
        '',
        93,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-chain-chomp',
      ),
    );
    pipeRoomMap.nodes.push(
      new DungeonNode(
        '',
        7,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-pokey-key',
      ),
    );
    pipeRoomMap.nodes.push(
      new DungeonNode(
        '',
        25,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-double-pokey',
      ),
    );
    dungeon.dungeonMaps.push(pipeRoomMap);
    var pokeyKeyMap = new DungeonMap('tr-pokey-key', 'Pokey Key Room');
    pokeyKeyMap.nodes.push(
      new DungeonNode(
        '',
        68,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-pipe-room',
      ),
    );
    pokeyKeyMap.nodes.push(
      new DungeonNode(
        '',
        68,
        77,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'tr-bk',
      ),
    );
    pokeyKeyMap.nodes.push(
      new DungeonNode(
        'Pokey Key',
        45,
        74,
        NodeStatus.GROUND_KEY,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(pokeyKeyMap);
    var bigKeyMap = new DungeonMap('tr-bk', 'Big Key Room');
    bigKeyMap.nodes.push(
      new DungeonNode(
        '',
        7,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-pokey-key',
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        '',
        93,
        77,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-pipe-room',
      ),
    );
    bigKeyMap.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        42,
        39,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[191],
      ),
    );
    dungeon.dungeonMaps.push(bigKeyMap);
    var doublePokeyMap = new DungeonMap('tr-double-pokey', 'Double Pokey Room');
    doublePokeyMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-pipe-room',
      ),
    );
    doublePokeyMap.nodes.push(
      new DungeonNode(
        '',
        88,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-big-door',
      ),
    );
    doublePokeyMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.mode === 'inverted' ? 'tr-bc' : config.isFullMap ? 'dw-tr-ledge' : 'tr-outside',
      ),
    );
    dungeon.dungeonMaps.push(doublePokeyMap);
    var outsideMap = new DungeonMap('tr-outside', 'Corridor Outside');
    outsideMap.nodes.push(
      new DungeonNode(
        '',
        12,
        52,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-double-pokey',
      ),
    );
    outsideMap.nodes.push(
      new DungeonNode(
        '',
        87,
        52,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-bc',
      ),
    );
    outsideMap.nodes.push(
      new DungeonNode(
        '',
        87,
        70,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.mirror;
        },
        'tr-mimic',
        'Mirror Required',
      ),
    );
    dungeon.dungeonMaps.push(outsideMap);
    var mimicMap = new DungeonMap('tr-mimic', 'Mimic Cave');
    mimicMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.mode === 'inverted' ? 'tr-inverted-ledge' : 'tr-outside',
      ),
    );
    mimicMap.nodes.push(
      new DungeonNode(
        'Mimic Cave Chest',
        50,
        25,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hammer && items.moonPearl;
        },
        items[79],
        'Hammer and Pearl Required',
      ),
    );
    dungeon.dungeonMaps.push(mimicMap);
    var bigChestMap = new DungeonMap('tr-bc', 'Big Chest Room');
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return config.mode !== 'inverted' || items.mirror;
        },
        config.mode === 'inverted' ? 'tr-inverted-ledge' : config.isFullMap ? 'dw-tr-ledge' : 'tr-outside',
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.somaria || items.hookshot;
        },
        'tr-big-door',
        'Somaria or Hookshot Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    bigChestMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        50,
        39.5,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return items.somaria || items.hookshot;
        },
        items[190],
        'Somaria or Hookshot Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    dungeon.dungeonMaps.push(bigChestMap);
    var bigDoorMap = new DungeonMap('tr-big-door', 'Big Door Room');
    bigDoorMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-double-pokey',
      ),
    );
    bigDoorMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return true;
        },
        'tr-roller-switch',
      ),
    );
    dungeon.dungeonMaps.push(bigDoorMap);
    var rollerSwitchMap = new DungeonMap('tr-roller-switch', 'Crystaroller Room');
    rollerSwitchMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-big-door',
      ),
    );
    rollerSwitchMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.lamp;
        },
        'tr-helma-bridge',
        'Lamp Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    rollerSwitchMap.nodes.push(
      new DungeonNode(
        'Crystaroller Chest',
        21.6,
        54,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[192],
      ),
    );
    dungeon.dungeonMaps.push(rollerSwitchMap);
    var helmaBridgeMap = new DungeonMap('tr-helma-bridge', 'Mini Helma Bridge');
    helmaBridgeMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.lamp && items.somaria;
        },
        'tr-roller-switch',
        '',
        [-1],
        0,
        function (items, config) {
          return items.somaria;
        },
      ),
    );
    helmaBridgeMap.nodes.push(
      new DungeonNode(
        '',
        32,
        77,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'tr-before-tri',
      ),
    );
    helmaBridgeMap.nodes.push(
      new DungeonNode(
        '',
        50,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-laser-bridge',
      ),
    );
    dungeon.dungeonMaps.push(helmaBridgeMap);
    var laserBridgeMap = new DungeonMap('tr-laser-bridge', 'Laser Bridge');
    laserBridgeMap.nodes.push(
      new DungeonNode(
        '',
        50,
        9.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-helma-bridge',
      ),
    );
    laserBridgeMap.nodes.push(
      new DungeonNode(
        'Laser Bridge Chest 1',
        64,
        24,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hasBeamReflection(config) || config.advancedItems;
        },
        items[196],
        'Invincibility Item Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    laserBridgeMap.nodes.push(
      new DungeonNode(
        'Laser Bridge Chest 2',
        36,
        36,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hasBeamReflection(config) || config.advancedItems;
        },
        items[195],
        'Invincibility Item Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    laserBridgeMap.nodes.push(
      new DungeonNode(
        'Laser Bridge Chest 3',
        64,
        48,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hasBeamReflection(config) || config.advancedItems;
        },
        items[194],
        'Invincibility Item Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    laserBridgeMap.nodes.push(
      new DungeonNode(
        'Laser Bridge Chest 4',
        36,
        60,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hasBeamReflection(config) || config.advancedItems;
        },
        items[193],
        'Invincibility Item Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    if (config.mode === 'inverted') {
      laserBridgeMap.nodes.push(
        new DungeonNode(
          '',
          50,
          95,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return items.mirror;
          },
          'tr-inverted-ledge',
        ),
      );
    }
    dungeon.dungeonMaps.push(laserBridgeMap);
    var beforeTriMap = new DungeonMap('tr-before-tri', 'Final Somaria Ride');
    beforeTriMap.nodes.push(
      new DungeonNode(
        '',
        65,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-helma-bridge',
      ),
    );
    beforeTriMap.nodes.push(
      new DungeonNode(
        '',
        38.2,
        9.5,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return items.somaria;
        },
        'tr-trinexx',
        'Cane of Somaria Required',
      ),
    );
    dungeon.dungeonMaps.push(beforeTriMap);
    var invertedLedgeMap = new DungeonMap('tr-inverted-ledge', 'Turtle Rock Other Entrances');
    invertedLedgeMap.nodes.push(
      new DungeonNode(
        '',
        75,
        37,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-mimic',
      ),
    );
    invertedLedgeMap.nodes.push(
      new DungeonNode(
        '',
        75,
        44,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.mirror;
        },
        'tr-bc',
        'Mirror Required',
      ),
    );
    invertedLedgeMap.nodes.push(
      new DungeonNode(
        '',
        38,
        44,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.mirror;
        },
        'tr-double-pokey',
        'Mirror Required',
      ),
    );
    invertedLedgeMap.nodes.push(
      new DungeonNode(
        '',
        56,
        56,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.mirror;
        },
        'tr-laser-bridge',
        'Mirror Required',
        [-1],
        0,
        function (items, config) {
          return items.mirror;
        },
      ),
    );
    invertedLedgeMap.nodes.push(new DungeonNode('', 48.5, 94, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'exit'));
    dungeon.dungeonMaps.push(invertedLedgeMap);
    var trinexxMap = new DungeonMap('tr-trinexx', 'Trinexx Room');
    trinexxMap.nodes.push(
      new DungeonNode(
        'Trinexx',
        50,
        50,
        NodeStatus.BOSS,
        DungeonNode.bossReqs[9],
        items[197],
        'Ice Rod and Fire Rod Required',
        [-1],
        0,
        DungeonNode.glitchedBossReqs[9],
      ),
    );
    dungeon.dungeonMaps.push(trinexxMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
