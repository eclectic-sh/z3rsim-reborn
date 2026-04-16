import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class LightWorldSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Light World',
      '',
      function (items, config) {
        return true;
      },
      0,
      0,
    );
    var startQuestMap = new DungeonMap('lw-sq', 'Select where to start from', true);
    startQuestMap.nodes.push(
      new DungeonNode("Link's House", 50, 35, NodeStatus.SQ_OPTION, DungeonNode.noReqs, 'lw-linkshouse'),
    );
    startQuestMap.nodes.push(new DungeonNode('Sanctuary', 50, 51, NodeStatus.SQ_OPTION, DungeonNode.noReqs, 'hc-sanctuary'));
    startQuestMap.nodes.push(
      new DungeonNode(
        'Mountain Cave',
        50,
        66,
        NodeStatus.SQ_OPTION,
        function (items, config) {
          return items.oldManRescued;
        },
        'lw-flute1',
      ),
    );
    dungeon.dungeonMaps.push(startQuestMap);
    var linkHouseMap = new DungeonMap('lw-linkshouse', "Link's House", true);
    linkHouseMap.nodes.push(new DungeonNode('', 50, 86, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute4'));
    linkHouseMap.nodes.push(
      new DungeonNode("Link's House Chest", 78, 72, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[5]),
    );
    dungeon.dungeonMaps.push(linkHouseMap);
    var fluteMapMap = new DungeonMap('lw-flute-map', 'Select your Destination', true);
    fluteMapMap.nodes.push(new DungeonNode('', 43, 25, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute1'));
    fluteMapMap.nodes.push(new DungeonNode('', 72, 34, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute2'));
    fluteMapMap.nodes.push(new DungeonNode('', 20, 43, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-kakariko'));
    fluteMapMap.nodes.push(new DungeonNode('', 53, 58, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute4'));
    fluteMapMap.nodes.push(new DungeonNode('', 87, 59, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute5'));
    fluteMapMap.nodes.push(new DungeonNode('', 6, 81, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-desert', '', [-1], 3));
    fluteMapMap.nodes.push(new DungeonNode('', 47, 78, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute7'));
    fluteMapMap.nodes.push(new DungeonNode('', 89, 80, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute8'));
    dungeon.dungeonMaps.push(fluteMapMap);
    var fluteMapMap = new DungeonMap('lw-flute4', "Front of Link's House");
    fluteMapMap.nodes.push(new DungeonNode('', 69, 50, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-linkshouse'));
    fluteMapMap.nodes.push(
      new DungeonNode(
        '',
        95,
        63,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.gameState === 4;
        },
        'lw-octorok-field',
        'Zelda must be rescued first',
      ),
    );
    fluteMapMap.nodes.push(
      new DungeonNode(
        '',
        72,
        71,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.gameState === 4;
        },
        'lw-south-house-portal',
        'Zelda must be rescued first',
      ),
    );
    fluteMapMap.nodes.push(
      new DungeonNode(
        '',
        16,
        71,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.gameState === 4;
        },
        'lw-south-grove',
        'Zelda must be rescued first',
      ),
    );
    fluteMapMap.nodes.push(new DungeonNode('', 76, 27, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-hyrule-castle'));
    dungeon.dungeonMaps.push(fluteMapMap);
    var octorokFieldMap = new DungeonMap('lw-octorok-field', 'Octorok Field');
    octorokFieldMap.nodes.push(new DungeonNode('', 6, 89, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute4'));
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        6,
        15,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'lw-hyrule-castle',
        'Power Glove Required',
      ),
    );
    octorokFieldMap.nodes.push(new DungeonNode('', 19, 4, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-east-sanctuary'));
    octorokFieldMap.nodes.push(new DungeonNode('', 25, 96, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-small-shop'));
    octorokFieldMap.nodes.push(new DungeonNode('', 63, 54, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-eastern-palace'));
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        89,
        96,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'lw-lake-hylea',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return items.canAncillaFF();
        },
      ),
    );
    dungeon.dungeonMaps.push(octorokFieldMap);
    var octorokFieldMap = new DungeonMap('lw-south-house-portal', "South of Link's House");
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        32,
        33,
        NodeStatus.PORTAL,
        function (items, config) {
          return items.hammer && items.glove;
        },
        'dw-south-house-portal',
        '',
        [0],
        1,
      ),
    );
    octorokFieldMap.nodes.push(new DungeonNode('', 72, 29, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute4'));
    octorokFieldMap.nodes.push(
      new DungeonNode('', 84, 70, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-minimoldorm-entrance', ''),
    );
    octorokFieldMap.nodes.push(new DungeonNode('', 35, 70, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute7'));
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        10,
        50,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'lw-south-grove',
        'Power Glove Required',
      ),
    );
    octorokFieldMap.nodes.push(
      new DungeonNode(
        '',
        36,
        54,
        NodeStatus.WATER_WARP,
        function (items, config) {
          return items.flippers;
        },
        'lw-east-sanctuary',
        'Flippers Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    dungeon.dungeonMaps.push(octorokFieldMap);
    var southGroveMap = new DungeonMap('lw-south-grove', 'South of Grove');
    southGroveMap.nodes.push(new DungeonNode('', 87, 21, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute4'));
    southGroveMap.nodes.push(
      new DungeonNode(
        '',
        95,
        71,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'lw-south-house-portal',
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
        'lw-flute7',
        'Power Glove Required',
      ),
    );
    southGroveMap.nodes.push(new DungeonNode('', 31, 21, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-grove'));
    southGroveMap.nodes.push(new DungeonNode('', 10, 21, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-race-game'));
    southGroveMap.nodes.push(
      new DungeonNode('', 8, 56, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-south-grove-cave', '', [1]),
    );
    dungeon.dungeonMaps.push(southGroveMap);
    var hyruleCastleMap = new DungeonMap('lw-hyrule-castle', 'Hyrule Castle');
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        82,
        94,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.gameState === 4 || items.currentRegionInMap !== 2;
        },
        'lw-flute4',
        'Zelda must be rescued first',
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        94,
        65,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove && items.gameState === 4;
        },
        'lw-octorok-field',
        'Power Glove Required',
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        6,
        30,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.gameState === 4;
        },
        'lw-sanctuary-entrance',
        'Zelda must be rescued first',
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        50,
        25,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.gameState === 4 || items.currentRegionInMap === 2;
        },
        'hc-entry',
        'Zelda must be rescued first',
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        88,
        16,
        NodeStatus.HOLE,
        function (items, config) {
          return items.gameState === 4 || items.currentRegionInMap !== 2;
        },
        'lw-uncle',
        'Zelda must be rescued first',
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        70,
        21,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.gameState === 4 || items.currentRegionInMap === 2;
        },
        'lw-uncle',
        'Zelda must be rescued first',
      ),
    );
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        50,
        10,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.sword >= 2 || items.cape || (items.hammer && config.weapons === 'swordless');
        },
        'ct-entry',
        config.weapons !== 'swordless' ? 'Master Sword or Cape Required' : 'Hammer or Cape Required',
        [1],
      ),
    );
    hyruleCastleMap.nodes.push(new DungeonNode('', 29, 5, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'hc-left', '', [1]));
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        50,
        61,
        NodeStatus.PORTAL,
        function (items, config) {
          return items.agahnim;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(hyruleCastleMap);
    var hyruleCastleMap = new DungeonMap('lw-east-sanctuary', "Zora's River Bridge");
    hyruleCastleMap.nodes.push(new DungeonNode('', 51, 96, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-octorok-field'));
    hyruleCastleMap.nodes.push(new DungeonNode('', 30, 38, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-graveyard'));
    hyruleCastleMap.nodes.push(new DungeonNode('', 70, 38, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute2'));
    hyruleCastleMap.nodes.push(
      new DungeonNode(
        '',
        52,
        14,
        NodeStatus.WATER_WARP,
        function (items, config) {
          return items.flippers;
        },
        'lw-south-house-portal',
        'Flippers Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    dungeon.dungeonMaps.push(hyruleCastleMap);
    var smallShopMap = new DungeonMap('lw-small-shop', 'Northwest of Lake Hylea');
    smallShopMap.nodes.push(
      new DungeonNode(
        '',
        45,
        4,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers || items.currentRegionInMap !== 3;
        },
        'lw-octorok-field',
        '',
        [-1],
        0,
        function (items, config) {
          return items.canAncillaFF();
        },
      ),
    );
    smallShopMap.nodes.push(
      new DungeonNode(
        '',
        91,
        93,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers || (items.currentRegionInMap !== 3 && items.currentRegionInMap !== 0);
        },
        'lw-lake-hylea',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return items.canAncillaFF();
        },
      ),
    );
    smallShopMap.nodes.push(
      new DungeonNode(
        'Lake Hylea Island',
        79,
        60,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.currentRegionInMap === 3;
        },
        items[46],
      ),
    );
    dungeon.dungeonMaps.push(smallShopMap);
    var easternPalaceMap = new DungeonMap('lw-eastern-palace', 'Eastern Palace Courtyard');
    easternPalaceMap.nodes.push(new DungeonNode('', 13, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-octorok-field'));
    easternPalaceMap.nodes.push(new DungeonNode('', 87, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute5'));
    easternPalaceMap.nodes.push(new DungeonNode('', 83.5, 8, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'ep-entry'));
    easternPalaceMap.nodes.push(new DungeonNode('', 24, 31, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-saha'));
    dungeon.dungeonMaps.push(easternPalaceMap);
    var lakeHyleaMap = new DungeonMap('lw-lake-hylea', 'Lake Hylea');
    lakeHyleaMap.nodes.push(new DungeonNode('', 87, 16, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-octorok-field'));
    lakeHyleaMap.nodes.push(
      new DungeonNode('', 38, 55, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-small-shop', '', [-1], 2),
    );
    lakeHyleaMap.nodes.push(
      new DungeonNode(
        '',
        68,
        48,
        NodeStatus.PORTAL,
        function (items, config) {
          return items.glove === 2;
        },
        '',
        '',
        [-1],
        1,
      ),
    );
    lakeHyleaMap.nodes.push(new DungeonNode('', 64, 67, NodeStatus.WATER_WARP, DungeonNode.noReqs, 'lw-zora-entrance'));
    lakeHyleaMap.nodes.push(new DungeonNode('', 94, 80, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute8'));
    lakeHyleaMap.nodes.push(new DungeonNode('', 82, 4, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-hobo-entrance'));
    dungeon.dungeonMaps.push(lakeHyleaMap);
    var minimoldormEntranceMap = new DungeonMap('lw-minimoldorm-entrance', 'Minimoldorm Cave Entrance');
    minimoldormEntranceMap.nodes.push(new DungeonNode('', 22, 29, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-south-house-portal'));
    minimoldormEntranceMap.nodes.push(new DungeonNode('', 5, 54, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute7'));
    minimoldormEntranceMap.nodes.push(new DungeonNode('', 94, 68, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute8'));
    minimoldormEntranceMap.nodes.push(new DungeonNode('', 61, 51, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-minimoldorm'));
    minimoldormEntranceMap.nodes.push(
      new DungeonNode(
        '',
        86,
        56,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'lw-lake-hylea',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return items.canAncillaFF();
        },
      ),
    );
    dungeon.dungeonMaps.push(minimoldormEntranceMap);
    var flute7Map = new DungeonMap('lw-flute7', 'Dam Entrance');
    flute7Map.nodes.push(new DungeonNode('', 6, 60, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-desert'));
    flute7Map.nodes.push(new DungeonNode('', 90, 50, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-dam'));
    flute7Map.nodes.push(new DungeonNode('', 81, 34, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-south-house-portal'));
    flute7Map.nodes.push(
      new DungeonNode('', 93, 60, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-minimoldorm-entrance'),
    );
    flute7Map.nodes.push(
      new DungeonNode(
        'Deliver Purple Chest',
        48,
        36,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hasPurpleChest;
        },
        items[114],
        'Requires Purple Chest with you',
      ),
    );
    flute7Map.nodes.push(new DungeonNode('Sunken Chest', 81, 53, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[47], ''));
    flute7Map.nodes.push(
      new DungeonNode(
        'Bombos Tablet',
        11,
        45,
        NodeStatus.BOOK_CHECKABLE_ITEM,
        function (items, config) {
          return items.sword >= 2 || (items.hammer && config.weapons === 'swordless');
        },
        items[33],
        '',
        [1],
      ),
    );
    dungeon.dungeonMaps.push(flute7Map);
    var groveMap = new DungeonMap('lw-grove', 'Haunted Grove');
    groveMap.nodes.push(new DungeonNode('', 46, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-south-grove'));
    groveMap.nodes.push(
      new DungeonNode(
        'Shovel Item',
        29,
        29,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.shovel;
        },
        items[49],
        'Shovel Required',
      ),
    );
    dungeon.dungeonMaps.push(groveMap);
    var raceGameMap = new DungeonMap('lw-race-game', 'Race Game');
    raceGameMap.nodes.push(new DungeonNode('', 95, 63, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-south-grove'));
    raceGameMap.nodes.push(new DungeonNode('', 62, 38, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-library'));
    raceGameMap.nodes.push(new DungeonNode('', 86, 28, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-kakariko'));
    raceGameMap.nodes.push(
      new DungeonNode('Race Game Prize', 11, 55, NodeStatus.VIEWABLE_CLOSED_CHEST, DungeonNode.noReqs, items[44]),
    );
    dungeon.dungeonMaps.push(raceGameMap);
    var sanctuaryEntranceMap = new DungeonMap('lw-sanctuary-entrance', 'Front of Sanctuary');
    sanctuaryEntranceMap.nodes.push(new DungeonNode('', 94, 63, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-graveyard'));
    sanctuaryEntranceMap.nodes.push(new DungeonNode('', 84.5, 32, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'hc-sanctuary'));
    sanctuaryEntranceMap.nodes.push(new DungeonNode('', 29, 29, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lumberjack'));
    sanctuaryEntranceMap.nodes.push(new DungeonNode('', 29, 72, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-hyrule-castle'));
    sanctuaryEntranceMap.nodes.push(new DungeonNode('', 6, 64, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-fortune-teller'));
    sanctuaryEntranceMap.nodes.push(
      new DungeonNode(
        '',
        23,
        50,
        NodeStatus.WATER_WARP,
        function (items, config) {
          return items.flippers;
        },
        'lw-flute8',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return items.canAncillaFF();
        },
      ),
    );
    sanctuaryEntranceMap.nodes.push(
      new DungeonNode(
        '',
        56,
        42,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.boots;
        },
        'lw-bonkrocks',
        'Boots Required',
      ),
    );
    dungeon.dungeonMaps.push(sanctuaryEntranceMap);
    var uncleMap = new DungeonMap('lw-uncle', 'Hyrule Castle Secret Passage', true);
    uncleMap.nodes.push(
      new DungeonNode(
        '',
        25,
        94,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.gameState >= 1;
        },
        'lw-hyrule-castle',
        'Talk to Uncle First',
        [-1],
        2,
      ),
    );
    uncleMap.nodes.push(new DungeonNode("Link's Uncle", 50, 22, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[1]));
    uncleMap.nodes.push(
      new DungeonNode(
        'Secret Passage Chest',
        76.5,
        70,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.gameState >= 1;
        },
        items[2],
        'Talk to Uncle First',
      ),
    );
    dungeon.dungeonMaps.push(uncleMap);
    var graveyardMap = new DungeonMap('lw-graveyard', 'Graveyard');
    graveyardMap.nodes.push(
      new DungeonNode(
        '',
        5,
        78,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.currentRegionInMap !== 2 || items.glove === 2;
        },
        'lw-sanctuary-entrance',
      ),
    );
    graveyardMap.nodes.push(
      new DungeonNode(
        '',
        94,
        78,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.currentRegionInMap !== 2 || items.glove === 2;
        },
        'lw-east-sanctuary',
      ),
    );
    graveyardMap.nodes.push(
      new DungeonNode(
        '',
        15.5,
        34.5,
        NodeStatus.HOLE,
        function (items, config) {
          return (items.currentRegionInMap !== 2 && items.glove) || items.glove === 2;
        },
        'hc-bombablewall',
      ),
    );
    graveyardMap.nodes.push(new DungeonNode('', 56, 20, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-gy-ledge', '', [3]));
    graveyardMap.nodes.push(
      new DungeonNode(
        '',
        81,
        37.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.boots && (items.glove === 2 || items.currentRegionInMap === 2);
        },
        'lw-kingstomb',
        'Boots and Titan Mitts Required',
      ),
    );
    dungeon.dungeonMaps.push(graveyardMap);
    var flute2Map = new DungeonMap('lw-flute2', 'Potion Witch');
    flute2Map.nodes.push(new DungeonNode('', 6, 75, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-east-sanctuary'));
    flute2Map.nodes.push(
      new DungeonNode(
        '',
        94,
        32,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'lw-zora-entrance',
        'Power Glove Required',
      ),
    );
    flute2Map.nodes.push(new DungeonNode('', 40, 67, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-potion-shop'));
    dungeon.dungeonMaps.push(flute2Map);
    var flute5Map = new DungeonMap('lw-flute5', 'Eastern Portal');
    flute5Map.nodes.push(new DungeonNode('', 75, 5, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-eastern-palace'));
    flute5Map.nodes.push(
      new DungeonNode(
        '',
        80,
        73,
        NodeStatus.PORTAL,
        function (items, config) {
          return items.hammer && items.glove;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(flute5Map);
    var flute5Map = new DungeonMap('lw-saha', "Sahasrahla's Hut", true);
    flute5Map.nodes.push(new DungeonNode('', 50, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-eastern-palace'));
    flute5Map.nodes.push(
      new DungeonNode("Sahasrahala's Hut Left Chest", 43, 34, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[9]),
    );
    flute5Map.nodes.push(
      new DungeonNode(
        "Sahasrahala's Hut Middle Chest",
        49.5,
        34,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[10],
      ),
    );
    flute5Map.nodes.push(
      new DungeonNode(
        "Sahasrahala's Hut Right Chest",
        56,
        34,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[11],
      ),
    );
    flute5Map.nodes.push(
      new DungeonNode(
        'Sahasrahala',
        48,
        73,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.pendantCourage;
        },
        items[29],
        'Green Pendant Required',
      ),
    );
    dungeon.dungeonMaps.push(flute5Map);
    var zoraEntranceMap = new DungeonMap('lw-zora-entrance', 'Zora Entrance');
    zoraEntranceMap.nodes.push(
      new DungeonNode(
        '',
        76,
        95,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'lw-flute2',
        'Power Glove Required',
      ),
    );
    zoraEntranceMap.nodes.push(
      new DungeonNode(
        '',
        20,
        8,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'lw-waterfall',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return items.moonPearl || items.boots;
        },
      ),
    );
    zoraEntranceMap.nodes.push(
      new DungeonNode(
        '',
        26,
        61,
        NodeStatus.WATER_WARP,
        function (items, config) {
          return items.flippers;
        },
        'lw-lake-hylea',
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return true;
        },
      ),
    );
    zoraEntranceMap.nodes.push(new DungeonNode('', 65, 5, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-zora-domain'));
    dungeon.dungeonMaps.push(zoraEntranceMap);
    var flute8Map = new DungeonMap('lw-flute8', 'Ice Cave Entrance');
    flute8Map.nodes.push(new DungeonNode('', 6, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-minimoldorm-entrance'));
    flute8Map.nodes.push(new DungeonNode('', 58, 8, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-icerod'));
    flute8Map.nodes.push(
      new DungeonNode(
        '',
        34,
        74,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.flippers;
        },
        'lw-lake-hylea',
        'Flippers Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    flute8Map.nodes.push(
      new DungeonNode(
        '',
        61,
        69,
        NodeStatus.WATER_WARP,
        function (items, config) {
          return items.flippers;
        },
        'lw-sanctuary-entrance',
        'Flippers Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    dungeon.dungeonMaps.push(flute8Map);
    var hoboEntranceMap = new DungeonMap('lw-hobo-entrance', 'Hobo Entrance');
    hoboEntranceMap.nodes.push(new DungeonNode('', 34, 54, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-hobo'));
    hoboEntranceMap.nodes.push(new DungeonNode('', 82, 70, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lake-hylea'));
    dungeon.dungeonMaps.push(hoboEntranceMap);
    var minimoldormMap = new DungeonMap('lw-minimoldorm', 'Mini Moldorm Cave', true);
    minimoldormMap.nodes.push(
      new DungeonNode('', 50, 92, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-minimoldorm-entrance'),
    );
    minimoldormMap.nodes.push(
      new DungeonNode(
        'Mini Moldorm Cave Far Left Chest',
        35,
        16,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[23],
      ),
    );
    minimoldormMap.nodes.push(
      new DungeonNode('Mini Moldorm Cave Left Chest', 42, 14, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[24]),
    );
    minimoldormMap.nodes.push(
      new DungeonNode(
        'Mini Moldorm Cave Right Chest',
        57,
        14,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[25],
      ),
    );
    minimoldormMap.nodes.push(
      new DungeonNode(
        'Mini Moldorm Cave Far Right Chest',
        64,
        16,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[26],
      ),
    );
    minimoldormMap.nodes.push(
      new DungeonNode('Mini Moldorm Cave NPC', 49.5, 15, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[40]),
    );
    dungeon.dungeonMaps.push(minimoldormMap);
    var desertMap = new DungeonMap('lw-desert', 'Desert Area');
    desertMap.nodes.push(
      new DungeonNode(
        '',
        16,
        92,
        NodeStatus.PORTAL,
        function (items, config) {
          return items.glove === 2;
        },
        '',
        '',
        [3],
      ),
    );
    desertMap.nodes.push(new DungeonNode('', 94, 90, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute7'));
    desertMap.nodes.push(new DungeonNode('', 80, 30, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-aginah'));
    desertMap.nodes.push(
      new DungeonNode(
        '',
        29.5,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.book;
        },
        'dp-entry',
        'Book Required',
      ),
    );
    desertMap.nodes.push(
      new DungeonNode(
        'Desert Ledge Item',
        9,
        65,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.currentRegionInMap === 2;
        },
        items[45],
      ),
    );
    desertMap.nodes.push(
      new DungeonNode('', 70, 11, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-checkerboard', '', [1]),
    );
    desertMap.nodes.push(new DungeonNode('', 14, 18, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'dp-entry', '', [2]));
    desertMap.nodes.push(
      new DungeonNode(
        '',
        30,
        7,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove;
        },
        'dp-first-tile',
        '',
        [2],
      ),
    );
    dungeon.dungeonMaps.push(desertMap);
    var damMap = new DungeonMap('lw-dam', 'Dam', true);
    damMap.nodes.push(new DungeonNode('', 50, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute7'));
    damMap.nodes.push(new DungeonNode('Dam Chest', 50, 73, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[4]));
    dungeon.dungeonMaps.push(damMap);
    var libraryMap = new DungeonMap('lw-library', 'Library', true);
    libraryMap.nodes.push(new DungeonNode('', 50, 87, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-race-game'));
    libraryMap.nodes.push(
      new DungeonNode(
        'Library Item',
        22,
        34,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.boots;
        },
        items[41],
        'Requires Boots',
      ),
    );
    dungeon.dungeonMaps.push(libraryMap);
    var kakarikoMap = new DungeonMap('lw-kakariko', 'Kakariko');
    kakarikoMap.nodes.push(new DungeonNode('', 13, 3, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lostwoods'));
    kakarikoMap.nodes.push(
      new DungeonNode(
        '',
        33,
        3,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove === 2;
        },
        'lw-kak-portal',
      ),
    );
    kakarikoMap.nodes.push(new DungeonNode('', 78, 3, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-fortune-teller'));
    kakarikoMap.nodes.push(
      new DungeonNode('', 94, 81, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-blacksmiths-entrance'),
    );
    kakarikoMap.nodes.push(new DungeonNode('', 87, 96, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-race-game'));
    kakarikoMap.nodes.push(new DungeonNode('', 10, 20, NodeStatus.HOLE, DungeonNode.noReqs, 'lw-well'));
    kakarikoMap.nodes.push(new DungeonNode('', 51.5, 18, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-blindshut'));
    kakarikoMap.nodes.push(new DungeonNode('', 39, 66, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-chicken'));
    kakarikoMap.nodes.push(new DungeonNode('', 64, 77, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-bar'));
    kakarikoMap.nodes.push(new DungeonNode('', 62.5, 64, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-sickkid'));
    kakarikoMap.nodes.push(new DungeonNode('Bottle Vendor', 38, 34, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[28]));
    kakarikoMap.nodes.push(
      new DungeonNode(
        'Activate Flute',
        50.5,
        40,
        NodeStatus.DUCK,
        function (items, config) {
          return items.flute;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(kakarikoMap);
    var lumberjackMap = new DungeonMap('lw-lumberjack', 'Lumberjack Tree');
    lumberjackMap.nodes.push(
      new DungeonNode(
        '',
        67,
        70,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove && items.lamp;
        },
        'lw-flute1',
        '',
        [-1],
        0,
        function (items, config) {
          return items.glove;
        },
      ),
    );
    lumberjackMap.nodes.push(new DungeonNode('', 29, 19, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lostwoods'));
    lumberjackMap.nodes.push(new DungeonNode('', 54, 96, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-sanctuary-entrance'));
    lumberjackMap.nodes.push(new DungeonNode('', 58, 13, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lumberjack-item'));
    lumberjackMap.nodes.push(
      new DungeonNode(
        '',
        45,
        30,
        NodeStatus.HOLE,
        function (items, config) {
          return items.agahnim && items.boots;
        },
        'lw-lumberjack-item',
        '',
        [-1],
        1,
      ),
    );
    dungeon.dungeonMaps.push(lumberjackMap);
    var fortuneTellerMap = new DungeonMap('lw-fortune-teller', 'Fortune Teller');
    fortuneTellerMap.nodes.push(new DungeonNode('', 56, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-kakariko'));
    fortuneTellerMap.nodes.push(new DungeonNode('', 93, 78, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-sanctuary-entrance'));
    fortuneTellerMap.nodes.push(new DungeonNode('', 78, 7, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lostwoods'));
    dungeon.dungeonMaps.push(fortuneTellerMap);
    var bonkrocksMap = new DungeonMap('lw-bonkrocks', 'Cave below Bonk Rocks', true);
    bonkrocksMap.nodes.push(new DungeonNode('', 50, 87, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-sanctuary-entrance'));
    bonkrocksMap.nodes.push(new DungeonNode('Bonk Rocks', 50, 34, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[22]));
    dungeon.dungeonMaps.push(bonkrocksMap);
    var bonkrocksMap = new DungeonMap('lw-kingstomb', "King's Tomb", true);
    bonkrocksMap.nodes.push(
      new DungeonNode('', 50, 94, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-graveyard', '', [-1], 2),
    );
    bonkrocksMap.nodes.push(new DungeonNode("King's Tomb Chest", 50, 18, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[3]));
    dungeon.dungeonMaps.push(bonkrocksMap);
    var potionShopMap = new DungeonMap('lw-potion-shop', 'Potion Shop', true);
    potionShopMap.nodes.push(new DungeonNode('', 50, 87, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute2'));
    potionShopMap.nodes.push(
      new DungeonNode(
        'Potion Shop Item',
        59,
        72,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.mushroom;
        },
        items[43],
      ),
    );
    dungeon.dungeonMaps.push(potionShopMap);
    var waterfallMap = new DungeonMap('lw-waterfall', 'Waterfall Fairy Cave', true);
    waterfallMap.nodes.push(new DungeonNode('', 50, 87, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-zora-entrance'));
    waterfallMap.nodes.push(
      new DungeonNode('Waterfall Fairy Left Chest', 43, 57, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[50]),
    );
    waterfallMap.nodes.push(
      new DungeonNode('Waterfall Fairy Right Chest', 57, 57, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[51]),
    );
    dungeon.dungeonMaps.push(waterfallMap);
    var waterfallMap = new DungeonMap('lw-zora-domain', "Zora's Domain", true);
    waterfallMap.nodes.push(new DungeonNode('', 15, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-zora-entrance'));
    waterfallMap.nodes.push(new DungeonNode('King Zora', 93, 7, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[34]));
    waterfallMap.nodes.push(
      new DungeonNode(
        'Zora River Ledge',
        43,
        60,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.flippers;
        },
        items[48],
        'Flippers Required',
        [-1],
        0,
        function (items, config) {
          return items.boots || items.canAncillaFF();
        },
      ),
    );
    dungeon.dungeonMaps.push(waterfallMap);
    var icerodMap = new DungeonMap('lw-icerod', 'Ice Cave', true);
    icerodMap.nodes.push(new DungeonNode('', 50, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute8'));
    icerodMap.nodes.push(new DungeonNode('Ice Rod Chest', 45, 16, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[27]));
    dungeon.dungeonMaps.push(icerodMap);
    var hoboMap = new DungeonMap('lw-hobo', 'Hobo Under the Bridge', true);
    hoboMap.nodes.push(new DungeonNode('', 92, 64, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-hobo-entrance'));
    hoboMap.nodes.push(new DungeonNode('Hobo', 40, 25, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[32]));
    dungeon.dungeonMaps.push(hoboMap);
    var hoboMap = new DungeonMap('lw-aginah', "Aginah's Cave", true);
    hoboMap.nodes.push(new DungeonNode('', 25, 88, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-desert'));
    hoboMap.nodes.push(new DungeonNode('Aginah', 70, 70, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[8]));
    dungeon.dungeonMaps.push(hoboMap);
    var wellMap = new DungeonMap('lw-well', 'Kakariko Well', true);
    wellMap.nodes.push(new DungeonNode('', 75, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-kakariko'));
    wellMap.nodes.push(
      new DungeonNode('Kakariko Well Chest 1', 24, 76, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[12]),
    );
    wellMap.nodes.push(
      new DungeonNode('Kakariko Well Chest 2', 32, 62, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[13]),
    );
    wellMap.nodes.push(
      new DungeonNode('Kakariko Well Chest 3', 38.5, 62, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[14]),
    );
    wellMap.nodes.push(
      new DungeonNode('Kakariko Well Chest 4', 45, 62, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[15]),
    );
    wellMap.nodes.push(
      new DungeonNode('Kakariko Well Chest 5', 25, 15, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[16]),
    );
    dungeon.dungeonMaps.push(wellMap);
    var wellMap = new DungeonMap('lw-blindshut', "Blind's Hut", true);
    wellMap.nodes.push(new DungeonNode('', 41, 60, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-kakariko'));
    wellMap.nodes.push(
      new DungeonNode("Blind' Hut Chest 1", 45, 80, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[17]),
    );
    wellMap.nodes.push(
      new DungeonNode("Blind' Hut Chest 2", 39, 86, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[18]),
    );
    wellMap.nodes.push(
      new DungeonNode("Blind' Hut Chest 3", 61, 86, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[19]),
    );
    wellMap.nodes.push(
      new DungeonNode("Blind' Hut Chest 4", 55, 80, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[20]),
    );
    wellMap.nodes.push(
      new DungeonNode("Blind' Hut Chest 5", 50, 14, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[21]),
    );
    dungeon.dungeonMaps.push(wellMap);
    var barMap = new DungeonMap('lw-bar', 'Kakariko Tavern', true);
    barMap.nodes.push(new DungeonNode('', 50, 10, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-kakariko'));
    barMap.nodes.push(new DungeonNode('Tavern Chest', 36, 28, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[6]));
    dungeon.dungeonMaps.push(barMap);
    var chickenMap = new DungeonMap('lw-chicken', 'Chicken House', true);
    chickenMap.nodes.push(new DungeonNode('', 25, 68, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-kakariko'));
    chickenMap.nodes.push(
      new DungeonNode('Chicken House Chest', 75, 44, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[7]),
    );
    dungeon.dungeonMaps.push(chickenMap);
    var southGroveCaveMap = new DungeonMap('lw-south-grove-cave', 'Cave South of Grove', true);
    southGroveCaveMap.nodes.push(
      new DungeonNode('', 50, 78, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-south-grove', '', [-1], 1),
    );
    southGroveCaveMap.nodes.push(
      new DungeonNode('South Grove Chest', 32, 40, NodeStatus.VIEWABLE_CLOSED_CHEST, DungeonNode.noReqs, items[37]),
    );
    dungeon.dungeonMaps.push(southGroveCaveMap);
    var southGroveCaveMap = new DungeonMap('lw-sickkid', "Sick Kid's House", true);
    southGroveCaveMap.nodes.push(new DungeonNode('', 50, 87, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-kakariko'));
    southGroveCaveMap.nodes.push(
      new DungeonNode(
        'Sick Kid',
        22,
        55,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.bottle;
        },
        items[31],
      ),
    );
    dungeon.dungeonMaps.push(southGroveCaveMap);
    var blacksmithsEntranceMap = new DungeonMap('lw-blacksmiths-entrance', 'Blacksmiths Entrance');
    blacksmithsEntranceMap.nodes.push(
      new DungeonNode(
        '',
        5,
        62,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 0;
        },
        'lw-kakariko',
      ),
    );
    blacksmithsEntranceMap.nodes.push(
      new DungeonNode(
        '',
        59,
        50,
        NodeStatus.HOLE,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 1;
        },
        'lw-bat',
      ),
    );
    blacksmithsEntranceMap.nodes.push(
      new DungeonNode(
        '',
        44,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 0;
        },
        'lw-blacksmiths',
      ),
    );
    dungeon.dungeonMaps.push(blacksmithsEntranceMap);
    var batMap = new DungeonMap('lw-bat', 'Magic Bat Cave', true);
    batMap.nodes.push(
      new DungeonNode('', 25, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-blacksmiths-entrance'),
    );
    batMap.nodes.push(
      new DungeonNode(
        'Magic Bat',
        75,
        24,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.powder;
        },
        items[30],
        'Magic Powder Required',
        [-1],
        0,
        function (items, config) {
          return items.somaria && items.mushroom;
        },
      ),
    );
    dungeon.dungeonMaps.push(batMap);
    var blacksmithsMap = new DungeonMap('lw-blacksmiths', 'Blacksmiths', true);
    blacksmithsMap.nodes.push(
      new DungeonNode('', 50, 86, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-blacksmiths-entrance'),
    );
    blacksmithsMap.nodes.push(
      new DungeonNode(
        'Blacksmiths Item',
        50,
        47,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hasBlacksmiths;
        },
        items[113],
      ),
    );
    dungeon.dungeonMaps.push(blacksmithsMap);
    var kakPortalMap = new DungeonMap('lw-kak-portal', 'Kakariko Dark World Portal');
    kakPortalMap.nodes.push(
      new DungeonNode(
        '',
        65,
        96,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.glove === 2 || items.currentRegionInMap === 0;
        },
        'lw-kakariko',
      ),
    );
    kakPortalMap.nodes.push(
      new DungeonNode(
        '',
        73,
        70,
        NodeStatus.PORTAL,
        function (items, config) {
          return items.glove;
        },
        '',
      ),
    );
    kakPortalMap.nodes.push(
      new DungeonNode(
        '',
        75,
        7,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer || items.currentRegionInMap === 1;
        },
        'lw-lostwoods',
      ),
    );
    dungeon.dungeonMaps.push(kakPortalMap);
    var lostwoodsMap = new DungeonMap('lw-lostwoods', 'Lost Woods');
    lostwoodsMap.nodes.push(new DungeonNode('', 11, 94, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-kakariko'));
    lostwoodsMap.nodes.push(
      new DungeonNode(
        '',
        38,
        94,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer;
        },
        'lw-kak-portal',
        '',
        [-1],
        1,
      ),
    );
    lostwoodsMap.nodes.push(new DungeonNode('', 88, 94, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-fortune-teller'));
    lostwoodsMap.nodes.push(new DungeonNode('', 92, 14, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lumberjack'));
    lostwoodsMap.nodes.push(new DungeonNode('', 16, 20, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-pedestal'));
    lostwoodsMap.nodes.push(new DungeonNode('', 75, 52, NodeStatus.HOLE, DungeonNode.noReqs, 'lw-thief-hideout'));
    lostwoodsMap.nodes.push(
      new DungeonNode('Mushroom Item', 47, 34, NodeStatus.VIEWABLE_CLOSED_CHEST, DungeonNode.noReqs, items[42]),
    );
    dungeon.dungeonMaps.push(lostwoodsMap);
    var lumberjackItemMap = new DungeonMap('lw-lumberjack-item', 'Lumberjack Cave', true);
    lumberjackItemMap.nodes.push(new DungeonNode('', 75, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lumberjack'));
    lumberjackItemMap.nodes.push(
      new DungeonNode(
        'Lumberjack Item',
        60,
        50,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.currentRegionInMap === 1;
        },
        items[36],
      ),
    );
    dungeon.dungeonMaps.push(lumberjackItemMap);
    var thiefHideoutMap = new DungeonMap('lw-thief-hideout', 'Lost Woods Hideout', true);
    thiefHideoutMap.nodes.push(new DungeonNode('', 25, 90, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lostwoods'));
    thiefHideoutMap.nodes.push(
      new DungeonNode(
        'Lost Woods Hideout Chest',
        73,
        41,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        DungeonNode.noReqs,
        items[35],
      ),
    );
    dungeon.dungeonMaps.push(thiefHideoutMap);
    var pedestalMap = new DungeonMap('lw-pedestal', 'Master Sword Pedestal', true);
    pedestalMap.nodes.push(new DungeonNode('', 51, 94, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-lostwoods'));
    pedestalMap.nodes.push(
      new DungeonNode(
        'Pedestal',
        48.5,
        29,
        NodeStatus.PEDESTAL,
        function (items, config) {
          return items.pendantCourage && items.pendantPower && items.pendantWisdom;
        },
        items[0],
      ),
    );
    dungeon.dungeonMaps.push(pedestalMap);
    var checkerboardMap = new DungeonMap('lw-checkerboard', 'Checkerboard Cave', true);
    checkerboardMap.nodes.push(new DungeonNode('', 50, 85, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-desert', '', [-1], 1));
    checkerboardMap.nodes.push(
      new DungeonNode('Checkerboard Item', 78, 27, NodeStatus.VIEWABLE_CLOSED_CHEST, DungeonNode.noReqs, items[39]),
    );
    dungeon.dungeonMaps.push(checkerboardMap);
    var gyLedgeMap = new DungeonMap('lw-gy-ledge', 'Graveyard Ledge Cave', true);
    gyLedgeMap.nodes.push(
      new DungeonNode('', 50, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-graveyard', '', [-1], 3),
    );
    gyLedgeMap.nodes.push(
      new DungeonNode(
        'Graveyard Ledge Chest',
        51,
        29,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        DungeonNode.noReqs,
        items[38],
      ),
    );
    dungeon.dungeonMaps.push(gyLedgeMap);
    var flute1Map = new DungeonMap('lw-flute1', 'Death Mountain Entrance');
    flute1Map.nodes.push(new DungeonNode('', 10, 29, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-spectacle-rock'));
    flute1Map.nodes.push(
      new DungeonNode(
        '',
        94,
        57,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hookshot;
        },
        'lw-east',
      ),
    );
    flute1Map.nodes.push(
      new DungeonNode(
        'Old Man',
        29,
        68,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.lamp;
        },
        items[74],
        'Lamp Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    dungeon.dungeonMaps.push(flute1Map);
    var spectacleRockMap = new DungeonMap('lw-spectacle-rock', 'Spectacle Rock');
    spectacleRockMap.nodes.push(new DungeonNode('', 11, 50, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute1'));
    spectacleRockMap.nodes.push(new DungeonNode('', 78, 50, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-flute1'));
    spectacleRockMap.nodes.push(new DungeonNode('', 45, 41, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-spectacle-cave'));
    spectacleRockMap.nodes.push(
      new DungeonNode('', 45, 58, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-spectacle-cave', '', [-1], 1),
    );
    spectacleRockMap.nodes.push(new DungeonNode('', 75, 36, NodeStatus.PORTAL, DungeonNode.noReqs, ''));
    spectacleRockMap.nodes.push(
      new DungeonNode(
        'Spectacle Rock Item',
        53,
        34,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.currentRegionInMap === 1;
        },
        items[77],
      ),
    );
    spectacleRockMap.nodes.push(new DungeonNode('', 45, 29, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-hera', '', [1]));
    dungeon.dungeonMaps.push(spectacleRockMap);
    var spectacleCaveMap = new DungeonMap('lw-spectacle-cave', 'Spectacle Rock Cave', true);
    spectacleCaveMap.nodes.push(
      new DungeonNode(
        '',
        25,
        93,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.currentRegionInMap === 0;
        },
        'lw-spectacle-rock',
        '',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    spectacleCaveMap.nodes.push(new DungeonNode('', 28, 53, NodeStatus.HOLE, DungeonNode.noReqs, 'lw-flute1'));
    spectacleCaveMap.nodes.push(
      new DungeonNode(
        'Spectacle Rock Cave Item',
        36,
        38,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.currentRegionInMap === 1;
        },
        items[75],
      ),
    );
    if (config.hintsEnabled) {
      spectacleCaveMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          36,
          31,
          NodeStatus.HINT,
          function (items, config) {
            return items.currentRegionInMap === 1;
          },
          '13',
        ),
      );
    }
    dungeon.dungeonMaps.push(spectacleCaveMap);
    var heraMap = new DungeonMap('lw-hera', 'Tower of Hera Entrance');
    heraMap.nodes.push(new DungeonNode('', 74, 38, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'toh-entry'));
    heraMap.nodes.push(
      new DungeonNode(
        '',
        94,
        37,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer;
        },
        'lw-trportal',
      ),
    );
    heraMap.nodes.push(new DungeonNode('', 75, 53, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-spectacle-rock'));
    heraMap.nodes.push(
      new DungeonNode(
        'Ether Tablet',
        18,
        31,
        NodeStatus.BOOK_CHECKABLE_ITEM,
        function (items, config) {
          return items.sword >= 2 || (items.hammer && config.weapons === 'swordless');
        },
        items[76],
      ),
    );
    heraMap.nodes.push(
      new DungeonNode(
        'Spectacle Rock Item',
        53,
        60,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return false;
        },
        items[77],
      ),
    );
    dungeon.dungeonMaps.push(heraMap);
    var trportalMap = new DungeonMap('lw-trportal', 'Turtle Rock Portal');
    trportalMap.nodes.push(
      new DungeonNode(
        '',
        6,
        47,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hammer;
        },
        'lw-hera',
      ),
    );
    trportalMap.nodes.push(new DungeonNode('', 19, 61, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-spiral'));
    trportalMap.nodes.push(new DungeonNode('', 43, 70, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-east'));
    trportalMap.nodes.push(new DungeonNode('', 43, 50, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-paradox5'));
    trportalMap.nodes.push(
      new DungeonNode(
        '',
        76,
        48,
        NodeStatus.PORTAL,
        function (items, config) {
          return items.glove === 2 && items.hammer && items.moonPearl;
        },
        '',
      ),
    );
    trportalMap.nodes.push(
      new DungeonNode(
        'Floating Island',
        23,
        30,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return items.currentRegionInMap === 1;
        },
        items[87],
      ),
    );
    dungeon.dungeonMaps.push(trportalMap);
    var eastMap = new DungeonMap('lw-east', 'East Death Mountain');
    eastMap.nodes.push(
      new DungeonNode(
        '',
        13,
        48,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.hookshot;
        },
        'lw-flute1',
        'Hookshot Required',
      ),
    );
    eastMap.nodes.push(
      new DungeonNode('', 90, 27, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-paradox2', '', [-1], 1),
    );
    eastMap.nodes.push(new DungeonNode('', 93, 65, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-paradox5'));
    eastMap.nodes.push(
      new DungeonNode(
        '',
        44,
        71,
        NodeStatus.PORTAL,
        function (items, config) {
          return items.glove === 2;
        },
        '',
      ),
    );
    dungeon.dungeonMaps.push(eastMap);
    var spiralMap = new DungeonMap('lw-spiral', 'Spiral Cave', true);
    spiralMap.nodes.push(
      new DungeonNode('Spiral Cave Chest', 70, 38, NodeStatus.CLOSED_CHEST, DungeonNode.noReqs, items[78]),
    );
    spiralMap.nodes.push(new DungeonNode('', 74, 88, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-east'));
    dungeon.dungeonMaps.push(spiralMap);
    var paradox2Map = new DungeonMap('lw-paradox2', 'Paradox Cave 2 Chests', true);
    paradox2Map.nodes.push(
      new DungeonNode(
        'Paradox Cave Upper - Left Chest',
        72,
        14,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.currentRegionInMap === 0 || items.mirror;
        },
        items[85],
      ),
    );
    paradox2Map.nodes.push(
      new DungeonNode(
        'Paradox Cave Upper - Right Chest',
        78,
        14,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.currentRegionInMap === 0 || items.mirror;
        },
        items[86],
      ),
    );
    paradox2Map.nodes.push(new DungeonNode('', 75, 93, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-east'));
    paradox2Map.nodes.push(
      new DungeonNode(
        '',
        87,
        60,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.currentRegionInMap === 0 || items.mirror;
        },
        'lw-paradox5',
        '',
        [-1],
        1,
      ),
    );
    dungeon.dungeonMaps.push(paradox2Map);
    var paradox5Map = new DungeonMap('lw-paradox5', 'Paradox Cave 5 Chests', true);
    paradox5Map.nodes.push(
      new DungeonNode(
        'Paradox Cave Lower - Chest 1',
        61,
        13,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[80],
        '',
        [1],
      ),
    );
    paradox5Map.nodes.push(
      new DungeonNode(
        'Paradox Cave Lower - Chest 2',
        70,
        13,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[81],
        '',
        [1],
      ),
    );
    paradox5Map.nodes.push(
      new DungeonNode(
        'Paradox Cave Lower - Chest 3',
        73,
        19,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[82],
        '',
        [1],
      ),
    );
    paradox5Map.nodes.push(
      new DungeonNode(
        'Paradox Cave Lower - Chest 4',
        79,
        13,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[83],
        '',
        [1],
      ),
    );
    paradox5Map.nodes.push(
      new DungeonNode(
        'Paradox Cave Lower - Chest 5',
        88,
        13,
        NodeStatus.CLOSED_CHEST,
        DungeonNode.noReqs,
        items[84],
        '',
        [1],
      ),
    );
    paradox5Map.nodes.push(new DungeonNode('', 67, 70, NodeStatus.HOLE, DungeonNode.noReqs, 'lw-paradox2', '', [-1]));
    paradox5Map.nodes.push(new DungeonNode('', 87, 60, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-paradox2', '', [1]));
    paradox5Map.nodes.push(
      new DungeonNode(
        '',
        50,
        92,
        NodeStatus.OPEN_DOOR,
        DungeonNode.noReqs,
        'lw-east',
        '',
        config.canGlitch ? [-1] : [0],
      ),
    );
    paradox5Map.nodes.push(
      new DungeonNode(
        '',
        25,
        60,
        NodeStatus.OPEN_DOOR,
        DungeonNode.noReqs,
        'lw-trportal',
        '',
        config.canGlitch ? [-1] : [0],
      ),
    );
    dungeon.dungeonMaps.push(paradox5Map);
    var trLedgeMap = new DungeonMap('lw-tr-ledge', 'Mimic Cave Entrance');
    trLedgeMap.nodes.push(new DungeonNode('', 75, 48, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-mimic'));
    dungeon.dungeonMaps.push(trLedgeMap);
    var mimicMap = new DungeonMap('lw-mimic', 'Mimic Cave', true);
    mimicMap.nodes.push(new DungeonNode('', 50, 95, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'lw-tr-ledge'));
    mimicMap.nodes.push(
      new DungeonNode(
        'Mimic Cave Chest',
        50,
        25,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return items.hammer;
        },
        items[79],
        'Hammer Required',
      ),
    );
    dungeon.dungeonMaps.push(mimicMap);
    dungeon.startingMap = startQuestMap;
    return dungeon;

  }
}
