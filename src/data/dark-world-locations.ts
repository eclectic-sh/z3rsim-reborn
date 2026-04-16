import { Location } from '../models/location.model';
import { Config } from '../models/config.model';

export class DarkWorldLocations {
  static setup(items: string[], config: Config): Location[] {

    var locations = [];
    if (config.hintsEnabled) {
      locations.push(
        new Location(
          'SE Dark World Hint',
          95,
          78,
          function (items, config) {
            if (config.mode === 'inverted') {
              return items.flippers && items.glove;
            } else {
              return (
                (items.canNorthEastDarkWorld() || items.canNorthWestDarkWorld()) &&
                items.flippers &&
                items.glove &&
                items.moonPearl
              );
            }
          },
          null,
          ['=14'],
          '',
          function (items, config) {
            if (config.mode === 'inverted') {
              return (
                items.glove &&
                ((items.flute && items.canInvertedLW()) ||
                  (items.canInvertedNEDW(true) && (items.hammer || items.glove)) ||
                  (items.canInvertedLW() && items.mirror) ||
                  items.boots ||
                  items.canAncillaFF())
              );
            } else {
              return (
                items.glove &&
                items.moonPearl &&
                (items.canNorthEastDarkWorld(true) ||
                  (items.canNorthWestDarkWorld(true) && items.boots) ||
                  items.canAncillaFF())
              );
            }
          },
        ),
      );
    }
    locations.push(
      new Location(
        'Superbunny Cave',
        92.8,
        14.7,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain();
          } else {
            return items.canDarkEastDeathMountain() && items.moonPearl;
          }
        },
        null,
        [items[97], items[98]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain(true);
          } else {
            return items.canDarkEastDeathMountain(true);
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Hookshot Cave (bottom chest)',
        91.6,
        8.6,
        function (items, config) {
          if (config.mode === 'inverted') {
            return (
              items.canInvertedEastDarkDeathMountain() &&
              items.glove &&
              (items.hookshot || (items.boots && config.advancedItems))
            );
          } else {
            return (
              items.canDarkEastDeathMountain() &&
              items.moonPearl &&
              (items.hookshot || (items.boots && config.advancedItems))
            );
          }
        },
        null,
        [items[102]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain(true) && items.glove && (items.hookshot || items.boots);
          } else {
            return items.canDarkEastDeathMountain(true) && items.moonPearl && (items.hookshot || items.boots);
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Hookshot Cave (3 top chests)',
        91.6,
        3.4,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain() && items.glove && items.hookshot;
          } else {
            return items.canDarkEastDeathMountain() && items.moonPearl && items.hookshot;
          }
        },
        null,
        [items[100], items[101], items[99]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain(true) && items.glove && (items.hookshot || items.boots);
          } else {
            return items.canDarkEastDeathMountain(true) && items.moonPearl && (items.hookshot || items.boots);
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Spike Cave',
        78.6,
        14.9,
        function (items, config) {
          if (config.mode === 'inverted') {
            return (
              items.canInvertedEastDarkDeathMountain() &&
              items.hammer &&
              items.glove &&
              ((items.cape && (items.halfMagic || items.bottle)) || items.byrna)
            );
          } else {
            return (
              items.canDarkWestDeathMountain() &&
              items.hammer &&
              items.glove &&
              ((items.cape && (items.halfMagic || items.bottle)) || items.byrna)
            );
          }
        },
        null,
        [items[103]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain(true) && items.hammer && items.glove;
          } else {
            return items.canDarkWestDeathMountain(true) && items.hammer && items.glove;
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Catfish',
        96,
        17.2,
        function (items, config) {
          return (
            (items.canNorthEastDarkWorld() && items.moonPearl && items.glove) ||
            (config.mode === 'inverted' && items.canInvertedNEDW() && items.glove)
          );
        },
        function (items, config) {
          return (
            (items.canNorthEastDarkWorld() && items.moonPearl && items.glove) ||
            (config.mode === 'inverted' && items.canInvertedNEDW() && items.glove)
          );
        },
        [items[104]],
        'ow',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedNEDW(true) && items.glove;
          } else {
            return items.canNorthEastDarkWorld(true) && items.moonPearl && items.glove;
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedNEDW(true) && items.glove;
          } else {
            return items.canNorthEastDarkWorld(true) && items.moonPearl && items.glove;
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Pyramid',
        79,
        43.5,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedNEDW();
          } else {
            return items.canNorthEastDarkWorld();
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedNEDW();
          } else {
            return items.canNorthEastDarkWorld();
          }
        },
        [items[105]],
        'ow',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedNEDW(true);
          } else {
            return items.canNorthEastDarkWorld(true);
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedNEDW(true);
          } else {
            return items.canNorthEastDarkWorld(true);
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Pyramid Fairy',
        73.5,
        48.5,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedLW() && items.mirror && items.crystal5 && items.crystal6;
          } else {
            return (
              items.canSouthDarkWorld() &&
              items.moonPearl &&
              (items.hammer || (items.mirror && items.agahnim)) &&
              items.crystal5 &&
              items.crystal6
            );
          }
        },
        null,
        [items[106], items[107]],
        'ow',
      ),
    );
    locations.push(
      new Location(
        'Bombable Hut',
        55.4,
        57.8,
        function (items, config) {
          return items.canNorthWestDarkWorld() || config.mode === 'inverted';
        },
        null,
        [items[108]],
        'ow',
        function (items, config) {
          return items.canNorthWestDarkWorld(true);
        },
      ),
    );
    locations.push(
      new Location(
        'C-Shaped House',
        60.8,
        47.9,
        function (items, config) {
          return items.canNorthWestDarkWorld() || config.mode === 'inverted';
        },
        null,
        [items[109]],
        'ow',
        function (items, config) {
          return items.canNorthWestDarkWorld(true);
        },
      ),
    );
    locations.push(
      new Location(
        'Chest Game',
        52.1,
        46.4,
        function (items, config) {
          return items.canNorthWestDarkWorld() || config.mode === 'inverted';
        },
        null,
        [items[110]],
        'ow',
        function (items, config) {
          return items.canNorthWestDarkWorld(true);
        },
      ),
    );
    locations.push(
      new Location(
        'Hammer Pegs',
        65.8,
        60.1,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.hammer && (items.glove === 2 || (items.mirror && items.canInvertedLW() && items.glove));
          } else {
            return items.canNorthWestDarkWorld() && items.glove === 2 && items.hammer;
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.hammer && (items.glove === 2 || (items.mirror && items.canInvertedLW() && items.glove));
          } else {
            return items.canNorthWestDarkWorld() && items.glove === 2 && items.hammer;
          }
        },
        [items[111]],
        'ow',
      ),
    );
    locations.push(
      new Location(
        'Bumper Cave',
        67.1,
        15.2,
        function (items, config) {
          if (config.mode === 'inverted') {
            return (
              items.glove &&
              items.cape &&
              items.moonPearl &&
              items.mirror &&
              items.canInvertedLW() &&
              (items.hookshot || config.advancedItems)
            );
          } else {
            return (
              items.canNorthWestDarkWorld() &&
              items.glove &&
              items.cape &&
              (items.hookshot || config.advancedItems)
            );
          }
        },
        function (items, config) {
          return items.canNorthWestDarkWorld() || config.mode === 'inverted';
        },
        [items[112]],
        'ow',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.glove && items.cape && items.moonPearl && items.mirror && items.canInvertedLW();
          } else {
            return (
              items.canNorthWestDarkWorld(true) &&
              items.glove &&
              items.cape &&
              (items.hookshot || config.advancedItems)
            );
          }
        },
        function (items, config) {
          return items.canNorthWestDarkWorld(true) || config.mode === 'inverted';
        },
      ),
    );
    locations.push(
      new Location(
        'Hype Cave',
        80,
        77.1,
        function (items, config) {
          return items.canSouthDarkWorld() || config.mode === 'inverted';
        },
        null,
        [items[115], items[116], items[117], items[118], items[120]],
        'ow',
        function (items, config) {
          return items.canSouthDarkWorld(true);
        },
      ),
    );
    locations.push(
      new Location(
        "Ol' Stumpy",
        65.5,
        68.6,
        function (items, config) {
          return items.canSouthDarkWorld() || config.mode === 'inverted';
        },
        null,
        [items[119]],
        'ow',
        function (items, config) {
          return items.canSouthDarkWorld(true);
        },
      ),
    );
    locations.push(
      new Location(
        'Digging Game',
        52.9,
        69.2,
        function (items, config) {
          return items.canSouthDarkWorld() || config.mode === 'inverted';
        },
        function (items, config) {
          return items.canSouthDarkWorld() || config.mode === 'inverted';
        },
        [items[121]],
        'ow',
        function (items, config) {
          return items.canSouthDarkWorld(true);
        },
        function (items, config) {
          return items.canSouthDarkWorld(true);
        },
      ),
    );
    locations.push(
      new Location(
        'Mire Shed',
        51.7,
        79.5,
        function (items, config) {
          return items.canMire(config) && (items.moonPearl || config.mode === 'inverted');
        },
        null,
        [items[122], items[123]],
        'mire',
        function (items, config) {
          return items.canMire(config) && (items.mirror || items.moonPearl || config.mode === 'inverted');
        },
      ),
    );
    if (config.mode !== 'inverted') {
      locations.push(
        new Location(
          "Ganon's Tower Accessibility",
          73.5,
          4.5,
          function (items, config) {
            return items.canDarkEastDeathMountain() && items.moonPearl;
          },
          null,
          ['gt-requirement'],
          '',
          function (items, config) {
            return items.canDarkEastDeathMountain(true) && items.moonPearl;
          },
        ),
      );
      locations.push(
        new Location(
          "Ganon's Vulnerability",
          72,
          42,
          function (items, config) {
            return items.canNorthEastDarkWorld() && items.moonPearl;
          },
          null,
          ['ganon-requirement'],
          '',
          function (items, config) {
            return items.canNorthEastDarkWorld(true) && items.moonPearl;
          },
        ),
      );
      locations.push(
        new Location(
          'Ganon',
          75,
          40.8,
          function (items, config) {
            switch (config.goal) {
              case 'pedestal':
              case 'triforce':
                return false;
              case 'dungeons':
                return items.canNorthEastDarkWorld() && items.canDamageGanon(config);
              case 'ganon':
                return items.canNorthEastDarkWorld() && items.agahnim2 && items.canDamageGanon(config);
              case 'fast_ganon':
                return items.canNorthEastDarkWorld() && items.canDamageGanon(config);
            }
          },
          null,
          ['Ganon'],
          'ow',
        ),
      );
      locations.push(
        new Location(
          'Blacksmiths',
          57,
          65.9,
          function (items, config) {
            if (config.mode === 'inverted') {
              return (items.glove === 2 || items.mirror) && items.canInvertedLW();
            } else {
              return items.canNorthWestDarkWorld() && items.glove === 2 && (items.mirror || config.advancedItems);
            }
          },
          null,
          [items[113]],
          'ow',
          function (items, config) {
            if (config.mode === 'inverted') {
              return (items.glove === 2 || items.mirror) && items.canInvertedLW();
            } else {
              return items.canNorthWestDarkWorld() && items.glove === 2;
            }
          },
        ),
      );
      locations.push(
        new Location(
          'Purple Chest',
          65.2,
          52.2,
          function (items, config) {
            if (config.mode === 'inverted') {
              return (items.glove === 2 || items.mirror) && items.canInvertedLW();
            } else {
              return items.canNorthWestDarkWorld() && items.glove === 2 && (items.mirror || config.advancedItems);
            }
          },
          null,
          [items[114]],
          'ow',
          function (items, config) {
            if (config.mode === 'inverted') {
              return (items.glove === 2 || items.mirror) && items.canInvertedLW();
            } else {
              return items.canNorthWestDarkWorld() && items.glove === 2;
            }
          },
        ),
      );
      locations.push(
        new Location(
          'Bombos Tablet',
          62.5,
          92.2,
          function (items, config) {
            return (
              items.book &&
              items.mirror &&
              items.canSouthDarkWorld() &&
              (items.sword >= 2 || (items.hammer && config.weapons === 'swordless'))
            );
          },
          function (items, config) {
            return items.book && items.mirror && items.canSouthDarkWorld();
          },
          [items[33]],
          'ow',
          function (items, config) {
            return (
              items.book &&
              items.mirror &&
              items.canSouthDarkWorld(true) &&
              (items.sword >= 2 || (items.hammer && config.weapons === 'swordless'))
            );
          },
          function (items, config) {
            return items.book && items.mirror && items.canSouthDarkWorld(true);
          },
        ),
      );
      locations.push(
        new Location(
          'Checkerboard Cave',
          60,
          77.3,
          function (items, config) {
            return items.canMire(config) && items.mirror;
          },
          function (items, config) {
            return items.canMire(config) && items.mirror;
          },
          [items[39]],
          'mire',
        ),
      );
      locations.push(
        new Location(
          'South of Grove',
          62.5,
          84.1,
          function (items, config) {
            return items.mirror && items.canSouthDarkWorld();
          },
          function (items, config) {
            return items.mirror && items.canSouthDarkWorld();
          },
          [items[37]],
          'ow',
          function (items, config) {
            return items.mirror && items.canSouthDarkWorld(true);
          },
          function (items, config) {
            return items.mirror && items.canSouthDarkWorld(true);
          },
        ),
      );
      locations.push(
        new Location(
          'Graveyard Ledge',
          78.5,
          27,
          function (items, config) {
            return items.mirror && items.moonPearl && items.canNorthWestDarkWorld();
          },
          function (items, config) {
            return items.mirror && items.moonPearl && items.canNorthWestDarkWorld();
          },
          [items[38]],
          'ow',
          function (items, config) {
            return items.mirror && items.moonPearl && items.canNorthWestDarkWorld(true);
          },
          function (items, config) {
            return items.mirror && items.moonPearl && items.canNorthWestDarkWorld(true);
          },
        ),
      );
    }
    if (config.mode === 'inverted') {
      locations.push(
        new Location(
          "Link's House",
          77.4,
          67.9,
          function (items, config) {
            return true;
          },
          null,
          [items[5]],
          'ow',
        ),
      );
      locations.push(
        new Location(
          'ow',
          54.5,
          34,
          function (items, config) {
            return (items.hammer && items.glove) || items.glove === 2;
          },
          null,
          ['warp'],
        ),
      );
      locations.push(
        new Location(
          'wdm',
          75.6,
          14.9,
          function (items, config) {
            if (config.mode === 'inverted') {
              return items.canInvertedEastDarkDeathMountain();
            } else {
              return items.canWestDeathMountain();
            }
          },
          null,
          ['warp'],
          '',
          function (items, config) {
            if (config.mode === 'inverted') {
              return items.canInvertedEastDarkDeathMountain(true);
            } else {
              return items.canWestDeathMountain(true);
            }
          },
        ),
      );
      locations.push(
        new Location(
          'dm',
          88.1,
          22.9,
          function (items, config) {
            return items.canWestDeathMountain() && items.glove === 2;
          },
          null,
          ['warp'],
          '',
          function (items, config) {
            return items.canWestDeathMountain(true) && items.glove === 2;
          },
        ),
      );
      locations.push(
        new Location(
          'ow',
          73.5,
          79,
          function (items, config) {
            return items.hammer && items.glove;
          },
          null,
          ['warp'],
        ),
      );
      locations.push(
        new Location(
          'mire',
          51.7,
          96,
          function (items, config) {
            return items.flute && items.canInvertedLW() && items.glove === 2;
          },
          null,
          ['warp'],
        ),
      );
      locations.push(
        new Location(
          'ow',
          98.2,
          70,
          function (items, config) {
            return items.hammer && items.glove;
          },
          null,
          ['warp'],
        ),
      );
      locations.push(
        new Location(
          'ip',
          89.7,
          92,
          function (items, config) {
            return items.flippers && items.glove === 2;
          },
          null,
          ['warp'],
          '',
          function (items, config) {
            return items.glove === 2;
          },
        ),
      );
      locations.push(
        new Location(
          'dm',
          98.6,
          3.4,
          function (items, config) {
            return (
              items.canInvertedEastDarkDeathMountain() && items.glove === 2 && items.hammer && items.moonPearl
            );
          },
          null,
          ['warp'],
          '',
          function (items, config) {
            return (
              items.canInvertedEastDarkDeathMountain(true) && items.glove === 2 && items.hammer && items.moonPearl
            );
          },
        ),
      );
      locations.push(
        new Location(
          'ow',
          74.9,
          59,
          function (items, config) {
            return items.agahnim;
          },
          null,
          ['warp'],
        ),
      );
    }
    return locations;

  }
}
