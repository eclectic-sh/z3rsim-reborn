import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class AgaTowerSetup {
  static setup(items: string[], config: Config): Dungeon {

    var xCoords = [49.6, 55];
    var yCoords = [39, 4.5];
    var dungeon = new Dungeon(
      'Aga Tower',
      'Agahnim',
      function (items, config) {
        return (
          (config.mode !== 'inverted' &&
            (items.cape || items.sword >= 2 || (config.weapons === 'swordless' && items.hammer))) ||
          (config.mode === 'inverted' && items.canInvertedEastDarkDeathMountain(config.canGlitch))
        );
      },
      xCoords[config.mode === 'inverted' ? 1 : 0],
      yCoords[config.mode === 'inverted' ? 1 : 0],
    );
    var entryMap = new DungeonMap('ct-entry', 'Aga Tower Entrance');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        13,
        53.5,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'lw-hyrule-castle' : 'exit',
        '',
        [-1],
        1,
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Dark Maze',
        50,
        19,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.lamp;
        },
        'ct-maze',
        'Lamp Required',
        [-1],
        0,
        DungeonNode.noReqs,
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Aga Tower First Chest',
        72,
        72,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[95],
      ),
    );
    dungeon.dungeonMaps.push(entryMap);
    var mazeMap = new DungeonMap('ct-maze', 'Dark Maze');
    mazeMap.nodes.push(
      new DungeonNode(
        '',
        75,
        10,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ct-entry',
      ),
    );
    mazeMap.nodes.push(
      new DungeonNode(
        '',
        43,
        77,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return true;
        },
        'ct-tile',
      ),
    );
    mazeMap.nodes.push(
      new DungeonNode(
        'Aga Tower Dark Chest',
        11,
        43,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[96],
      ),
    );
    dungeon.dungeonMaps.push(mazeMap);
    var tileMap = new DungeonMap('ct-tile', 'Hint Tile Room');
    tileMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ct-maze',
      ),
    );
    tileMap.nodes.push(new DungeonNode('', 13, 53, NodeStatus.OPEN_DOOR, DungeonNode.noReqs, 'ct-top'));
    if (config.hintsEnabled) {
      tileMap.nodes.push(new DungeonNode('Hint Tile', 28, 20, NodeStatus.HINT, DungeonNode.noReqs, '0'));
    }
    dungeon.dungeonMaps.push(tileMap);
    var topMap = new DungeonMap('ct-top', 'Top of the Tower');
    topMap.nodes.push(
      new DungeonNode(
        '',
        50,
        84,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'ct-maze',
      ),
    );
    topMap.nodes.push(
      new DungeonNode(
        "Agahnim's Fight",
        50,
        16,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return items.sword || (config.weapons === 'swordless' && (items.hammer || items.net));
        },
        'ct-aga',
        config.weapons !== 'swordless' ? 'Sword Required' : 'Hammer or Bug Net Required',
      ),
    );
    dungeon.dungeonMaps.push(topMap);
    var agaMap = new DungeonMap('ct-aga', 'Agahnim Room');
    agaMap.nodes.push(
      new DungeonNode(
        'Agahnim',
        50,
        50,
        NodeStatus.BOSS,
        function (items, config) {
          return true;
        },
        'Agahnim',
      ),
    );
    dungeon.dungeonMaps.push(agaMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
