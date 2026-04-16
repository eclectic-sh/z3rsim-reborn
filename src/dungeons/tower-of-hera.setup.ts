import { Dungeon } from '../models/dungeon.model';
import { DungeonMap } from '../models/dungeon-map.model';
import { DungeonNode } from '../models/dungeon-node.model';
import { NodeStatus } from '../models/node-status.enum';
import { Config } from '../models/config.model';

export class TowerOfHeraSetup {
  static setup(items: string[], config: Config): Dungeon {

    var dungeon = new Dungeon(
      'Tower of Hera',
      items[94],
      function (items, config) {
        if (config.mode === 'inverted') {
          return items.moonPearl && items.hammer && items.canInvertedEastDeathMountain(config.canGlitch);
        } else {
          return (
            items.canWestDeathMountain(config.canGlitch) && (items.mirror || (items.hookshot && items.hammer))
          );
        }
      },
      62,
      5.5,
    );
    var entryMap = new DungeonMap('toh-entry', 'Tower of Hera Entrance');
    entryMap.nodes.push(
      new DungeonNode(
        '',
        50,
        90,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        config.isFullMap ? 'lw-hera' : 'exit',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        28,
        67,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'toh-sk',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Map Chest',
        50,
        25,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[90],
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        'Basement',
        25,
        14,
        NodeStatus.SK_LOCKED,
        function (items, config) {
          return items.hasFiresource();
        },
        'toh-basement',
        'Fire Source Required',
      ),
    );
    entryMap.nodes.push(
      new DungeonNode(
        '',
        72,
        67,
        NodeStatus.BK_LOCKED,
        function (items, config) {
          return true;
        },
        'toh-upstairs',
      ),
    );
    if (config.canGlitch) {
      entryMap.nodes.push(
        new DungeonNode(
          '',
          36,
          18,
          NodeStatus.OPEN_DOOR,
          function (items, config) {
            return false;
          },
          'toh-upstairs',
          '',
          [-1],
          0,
          function (items, config) {
            return items.hookshot;
          },
        ),
      );
    }
    if (config.hintsEnabled) {
      entryMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          50,
          46,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '3',
        ),
      );
    }
    dungeon.dungeonMaps.push(entryMap);
    var skMap = new DungeonMap('toh-sk', 'Left Room');
    skMap.nodes.push(
      new DungeonNode(
        '',
        56.5,
        26,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'toh-entry',
      ),
    );
    skMap.nodes.push(
      new DungeonNode(
        'Basement Cage Item',
        53,
        61,
        NodeStatus.VIEWABLE_CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[89],
      ),
    );
    dungeon.dungeonMaps.push(skMap);
    var basementMap = new DungeonMap('toh-basement', 'Basement');
    basementMap.nodes.push(
      new DungeonNode(
        '',
        50,
        19,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'toh-entry',
      ),
    );
    basementMap.nodes.push(
      new DungeonNode(
        'Big Key Chest',
        50,
        66,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[88],
      ),
    );
    dungeon.dungeonMaps.push(basementMap);
    var upstairsMap = new DungeonMap('toh-upstairs', 'Big Chest Room');
    upstairsMap.nodes.push(
      new DungeonNode(
        '',
        87,
        25,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'toh-entry',
      ),
    );
    upstairsMap.nodes.push(
      new DungeonNode(
        'Compass Chest',
        50,
        58,
        NodeStatus.CLOSED_CHEST,
        function (items, config) {
          return true;
        },
        items[91],
      ),
    );
    upstairsMap.nodes.push(
      new DungeonNode(
        'Big Chest',
        50,
        17,
        NodeStatus.BIG_CHEST,
        function (items, config) {
          return true;
        },
        items[92],
      ),
    );
    if (config.hintsEnabled) {
      upstairsMap.nodes.push(
        new DungeonNode(
          'Hint Tile',
          50,
          51,
          NodeStatus.HINT,
          function (items, config) {
            return true;
          },
          '4',
        ),
      );
    }
    upstairsMap.nodes.push(
      new DungeonNode(
        'Moldorm Room',
        13,
        25,
        NodeStatus.OPEN_DOOR,
        function (items, config) {
          return true;
        },
        'toh-moldorm',
        'Sword or Hammer Required',
      ),
    );
    dungeon.dungeonMaps.push(upstairsMap);
    var moldormMap = new DungeonMap('toh-moldorm', 'Moldorm Room');
    moldormMap.nodes.push(
      new DungeonNode(
        'Moldorm',
        50,
        50,
        NodeStatus.BOSS,
        function (items, config) {
          return items.sword || items.hammer;
        },
        items[93],
      ),
    );
    moldormMap.nodes.push(
      new DungeonNode(
        '',
        72,
        67,
        NodeStatus.HOLE,
        function (items, config) {
          return true;
        },
        'toh-upstairs',
      ),
    );
    dungeon.dungeonMaps.push(moldormMap);
    dungeon.startingMap = entryMap;
    return dungeon;

  }
}
