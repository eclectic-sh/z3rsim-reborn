import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class DarkWorldSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Dark World',
      '',
      function (items, config) {
        return true;
      },
      0,
      0,
    );
    var flute4Map = new DungeonMap('dw-flute4', 'Front of Bomb Shop');
    flute4Map.nodes.push(new DungeonNode('', 69, 50, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-bomb-shop'));
    flute4Map.nodes.push(new DungeonNode('', 95, 63, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-octorok-field'));
    flute4Map.nodes.push(new DungeonNode('', 72, 71, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-south-house-portal'));
    flute4Map.nodes.push(new DungeonNode('', 16, 71, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-south-grove'));
    flute4Map.nodes.push(new DungeonNode('', 84, 50, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(flute4Map);
    var octorokFieldMap = new DungeonMap('dw-octorok-field', 'Hammer Pegs Bridge');
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        6,
        89,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 0;
        },
        'dw-flute4',
      ),
    );
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        6,
        15,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 1;
        },
        'dw-hyrule-castle',
      ),
    );
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        19,
        4,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 1;
        },
        'dw-east-sanctuary',
      ),
    );
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        25,
        96,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 0;
        },
        'dw-small-shop',
        '',
        [-1],
        1,
      ),
    );
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        63,
        54,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 1;
        },
        'dw-eastern-palace',
      ),
    );
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        89,
        96,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers && (items.hammer || items.currentRegionInMap === 1);
        },
        'dw-lake-hylea',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return items.canAncillaFF() && (items.hammer || items.currentRegionInMap === 1);
        },
      ),
    );
    octorokFieldMap.nodes.push(
      new DungeonNode(
        'Mirror',
        17,
        90,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 0;
        },
        '',
        'No Hammer',
        [-1],
        0,
      ),
    );
    octorokFieldMap.nodes.push(
      new DungeonNode(
        'Mirror',
        26,
        49,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 1;
        },
        '',
        'No Hammer',
        [-1],
        0,
      ),
    );
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        40,
        72,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers && (items.hammer || items.currentRegionInMap === 1);
        },
        'dw-hobo-entrance',
        'Flippers Required',
        [-1],
        1,
        function (items, config) {
          return items.canAncillaFF() && (items.hammer || items.currentRegionInMap === 1);
        },
      ),
    );
    dungeon.dungeonMaps.push(octorokFieldMap);
    var hoboEntranceMap = new DungeonMap('dw-hobo-entrance', 'Hobo Portal');
    hoboEntranceMap.nodes.push(new DungeonNode('', 43, 55, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    hoboEntranceMap.nodes.push(
      new DungeonNode('', 40, 45, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-octorok-field', '', [-1], 1),
    );
    hoboEntranceMap.nodes.push(new DungeonNode('', 82, 70, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-lake-hylea'));
    dungeon.dungeonMaps.push(hoboEntranceMap);
    var southHousePortalMap = new DungeonMap('dw-south-house-portal', 'South of Bomb Shop');
    southHousePortalMap.nodes.push(
      new DungeonNode(
        '',
        88,
        36,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-hype-cave',
      ),
    );
    southHousePortalMap.nodes.push(
      new DungeonNode(
        '',
        72,
        29,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-flute4',
      ),
    );
    southHousePortalMap.nodes.push(
      new DungeonNode(
        '',
        84,
        70,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-minimoldorm-entrance',
      ),
    );
    southHousePortalMap.nodes.push(
      new DungeonNode(
        '',
        35,
        70,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-flute7',
      ),
    );
    southHousePortalMap.nodes.push(
      new DungeonNode(
        '',
        10,
        50,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove && items.moonPearl;
        },
        'dw-south-grove',
        'Power Glove Required',
      ),
    );
    southHousePortalMap.nodes.push(new DungeonNode('', 43, 38, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(southHousePortalMap);
    var southGroveMap = new DungeonMap('dw-south-grove', 'South of Grove');
    southGroveMap.nodes.push(new DungeonNode('', 87, 21, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-flute4'));
    southGroveMap.nodes.push(
      new DungeonNode(
        '',
        95,
        71,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'dw-south-house-portal',
        'Power Glove Required',
      ),
    );
    southGroveMap.nodes.push(
      new DungeonNode(
        '',
        86,
        78,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'dw-flute7',
        'Power Glove Required',
      ),
    );
    southGroveMap.nodes.push(new DungeonNode('', 31, 21, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-grove'));
    southGroveMap.nodes.push(new DungeonNode('', 10, 21, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-race-game'));
    southGroveMap.nodes.push(new DungeonNode('', 13, 66, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [-1], 1, null, [1]));
    southGroveMap.nodes.push(new DungeonNode('', 23, 42, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(southGroveMap);
    var hyruleCastleMap = new DungeonMap('dw-hyrule-castle', 'Pyramid');
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        94,
        65,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-octorok-field',
        '',
        [-1],
        1,
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        49,
        12,
        NodeStatus.HOLE,
        function (items, config) {
          return items.agahnim2 || config.goal === 'fast_ganon';
        },
        'dw-ganon',
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        "Ganon's Vulnerability",
        36.75,
        21,
        NodeStatus.SIGNPOST,
        function (items, config) {
          return items.moonPearl;
        },
        'ganon-requirement',
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        37,
        44,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hasBigBomb;
        },
        'dw-fat-fairy',
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode('Pyramid Item', 81, 28, NodeStatus.VIEWABLE_CLOSED_CHEST, DungeonNode.noReqs, items[105]),
    );
    hyruleCastleMap.nodes.push(new DungeonNode('', 59, 13, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [-1], 1, null, [1]));
    hyruleCastleMap.nodes.push(new DungeonNode('', 50, 46, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(hyruleCastleMap);
    var eastSanctuaryMap = new DungeonMap('dw-east-sanctuary', 'Broken Bridge');
    eastSanctuaryMap.nodes.push(
      new DungeonNode(
        '',
        51,
        96,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.currentRegionInMap === 0 || items.flippers;
        },
        'dw-octorok-field',
        '',
        [-1],
        1,
        DungeonNode.noReqs,
      ),
    );
    eastSanctuaryMap.nodes.push(
      new DungeonNode(
        '',
        30,
        38,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return (
            items.currentRegionInMap === 1 || (items.hookshot && (items.flippers || items.glove || items.hammer))
          );
        },
        'dw-graveyard',
        '',
        [-1],
        1,
        function (items, config) {
          return items.hookshot && items.canAncillaFF();
        },
      ),
    );
    eastSanctuaryMap.nodes.push(
      new DungeonNode(
        '',
        70,
        38,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return (
            (items.currentRegionInMap === 0 && (items.flippers || items.glove || items.hammer)) || items.flippers
          );
        },
        'dw-flute2',
        '',
        [-1],
        0,
        function (items, config) {
          return (items.currentRegionInMap === 0 && items.canAncillaFF()) || items.currentRegionInMap === 1;
        },
      ),
    );
    eastSanctuaryMap.nodes.push(
      new DungeonNode(
        '',
        52,
        14,
        NodeStatus.WATER_WARP,
        function (items, config) {
          return items.flippers;
        },
        'dw-flute8',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return (
            (items.currentRegionInMap === 0 &&
              (items.flippers || items.glove || items.hammer || items.canAncillaFF())) ||
            items.currentRegionInMap === 1
          );
        },
      ),
    );
    eastSanctuaryMap.nodes.push(
      new DungeonNode(
        'Mirror Right Side',
        65,
        74,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.currentRegionInMap === 0 || items.flippers;
        },
        '',
        '',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    eastSanctuaryMap.nodes.push(
      new DungeonNode(
        'Mirror Left Side',
        39,
        48,
        NodeStatus.MIRROR,
        function (items, config) {
          return (
            items.currentRegionInMap === 1 || (items.hookshot && (items.flippers || items.glove || items.hammer))
          );
        },
        '',
        '',
        [-1],
        1,
        function (items, config) {
          return items.hookshot && items.canAncillaFF();
        },
      ),
    );
    dungeon.dungeonMaps.push(eastSanctuaryMap);
    var smallShopMap = new DungeonMap('dw-small-shop', 'Northwest of Ice Lake');
    smallShopMap.nodes.push(
      new DungeonNode(
        '',
        45,
        4,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.currentRegionInMap === 1;
        },
        'dw-octorok-field',
      ),
    );
    smallShopMap.nodes.push(
      new DungeonNode(
        '',
        91,
        93,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'dw-lake-hylea',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return items.currentRegionInMap === 0 || items.canAncillaFF();
        },
      ),
    );
    smallShopMap.nodes.push(
      new DungeonNode(
        'Mirror Top Side',
        29,
        25,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.currentRegionInMap === 1;
        },
        '',
        '',
        [-1],
        0,
      ),
    );
    smallShopMap.nodes.push(
      new DungeonNode(
        'Island Mirror Portal',
        78,
        73,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.flippers || items.currentRegionInMap === 0;
        },
        '',
        'Flippers Required to Mirror Back',
        [-1],
        3,
        function (items, config) {
          return items.canAncillaFF();
        },
        [3],
        0,
      ),
    );
    dungeon.dungeonMaps.push(smallShopMap);
    var easternPalaceMap = new DungeonMap('dw-eastern-palace', 'Palace of Darkness Courtyard');
    easternPalaceMap.nodes.push(
      new DungeonNode('', 13, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-octorok-field', '', [-1], 1),
    );
    easternPalaceMap.nodes.push(new DungeonNode('', 87, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-flute5'));
    easternPalaceMap.nodes.push(new DungeonNode('', 83.5, 8, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'pod-entry'));
    easternPalaceMap.nodes.push(new DungeonNode('', 59, 25, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(easternPalaceMap);
    var lakeHyleaMap = new DungeonMap('dw-lake-hylea', 'Ice Lake');
    lakeHyleaMap.nodes.push(
      new DungeonNode(
        '',
        87,
        16,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'dw-octorok-field',
        '',
        [0],
        1,
        DungeonNode.noReqs,
      ),
    );
    lakeHyleaMap.nodes.push(
      new DungeonNode(
        '',
        38,
        55,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'dw-small-shop',
        '',
        [0],
        0,
        DungeonNode.noReqs,
      ),
    );
    lakeHyleaMap.nodes.push(
      new DungeonNode(
        '',
        94,
        80,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'dw-flute8',
        '',
        [0],
        0,
        DungeonNode.noReqs,
      ),
    );
    lakeHyleaMap.nodes.push(
      new DungeonNode(
        '',
        68,
        44,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'ip-entry',
        '',
        [1],
        0,
        DungeonNode.noReqs,
      ),
    );
    lakeHyleaMap.nodes.push(
      new DungeonNode('', 61, 50, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [1], 0, null, [-1], 1),
    );
    lakeHyleaMap.nodes.push(
      new DungeonNode(
        '',
        44,
        74,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.flippers;
        },
        '',
        '',
        [0],
        -1,
        function (items, config) {
          return items.canAncillaFF();
        },
      ),
    );
    dungeon.dungeonMaps.push(lakeHyleaMap);
    var minimoldormEntranceMap = new DungeonMap('dw-minimoldorm-entrance', 'Southwest Ice Lake Shore');
    minimoldormEntranceMap.nodes.push(new DungeonNode('', 22, 29, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-south-house-portal'));
    minimoldormEntranceMap.nodes.push(new DungeonNode('', 5, 54, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-flute7'));
    minimoldormEntranceMap.nodes.push(
      new DungeonNode(
        '',
        86,
        56,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'dw-lake-hylea',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return items.canAncillaFF();
        },
      ),
    );
    minimoldormEntranceMap.nodes.push(new DungeonNode('', 32, 62, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(minimoldormEntranceMap);
    var flute7Map = new DungeonMap('dw-flute7', 'Swamp Palace Entrance');
    flute7Map.nodes.push(
      new DungeonNode(
        '',
        90,
        50,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'sp-entry',
      ),
    );
    flute7Map.nodes.push(new DungeonNode('', 81, 34, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-south-house-portal'));
    flute7Map.nodes.push(
      new DungeonNode('', 93, 60, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-minimoldorm-entrance'),
    );
    flute7Map.nodes.push(new DungeonNode('', 65, 52, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    flute7Map.nodes.push(new DungeonNode('', 24, 50, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [-1], 1, null, [1]));
    dungeon.dungeonMaps.push(flute7Map);
    var groveMap = new DungeonMap('dw-grove', 'Haunted Grove');
    groveMap.nodes.push(new DungeonNode('', 46, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-south-grove'));
    groveMap.nodes.push(new DungeonNode("Ol' Stumpy", 47, 44, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[119]));
    groveMap.nodes.push(new DungeonNode('', 28, 52, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(groveMap);
    var raceGameMap = new DungeonMap('dw-race-game', 'Digging Game');
    raceGameMap.nodes.push(new DungeonNode('', 95, 63, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-south-grove'));
    raceGameMap.nodes.push(
      new DungeonNode(
        '',
        86,
        28,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove === 2 || items.currentRegionInMap === 1;
        },
        'dw-kakariko',
      ),
    );
    raceGameMap.nodes.push(
      new DungeonNode(
        '',
        60,
        40,
        NodeStatus.FROG,
        function (items, config) {
          return items.glove === 2;
        },
        '',
      ),
    );
    raceGameMap.nodes.push(
      new DungeonNode('Digging Game Prize', 28, 44, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[121]),
    );
    raceGameMap.nodes.push(new DungeonNode('', 68, 68, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    raceGameMap.nodes.push(
      new DungeonNode(
        '',
        75,
        33,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.glove === 2 || items.currentRegionInMap === 1;
        },
        '',
        'Mitts Required',
      ),
    );
    dungeon.dungeonMaps.push(raceGameMap);
    var sanctuaryEntranceMap = new DungeonMap('dw-sanctuary-entrance', 'Front of Sanctuary');
    sanctuaryEntranceMap.nodes.push(
      new DungeonNode('', 94, 63, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-graveyard', '', [-1], 1),
    );
    sanctuaryEntranceMap.nodes.push(new DungeonNode('', 29, 29, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-lumberjack'));
    sanctuaryEntranceMap.nodes.push(new DungeonNode('', 6, 64, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-fortune-teller'));
    sanctuaryEntranceMap.nodes.push(new DungeonNode('', 50, 62, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(sanctuaryEntranceMap);
    var graveyardMap = new DungeonMap('dw-graveyard', 'Ghostly Garden');
    graveyardMap.nodes.push(new DungeonNode('', 5, 78, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-sanctuary-entrance'));
    graveyardMap.nodes.push(
      new DungeonNode('', 94, 78, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-east-sanctuary', '', [-1], 1),
    );
    graveyardMap.nodes.push(
      new DungeonNode('', 47, 78, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [-1], 0, null, [-1], 1),
    );
    graveyardMap.nodes.push(
      new DungeonNode('', 60, 28, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [-1], 3, null, [3], 1),
    );
    graveyardMap.nodes.push(
      new DungeonNode(
        '',
        85,
        29,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.currentRegionInMap === 1 || items.currentRegionInMap === 2 || items.glove === 2;
        },
        '',
        '',
        [-1],
        2,
        null,
        [2],
        1,
      ),
    );
    dungeon.dungeonMaps.push(graveyardMap);
    var flute2Map = new DungeonMap('dw-flute2', 'Potion Shop');
    flute2Map.nodes.push(
      new DungeonNode('', 6, 75, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-east-sanctuary', '', [-1], 0),
    );
    flute2Map.nodes.push(
      new DungeonNode(
        '',
        94,
        32,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'dw-zora-entrance',
        'Power Glove Required',
      ),
    );
    flute2Map.nodes.push(new DungeonNode('', 41, 81, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(flute2Map);
    var flute5Map = new DungeonMap('dw-flute5', 'Palace of Darkness Portal');
    flute5Map.nodes.push(
      new DungeonNode(
        '',
        75,
        5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-eastern-palace',
      ),
    );
    flute5Map.nodes.push(new DungeonNode('', 50, 63, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(flute5Map);
    var zoraEntranceMap = new DungeonMap('dw-zora-entrance', 'Lake of Ill Omen');
    zoraEntranceMap.nodes.push(
      new DungeonNode(
        '',
        76,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'dw-flute2',
        'Power Glove Required',
      ),
    );
    zoraEntranceMap.nodes.push(new DungeonNode('Catfish', 15, 34, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[104]));
    zoraEntranceMap.nodes.push(new DungeonNode('', 47, 54, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(zoraEntranceMap);
    var flute8Map = new DungeonMap('dw-flute8', 'East of Ice Lake');
    flute8Map.nodes.push(
      new DungeonNode(
        '',
        34,
        74,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'dw-lake-hylea',
        '',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    flute8Map.nodes.push(
      new DungeonNode(
        '',
        57,
        78,
        NodeStatus.WATER_WARP,
        function (items, config) {
          return items.flippers;
        },
        'dw-east-sanctuary',
        '',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    flute8Map.nodes.push(
      new DungeonNode(
        '',
        80,
        55,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.flippers;
        },
        '',
        '',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    flute8Map.nodes.push(
      new DungeonNode(
        '',
        60,
        14,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'dw-hint-cave',
      ),
    );
    dungeon.dungeonMaps.push(flute8Map);
    var desertMap = new DungeonMap('dw-desert', 'Misery Mire Area');
    desertMap.nodes.push(
      new DungeonNode(
        '',
        15.5,
        21,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-mire-shed',
        '',
        [-1],
        0,
        function (items, config) {
          return items.mirror;
        },
      ),
    );
    desertMap.nodes.push(
      new DungeonNode(
        '',
        30,
        21,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return (
            items.moonPearl &&
            items[config.mmMedallion] &&
            (items.sword || config.weapons === 'swordless') &&
            (items.boots || items.hookshot)
          );
        },
        'mm-entry',
      ),
    );
    desertMap.nodes.push(new DungeonNode('', 10, 30, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [-1], 2, null, [2]));
    desertMap.nodes.push(new DungeonNode('', 61, 10, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [-1], 1, null, [1]));
    dungeon.dungeonMaps.push(desertMap);
    var kakarikoMap = new DungeonMap('dw-kakariko', 'Village of Outcasts');
    kakarikoMap.nodes.push(new DungeonNode('', 33, 3, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-kak-portal'));
    kakarikoMap.nodes.push(
      new DungeonNode(
        '',
        78,
        3,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-fortune-teller',
      ),
    );
    kakarikoMap.nodes.push(
      new DungeonNode(
        '',
        94,
        81,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove === 2;
        },
        'dw-blacksmiths-entrance',
        'Titan Mitts Required',
        [-1],
        1,
      ),
    );
    kakarikoMap.nodes.push(
      new DungeonNode('', 87, 96, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-race-game', '', [-1], 1),
    );
    kakarikoMap.nodes.push(new DungeonNode('', 44, 84, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-bombable-hut'));
    kakarikoMap.nodes.push(new DungeonNode('', 83, 43, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-chouse'));
    kakarikoMap.nodes.push(new DungeonNode('', 20.5, 37, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-chest-game'));
    kakarikoMap.nodes.push(new DungeonNode('', 50, 44.5, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'tt-entry'));
    kakarikoMap.nodes.push(new DungeonNode('', 33, 47, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(kakarikoMap);
    var lumberjackMap = new DungeonMap('dw-lumberjack', 'Bumper Cave Entrance');
    lumberjackMap.nodes.push(
      new DungeonNode(
        'Bumper Cave Item',
        63,
        62,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.cape && items.glove;
        },
        items[112],
      ),
    );
    lumberjackMap.nodes.push(new DungeonNode('', 52, 96, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-sanctuary-entrance'));
    lumberjackMap.nodes.push(new DungeonNode('', 39, 57, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(lumberjackMap);
    var fortuneTellerMap = new DungeonMap('dw-fortune-teller', 'Fortune Teller');
    fortuneTellerMap.nodes.push(new DungeonNode('', 56, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-kakariko'));
    fortuneTellerMap.nodes.push(new DungeonNode('', 93, 78, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-sanctuary-entrance'));
    fortuneTellerMap.nodes.push(new DungeonNode('', 78, 7, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-lostwoods'));
    fortuneTellerMap.nodes.push(new DungeonNode('', 74, 61, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(fortuneTellerMap);
    var blacksmithsEntranceMap = new DungeonMap('dw-blacksmiths-entrance', 'Hammer Pegs');
    blacksmithsEntranceMap.nodes.push(new DungeonNode('', 5, 62, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-kakariko'));
    blacksmithsEntranceMap.nodes.push(
      new DungeonNode(
        '',
        53,
        84,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer;
        },
        'dw-hammer-pegs',
      ),
    );
    blacksmithsEntranceMap.nodes.push(
      new DungeonNode(
        '',
        41,
        17,
        NodeStatus.PURPLE_CHEST,
        function (items, config) {
          return items.blacksmithsRescued;
        },
        '',
      ),
    );
    blacksmithsEntranceMap.nodes.push(
      new DungeonNode('', 43, 54, NodeStatus.MIRROR, DungeonNode.noReqs, 'Mirror', '', [-1], 0, null, [-1], 1),
    );
    blacksmithsEntranceMap.nodes.push(
      new DungeonNode(
        '',
        63,
        34,
        NodeStatus.MIRROR,
        function (items, config) {
          return items.currentRegionInMap === 1 || items.hammer;
        },
        'Magic Bat Mirror',
        'Hammer Required',
        [-1],
        1,
        null,
        [-1],
        1,
      ),
    );
    dungeon.dungeonMaps.push(blacksmithsEntranceMap);
    var kakPortalMap = new DungeonMap('dw-kak-portal', 'Kakariko Dark World Portal');
    kakPortalMap.nodes.push(
      new DungeonNode(
        '',
        65,
        96,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl && items.glove === 2;
        },
        'dw-kakariko',
      ),
    );
    kakPortalMap.nodes.push(
      new DungeonNode(
        '',
        28,
        96,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-kakariko',
      ),
    );
    kakPortalMap.nodes.push(
      new DungeonNode(
        '',
        75,
        7,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-lostwoods',
      ),
    );
    kakPortalMap.nodes.push(new DungeonNode('', 63, 72, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [-1], 2, null, [2]));
    dungeon.dungeonMaps.push(kakPortalMap);
    var lostwoodsMap = new DungeonMap('dw-lostwoods', 'Skeleton Forest');
    lostwoodsMap.nodes.push(new DungeonNode('', 63, 70, NodeStatus.HOLE, DungeonNode.noReqs, 'sw-left-drop', '', [0]));
    lostwoodsMap.nodes.push(new DungeonNode('', 78, 67, NodeStatus.HOLE, DungeonNode.noReqs, 'sw-right-drop', '', [0]));
    lostwoodsMap.nodes.push(new DungeonNode('', 76, 52, NodeStatus.HOLE, DungeonNode.noReqs, 'sw-northeast-bc', '', [0]));
    lostwoodsMap.nodes.push(new DungeonNode('', 73.5, 60, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'sw-bc', '', [0]));
    lostwoodsMap.nodes.push(new DungeonNode('', 58, 58, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'sw-part21', '', [0]));
    lostwoodsMap.nodes.push(
      new DungeonNode(
        '',
        38,
        94,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-kak-portal',
        '',
        [0],
      ),
    );
    lostwoodsMap.nodes.push(
      new DungeonNode(
        '',
        88,
        94,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-fortune-teller',
        '',
        [0],
      ),
    );
    lostwoodsMap.nodes.push(new DungeonNode('', 23, 52, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'sw-part22', '', [1]));
    lostwoodsMap.nodes.push(
      new DungeonNode(
        '',
        16,
        20,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.fireRod;
        },
        'sw-final',
        '',
        [1],
      ),
    );
    lostwoodsMap.nodes.push(new DungeonNode('', 62, 81, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [0]));
    lostwoodsMap.nodes.push(
      new DungeonNode('', 13, 36, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [1], 0, null, [-1], 1),
    );
    dungeon.dungeonMaps.push(lostwoodsMap);
    var bombableHutMap = new DungeonMap('dw-bombable-hut', 'Bombable Hut', true);
    bombableHutMap.nodes.push(
      new DungeonNode(
        '',
        50,
        87,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-kakariko',
      ),
    );
    bombableHutMap.nodes.push(
      new DungeonNode('Bombable Hut Chest', 46, 34, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[108]),
    );
    dungeon.dungeonMaps.push(bombableHutMap);
    var chouseMap = new DungeonMap('dw-chouse', 'C-Shaped House', true);
    chouseMap.nodes.push(
      new DungeonNode(
        '',
        50,
        87,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-kakariko',
      ),
    );
    chouseMap.nodes.push(new DungeonNode('C-House Chest', 59.5, 25, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[109]));
    dungeon.dungeonMaps.push(chouseMap);
    var chestGameMap = new DungeonMap('dw-chest-game', 'Chest Game', true);
    chestGameMap.nodes.push(
      new DungeonNode(
        '',
        50,
        87,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-kakariko',
      ),
    );
    chestGameMap.nodes.push(
      new DungeonNode('Chest Game Prize', 37, 56, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[110]),
    );
    dungeon.dungeonMaps.push(chestGameMap);
    var hammerPegsMap = new DungeonMap('dw-hammer-pegs', 'Hammer Pegs Cave', true);
    hammerPegsMap.nodes.push(
      new DungeonNode(
        '',
        50,
        87,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-blacksmiths-entrance',
        '',
        [-1],
        1,
      ),
    );
    hammerPegsMap.nodes.push(
      new DungeonNode('Hammer Pegs Item', 50, 45, NodeStatus.VIEWABLE_CLOSED_CHEST, DungeonNode.noReqs, items[111]),
    );
    dungeon.dungeonMaps.push(hammerPegsMap);
    var fatFairyMap = new DungeonMap('dw-fat-fairy', 'Pyramid Fairy', true);
    fatFairyMap.nodes.push(
      new DungeonNode(
        '',
        50,
        88,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-hyrule-castle',
      ),
    );
    fatFairyMap.nodes.push(
      new DungeonNode('Pyramid Fairy Chest 1', 44, 57, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[106]),
    );
    fatFairyMap.nodes.push(
      new DungeonNode('Pyramid Fairy Chest 2', 56, 57, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[107]),
    );
    dungeon.dungeonMaps.push(fatFairyMap);
    var hypeCaveMap = new DungeonMap('dw-hype-cave', 'Hype Cave', true);
    hypeCaveMap.nodes.push(
      new DungeonNode(
        '',
        50,
        93,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-south-house-portal',
      ),
    );
    hypeCaveMap.nodes.push(
      new DungeonNode('Hype Cave Chest 1', 52, 70, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[115]),
    );
    hypeCaveMap.nodes.push(
      new DungeonNode('Hype Cave Chest 2', 51, 32, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[116]),
    );
    hypeCaveMap.nodes.push(
      new DungeonNode('Hype Cave Chest 3', 48, 26, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[117]),
    );
    hypeCaveMap.nodes.push(
      new DungeonNode('Hype Cave Chest 4', 51, 20, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[118]),
    );
    hypeCaveMap.nodes.push(
      new DungeonNode('Hype Cave Chest 5', 48, 14, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[120]),
    );
    dungeon.dungeonMaps.push(hypeCaveMap);
    var mireShedMap = new DungeonMap('dw-mire-shed', 'Mire Shed', true);
    mireShedMap.nodes.push(
      new DungeonNode(
        '',
        50,
        93,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-desert',
      ),
    );
    mireShedMap.nodes.push(
      new DungeonNode('Mire Shed Chest 1', 46, 26, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[122]),
    );
    mireShedMap.nodes.push(
      new DungeonNode('Mire Shed Chest 2', 53, 26, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[123]),
    );
    dungeon.dungeonMaps.push(mireShedMap);
    var ganonMap = new DungeonMap('dw-ganon', 'Ganon', true);
    ganonMap.nodes.push(
      new DungeonNode(
        'Triforce Room',
        50,
        12,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return (
            items.canDamageGanon(config) &&
            (items.sword >= 2 ||
              (config.weapons === 'swordless' && items.hammer && items.hasSilvers() && items.hasBow())) &&
            items.hasFiresource()
          );
        },
        'Ganon',
        config.goal === 'pedestal' || config.goal === 'triforce'
          ? 'Ganon is unbeatable in this goal'
          : config.goal === 'dungeons'
            ? 'Fire, MS and All Dungeons Required'
            : config.weapons !== 'swordless'
              ? 'Fire and Master Sword Required'
              : 'Hammer and Silvers Required',
      ),
    );
    ganonMap.nodes.push(
      new DungeonNode(
        '',
        49,
        87,
        NodeStatus.HOLE,
        function (items, config) {
          return true;
        },
        'dw-hyrule-castle',
      ),
    );
    dungeon.dungeonMaps.push(ganonMap);
    var bombShopMap = new DungeonMap('dw-bomb-shop', 'Bomb Shop', true);
    bombShopMap.nodes.push(new DungeonNode('', 50, 87, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-flute4'));
    bombShopMap.nodes.push(
      new DungeonNode(
        '',
        37,
        50,
        NodeStatus.BIG_BOMB,
        function (items, config) {
          return items.crystal5 && items.crystal6;
        },
        '',
        'Crystals 5 and 6 required',
      ),
    );
    dungeon.dungeonMaps.push(bombShopMap);
    var flute1Map = new DungeonMap('dw-flute1', 'Death Mountain Entrance');
    flute1Map.nodes.push(new DungeonNode('', 10, 29, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-spectacle-rock'));
    flute1Map.nodes.push(new DungeonNode('', 33, 46, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(flute1Map);
    var spectacleRockMap = new DungeonMap('dw-spectacle-rock', 'Spectacle Rock');
    spectacleRockMap.nodes.push(new DungeonNode('', 11, 50, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-flute1'));
    spectacleRockMap.nodes.push(new DungeonNode('', 79, 58, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-spikecave'));
    spectacleRockMap.nodes.push(new DungeonNode('', 67, 42, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    spectacleRockMap.nodes.push(new DungeonNode('', 37, 34, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [-1], 1, null, [1]));
    dungeon.dungeonMaps.push(spectacleRockMap);
    var heraMap = new DungeonMap('dw-hera', 'Ganons Tower Entrance');
    heraMap.nodes.push(
      new DungeonNode(
        '',
        75,
        38,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.canEnterGT(config);
        },
        'gt-entry',
      ),
    );
    heraMap.nodes.push(
      new DungeonNode(
        "Ganon's Tower Accessibility",
        67.5,
        44.5,
        NodeStatus.SIGNPOST,
        function (items, config) {
          return items.moonPearl;
        },
        'gt-requirement',
      ),
    );
    heraMap.nodes.push(
      new DungeonNode('', 94, 37, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-trportal', '', [-1], 1),
    );
    heraMap.nodes.push(new DungeonNode('', 75, 53, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-spectacle-rock'));
    heraMap.nodes.push(new DungeonNode('', 60, 44, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(heraMap);
    var trportalMap = new DungeonMap('dw-trportal', 'Turtle Rock Entrance');
    trportalMap.nodes.push(new DungeonNode('', 6, 47, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-hera'));
    trportalMap.nodes.push(new DungeonNode('', 43, 70, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-east'));
    trportalMap.nodes.push(new DungeonNode('', 43, 50, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-superbunny'));
    trportalMap.nodes.push(
      new DungeonNode(
        '',
        32,
        51,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl && items.glove;
        },
        'dw-hookshotcave',
      ),
    );
    trportalMap.nodes.push(
      new DungeonNode(
        '',
        76.5,
        57,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl && items.isTROpened;
        },
        'tr-entry',
      ),
    );
    trportalMap.nodes.push(new DungeonNode('', 46, 37, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    trportalMap.nodes.push(
      new DungeonNode('', 25, 38, NodeStatus.MIRROR, DungeonNode.noReqs, '', '', [2], 1, null, [1], 2),
    );
    trportalMap.nodes.push(
      new DungeonNode('', 19, 31, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-hookshotcave', '', [2]),
    );
    dungeon.dungeonMaps.push(trportalMap);
    var eastMap = new DungeonMap('dw-east', 'Dark World East Death Mountain');
    eastMap.nodes.push(
      new DungeonNode(
        '',
        83,
        27,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.moonPearl;
        },
        'dw-superbunny',
        '',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    eastMap.nodes.push(new DungeonNode('', 75, 40, NodeStatus.MIRROR, DungeonNode.noReqs, ''));
    dungeon.dungeonMaps.push(eastMap);
    var spikecaveMap = new DungeonMap('dw-spikecave', 'Spike Cave', true);
    spikecaveMap.nodes.push(new DungeonNode('', 75, 92, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-spectacle-rock'));
    spikecaveMap.nodes.push(
      new DungeonNode(
        'Spike Cave Chest',
        21,
        14,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return (
            items.moonPearl &&
            items.glove &&
            items.hammer &&
            (items.byrna || (items.cape && items.hasMagicExtension(config)))
          );
        },
        items[103],
        '',
        [-1],
        0,
        function (items, config) {
          return items.moonPearl && items.glove && items.hammer;
        },
      ),
    );
    dungeon.dungeonMaps.push(spikecaveMap);
    var superbunnyMap = new DungeonMap('dw-superbunny', 'Superbunny Cave', true);
    superbunnyMap.nodes.push(new DungeonNode('', 50, 32, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-trportal'));
    superbunnyMap.nodes.push(
      new DungeonNode('Superbunny Chest 1', 91, 32, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[97]),
    );
    superbunnyMap.nodes.push(
      new DungeonNode('Superbunny Chest 2', 91, 39, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[98]),
    );
    dungeon.dungeonMaps.push(superbunnyMap);
    var hookshotcaveMap = new DungeonMap('dw-hookshotcave', 'Hookshot Cave', true);
    hookshotcaveMap.nodes.push(new DungeonNode('', 74, 94, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-trportal'));
    hookshotcaveMap.nodes.push(
      new DungeonNode('', 75, 10, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dw-trportal', '', [-1], 2),
    );
    hookshotcaveMap.nodes.push(
      new DungeonNode(
        'Hookshot Cave Bottom Chest',
        42,
        80,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return (items.boots && config.advancedItems) || items.hookshot;
        },
        items[102],
        '',
        [-1],
        0,
        function (items, config) {
          return items.boots || items.hookshot;
        },
      ),
    );
    hookshotcaveMap.nodes.push(
      new DungeonNode(
        'Hookshot Cave Top Chest 1',
        54,
        26,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hookshot;
        },
        items[100],
        '',
        [-1],
        0,
        function (items, config) {
          return items.boots;
        },
      ),
    );
    hookshotcaveMap.nodes.push(
      new DungeonNode(
        'Hookshot Cave Top Chest 2',
        32,
        42,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hookshot;
        },
        items[101],
        '',
        [-1],
        0,
        function (items, config) {
          return items.boots;
        },
      ),
    );
    hookshotcaveMap.nodes.push(
      new DungeonNode(
        'Hookshot Cave Top Chest 3',
        35,
        58,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hookshot;
        },
        items[99],
        '',
        [-1],
        0,
        function (items, config) {
          return items.boots;
        },
      ),
    );
    dungeon.dungeonMaps.push(hookshotcaveMap);
    var trLedgeMap = new DungeonMap('dw-tr-ledge', 'Turtle Rock Outside Corridor');
    trLedgeMap.nodes.push(
      new DungeonNode(
        '',
        37,
        48,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-double-pokey',
      ),
    );
    trLedgeMap.nodes.push(
      new DungeonNode(
        '',
        75,
        48,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'tr-bc',
      ),
    );
    trLedgeMap.nodes.push(
      new DungeonNode(
        '',
        74,
        58,
        NodeStatus.MIRROR,
        function (items, config) {
          return true;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(trLedgeMap);
    var hintCaveMap = new DungeonMap('dw-hint-cave', 'South East Dark World');
    hintCaveMap.nodes.push(
      new DungeonNode(
        '',
        50,
        87,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'dw-flute8',
      ),
    );
    if (config.hintsEnabled) {
      hintCaveMap.nodes.push(
        new DungeonNode(
          '',
          50,
          19,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '14',
        ),
      );
    }
    dungeon.dungeonMaps.push(hintCaveMap);
    dungeon.startingMap = hintCaveMap;
    return dungeon;

  }
}
