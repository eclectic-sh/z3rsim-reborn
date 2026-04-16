import { Location } from '../models/location.model';
import { Config } from '../models/config.model';

export class LightWorldLocations {
  static setup(items: string[], config: Config): Location[] {

    var locations = [];
    locations.push(
      new Location(
        'Master Sword Pedestal',
        2.5,
        3.2,
        function (items, config) {
          return (
            items.pendantCourage &&
            items.pendantPower &&
            items.pendantWisdom &&
            (config.mode !== 'inverted' || items.canInvertedLW()) &&
            (items.book || config.advancedItems)
          );
        },
        function (items, config) {
          return items.book && (config.mode !== 'inverted' || items.canInvertedLW());
        },
        [items[0]],
        '',
        function (items, config) {
          return (
            items.pendantCourage &&
            items.pendantPower &&
            items.pendantWisdom &&
            (config.mode !== 'inverted' || items.canInvertedLW())
          );
        },
      ),
    );
    locations.push(
      new Location(
        'Hyrule Secret Passage',
        30,
        40.8,
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
        null,
        [items[1], items[2]],
      ),
    );
    locations.push(
      new Location(
        "King's Tomb",
        30.8,
        29.6,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.boots && items.glove === 2 && items.moonPearl && items.canInvertedLW();
          } else {
            return items.boots && (items.glove === 2 || (items.mirror && items.canNorthWestDarkWorld()));
          }
        },
        null,
        [items[3]],
      ),
    );
    locations.push(
      new Location(
        'Dam',
        23.4,
        93.4,
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
        null,
        [items[4], items[47]],
        '',
        function (items, config) {
          return config.mode === 'inverted' && items.mirror && items.canInvertedLW();
        },
      ),
    );
    if (config.mode !== 'inverted') {
      locations.push(
        new Location(
          "Link's House",
          27.4,
          67.9,
          function (items, config) {
            return true;
          },
          null,
          [items[5]],
        ),
      );
    }
    if (config.mode !== 'inverted') {
      locations.push(
        new Location(
          'Kakariko',
          4,
          53.8,
          function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
          },
          null,
          [items[6], items[7], items[12], items[13], items[14], items[15], items[16], items[17], items[18], items[19], items[20], items[21], items[28]],
        ),
      );
    } else {
      locations.push(
        new Location(
          'Kakariko (Superbunny Chests)',
          2.5,
          42,
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          null,
          [items[13], items[14], items[15], items[16]],
          '',
          function (items, config) {
            return items.canInvertedLW();
          },
        ),
      );
      locations.push(
        new Location(
          'Kakariko (Mirror Superbunny Chests)',
          6.5,
          42,
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          null,
          [items[18], items[19], items[20], items[21], items[6]],
          '',
          function (items, config) {
            return items.canInvertedLW() && items.mirror;
          },
        ),
      );
      locations.push(
        new Location(
          'Kakariko (Pearl Locked Chests)',
          5,
          53.8,
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          null,
          [items[7], items[12], items[17]],
        ),
      );
      locations.push(
        new Location(
          'Bottle Vendor',
          5,
          47.5,
          function (items, config) {
            return config.mode !== 'inverted' || items.canInvertedLW();
          },
          null,
          [items[28]],
        ),
      );
    }
    locations.push(
      new Location(
        "Aginah's Cave",
        10,
        82.6,
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
        null,
        [items[8]],
      ),
    );
    locations.push(
      new Location(
        'Sahasrahla Hut',
        40.7,
        41.4,
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
        null,
        [items[9], items[10], items[11]],
      ),
    );
    locations.push(
      new Location(
        'Bonk Rocks',
        19.5,
        29.3,
        function (items, config) {
          return items.boots && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        },
        null,
        [items[22]],
      ),
    );
    locations.push(
      new Location(
        'Mini Moldorm Cave',
        32.6,
        93.4,
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
        null,
        [items[23], items[24], items[25], items[26], items[40]],
      ),
    );
    locations.push(
      new Location(
        'Ice Rod Cave',
        44.7,
        76.9,
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
        null,
        [items[27]],
      ),
    );
    locations.push(
      new Location(
        'Sahasrahla Green Pendant',
        40.7,
        46.7,
        function (items, config) {
          return items.pendantCourage && (config.mode !== 'inverted' || items.canInvertedLW());
        },
        null,
        [items[29]],
      ),
    );
    locations.push(
      new Location(
        'Magic Bat',
        16,
        58,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedLW() && items.moonPearl && items.hammer && items.powder;
          } else {
            return items.powder && (items.hammer || (items.moonPearl && items.mirror && items.glove === 2));
          }
        },
        null,
        [items[30]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedLW() && items.moonPearl && items.hammer && items.somaria && items.mushroom;
          } else {
            return (
              items.somaria &&
              items.mushroom &&
              (items.hammer || (items.moonPearl && items.mirror && items.glove === 2))
            );
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Sick Kid',
        7.8,
        53,
        function (items, config) {
          return items.bottle && (config.mode !== 'inverted' || items.canInvertedLW());
        },
        null,
        [items[31]],
      ),
    );
    locations.push(
      new Location(
        'Hobo',
        35.4,
        69.7,
        function (items, config) {
          return items.flippers && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        },
        null,
        [items[32]],
        '',
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
      ),
    );
    locations.push(
      new Location(
        'King Zora',
        47.7,
        12.1,
        function (items, config) {
          return (
            (items.flippers || items.glove) &&
            (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl))
          );
        },
        null,
        [items[34]],
        '',
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
      ),
    );
    locations.push(
      new Location(
        'Lumberjack Tree',
        15.1,
        7.6,
        function (items, config) {
          return (
            items.agahnim &&
            items.boots &&
            (config.mode !== 'inverted' || (items.moonPearl && items.canInvertedLW()))
          );
        },
        function (items, config) {
          return config.mode !== 'inverted' || items.canInvertedLW();
        },
        [items[36]],
      ),
    );
    locations.push(
      new Location(
        'Library',
        7.7,
        65.9,
        function (items, config) {
          return items.boots && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        },
        function (items, config) {
          return config.mode !== 'inverted' || items.canInvertedLW();
        },
        [items[41]],
      ),
    );
    if (config.mode === 'inverted') {
      locations.push(
        new Location(
          'Mushroom Item',
          7.2,
          9.6,
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          function (items, config) {
            return items.canInvertedLW();
          },
          [items[42]],
        ),
      );
      locations.push(
        new Location(
          'Lost Woods Hideout',
          9.2,
          16.3,
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          function (items, config) {
            return items.canInvertedLW();
          },
          [items[35]],
        ),
      );
    } else {
      locations.push(
        new Location(
          'Lost Woods',
          7.2,
          9.6,
          function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
          },
          null,
          [items[42], items[35]],
        ),
      );
    }
    locations.push(
      new Location(
        'Potion Shop',
        40.8,
        32.5,
        function (items, config) {
          return items.mushroom && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        },
        null,
        [items[43]],
      ),
    );
    locations.push(
      new Location(
        'Maze Race',
        1.8,
        69.8,
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
        function (items, config) {
          return config.mode !== 'inverted' || items.canInvertedLW();
        },
        [items[44]],
      ),
    );
    locations.push(
      new Location(
        'Desert Ledge',
        1.5,
        89,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedLW() && items.moonPearl && items.book;
          } else {
            return items.book || (items.canMire(config) && items.mirror);
          }
        },
        function (items, config) {
          return config.mode !== 'inverted' || items.canInvertedLW();
        },
        [items[45]],
        '',
        function (items, config) {
          return config.mode === 'inverted' && items.book && items.canInvertedLW();
        },
      ),
    );
    locations.push(
      new Location(
        'Lake Hylia Island',
        36.1,
        82.9,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedLW() && items.moonPearl && items.flippers;
          } else {
            return (
              items.flippers &&
              items.moonPearl &&
              items.mirror &&
              (items.canSouthDarkWorld() || items.canNorthEastDarkWorld())
            );
          }
        },
        function (items, config) {
          return config.mode !== 'inverted' || items.canInvertedLW();
        },
        [items[46]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedLW() && items.moonPearl;
          } else {
            return (
              items.boots &&
              items.moonPearl &&
              items.mirror &&
              (items.canSouthDarkWorld(true) || items.canNorthEastDarkWorld(true))
            );
          }
        },
        function (items, config) {
          return config.mode !== 'inverted' || items.canInvertedLW();
        },
      ),
    );
    locations.push(
      new Location(
        'Zora River Ledge',
        47.7,
        17.3,
        function (items, config) {
          return items.flippers && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        },
        function (items, config) {
          return items.glove && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        },
        [items[48]],
        '',
        function (items, config) {
          return (
            (items.boots || items.canAncillaFF()) &&
            (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl))
          );
        },
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
      ),
    );
    locations.push(
      new Location(
        'Shovel Item',
        14.4,
        66.2,
        function (items, config) {
          return items.shovel && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        },
        null,
        [items[49]],
      ),
    );
    locations.push(
      new Location(
        'Waterfall Fairy',
        45,
        19.3,
        function (items, config) {
          return items.flippers && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        },
        null,
        [items[50], items[51]],
        '',
        function (items, config) {
          return (
            (config.mode !== 'inverted' && (items.moonPearl || items.boots)) ||
            (items.canInvertedLW() && items.moonPearl)
          );
        },
      ),
    );
    locations.push(
      new Location(
        'Sanctuary',
        23,
        28,
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
        null,
        [items[52]],
        '',
        function (items, config) {
          return config.mode === 'inverted' && items.canInvertedLW() && items.mirror;
        },
      ),
    );
    locations.push(
      new Location(
        'Sewers Bombable Wall',
        26.8,
        32.4,
        function (items, config) {
          if (config.mode === 'inverted') {
            return (
              items.canInvertedLW() &&
              items.moonPearl &&
              (items.glove || (items.lamp && items.dungeonItemsArray[0].smallKeys > 0))
            );
          } else {
            return (
              config.mode.indexOf('standard') > -1 ||
              items.glove ||
              (items.lamp && items.dungeonItemsArray[0].smallKeys > 0)
            );
          }
        },
        null,
        [items[53], items[54], items[55]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedLW() && items.dungeonItemsArray[0].smallKeys > 0;
          } else {
            return items.dungeonItemsArray[0].smallKeys > 0;
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Escape Front Half',
        24.9,
        51,
        function (items, config) {
          return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        },
        null,
        [items[57], items[58], items[59]],
        '',
        function (items, config) {
          return config.mode !== 'inverted' || items.canInvertedLW();
        },
      ),
    );
    locations.push(
      new Location(
        'Escape Dark Room Chest',
        24.9,
        45.8,
        function (items, config) {
          if (config.mode === 'inverted') {
            return (
              items.canInvertedLW() && items.moonPearl && (items.lamp || (config.advancedItems && items.fireRod))
            );
          } else {
            return config.mode.indexOf('standard') > -1 || items.lamp || (config.advancedItems && items.fireRod);
          }
        },
        null,
        [items[56]],
        '',
        function (items, config) {
          return config.mode !== 'inverted' || items.canInvertedLW();
        },
      ),
    );
    locations.push(
      new Location(
        'Old Man',
        20.8,
        20.4,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain() && items.lamp;
          } else {
            return items.canWestDeathMountain() && items.lamp;
          }
        },
        null,
        [items[74]],
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
        'Spectacle Rock Cave',
        25.8,
        14.8,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain();
          } else {
            return items.canWestDeathMountain();
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain();
          } else {
            return items.canWestDeathMountain();
          }
        },
        [items[75]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain(true);
          } else {
            return items.canWestDeathMountain(true);
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain(true);
          } else {
            return items.canWestDeathMountain(true);
          }
        },
      ),
    );
    if (config.hintsEnabled) {
      locations.push(
        new Location(
          'Spectacle Rock Hint',
          23.3,
          14.8,
          function (items, config) {
            if (config.mode === 'inverted') {
              return items.canInvertedEastDarkDeathMountain();
            } else {
              return items.canWestDeathMountain();
            }
          },
          function (items, config) {
            if (config.mode === 'inverted') {
              return items.canInvertedEastDarkDeathMountain();
            } else {
              return items.canWestDeathMountain();
            }
          },
          ['=13'],
          '',
          function (items, config) {
            if (config.mode === 'inverted') {
              return items.canInvertedEastDarkDeathMountain(true);
            } else {
              return items.canWestDeathMountain(true);
            }
          },
          function (items, config) {
            if (config.mode === 'inverted') {
              return items.canInvertedEastDarkDeathMountain(true);
            } else {
              return items.canWestDeathMountain(true);
            }
          },
        ),
      );
    }
    locations.push(
      new Location(
        'Ether Tablet',
        21,
        3,
        function (items, config) {
          if (config.mode === 'inverted') {
            return (
              items.canInvertedEastDeathMountain() &&
              items.moonPearl &&
              items.book &&
              items.hammer &&
              (items.sword >= 2 || (items.hammer && config.weapons === 'swordless'))
            );
          } else {
            return (
              items.book &&
              items.canWestDeathMountain() &&
              (items.mirror || (items.hammer && items.hookshot)) &&
              (items.sword >= 2 || (items.hammer && config.weapons === 'swordless'))
            );
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain() && items.moonPearl && items.book && items.hammer;
          } else {
            return (
              items.book && items.canWestDeathMountain() && (items.mirror || (items.hammer && items.hookshot))
            );
          }
        },
        [items[76]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return (
              items.canInvertedEastDeathMountain(true) &&
              items.moonPearl &&
              items.book &&
              items.hammer &&
              (items.sword >= 2 || (items.hammer && config.weapons === 'swordless'))
            );
          } else {
            return (
              items.book &&
              items.canWestDeathMountain(true) &&
              (items.mirror || (items.hammer && items.hookshot)) &&
              (items.sword >= 2 || (items.hammer && config.weapons === 'swordless'))
            );
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain(true) && items.moonPearl && items.book && items.hammer;
          } else {
            return (
              items.book && items.canWestDeathMountain(true) && (items.mirror || (items.hammer && items.hookshot))
            );
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Top of Spectacle Rock',
        25.4,
        8.5,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain() && items.moonPearl && items.hammer;
          } else {
            return items.canWestDeathMountain() && items.mirror;
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDarkDeathMountain();
          } else {
            return items.canWestDeathMountain();
          }
        },
        [items[77]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain(true) && items.moonPearl && items.hammer;
          } else {
            return items.canWestDeathMountain(true) && items.mirror;
          }
        },
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
        'Paradox Cave',
        41.4,
        17.1,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain() && items.moonPearl;
          } else {
            return items.canEastDeathMountain();
          }
        },
        null,
        [items[80], items[81], items[82], items[83], items[84], items[85], items[86]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain(true) && items.moonPearl;
          } else {
            return items.canEastDeathMountain(true);
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Spiral Cave',
        39.9,
        9.3,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain() && items.moonPearl;
          } else {
            return items.canEastDeathMountain();
          }
        },
        null,
        [items[78]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain(true);
          } else {
            return items.canEastDeathMountain(true);
          }
        },
      ),
    );
    locations.push(
      new Location(
        'Floating Island',
        40.2,
        3,
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain();
          } else {
            return items.canEastDeathMountain() && items.mirror && items.moonPearl && items.glove === 2;
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain();
          } else {
            return items.canEastDeathMountain();
          }
        },
        [items[87]],
        '',
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain(true);
          } else {
            return items.canEastDeathMountain(true) && items.mirror && items.moonPearl && items.glove === 2;
          }
        },
        function (items, config) {
          if (config.mode === 'inverted') {
            return items.canInvertedEastDeathMountain(true);
          } else {
            return items.canEastDeathMountain(true);
          }
        },
      ),
    );
    if (config.mode === 'inverted') {
      locations.push(
        new Location(
          "Ganon's Tower Accessibility",
          22,
          46,
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          null,
          ['gt-requirement'],
        ),
      );
      locations.push(
        new Location(
          "Ganon's Vulnerability",
          27.8,
          46,
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          null,
          ['ganon-requirement'],
        ),
      );
      locations.push(
        new Location(
          'Ganon',
          21,
          40.8,
          function (items, config) {
            switch (config.goal) {
              case 'pedestal':
              case 'triforce':
                return false;
              case 'dungeons':
                return items.canInvertedLW() && items.moonPearl && items.canDamageGanon(config);
              case 'ganon':
                return items.canInvertedLW() && items.moonPearl && items.agahnim2 && items.canDamageGanon(config);
              case 'fast_ganon':
                return items.canInvertedLW() && items.moonPearl && items.canDamageGanon(config);
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
          15.2,
          52,
          function (items, config) {
            if (config.mode === 'inverted') {
              return (items.glove === 2 || items.mirror) && items.canInvertedLW();
            } else {
              return items.canNorthWestDarkWorld() && items.glove === 2;
            }
          },
          null,
          [items[113]],
          'ow',
        ),
      );
      locations.push(
        new Location(
          'Purple Chest',
          16.7,
          90,
          function (items, config) {
            if (config.mode === 'inverted') {
              return (items.glove === 2 || items.mirror) && items.canInvertedLW();
            } else {
              return items.canNorthWestDarkWorld() && items.glove === 2;
            }
          },
          null,
          [items[114]],
          'ow',
        ),
      );
      locations.push(
        new Location(
          'Other Turtle Rock Entrances',
          42.5,
          9.3,
          function (items, config) {
            return items.canInvertedEastDeathMountain();
          },
          null,
          ['tr-ledge'],
          '',
          function (items, config) {
            return items.canInvertedEastDeathMountain(true);
          },
        ),
      );
      locations.push(
        new Location(
          'Bombos Tablet',
          11,
          92.2,
          function (items, config) {
            return (
              items.book &&
              items.canInvertedLW() &&
              (items.sword >= 2 || (items.hammer && config.weapons === 'swordless'))
            );
          },
          function (items, config) {
            return items.book && items.canInvertedLW();
          },
          [items[33]],
          'ow',
        ),
      );
      locations.push(
        new Location(
          'Checkerboard Cave',
          8.75,
          77.3,
          function (items, config) {
            return items.canInvertedLW() && items.glove && items.moonPearl;
          },
          function (items, config) {
            return items.canInvertedLW() && items.glove && items.moonPearl;
          },
          [items[39]],
          'mire',
        ),
      );
      locations.push(
        new Location(
          'South of Grove',
          13.5,
          84.1,
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          function (items, config) {
            return items.canInvertedLW();
          },
          [items[37]],
          'ow',
          function (items, config) {
            return items.canInvertedLW() && items.mirror;
          },
        ),
      );
      locations.push(
        new Location(
          'Graveyard Ledge',
          28,
          27,
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          function (items, config) {
            return items.canInvertedLW() && items.moonPearl;
          },
          [items[38]],
          'ow',
        ),
      );
    }
    if (config.mode !== 'inverted') {
      locations.push(
        new Location(
          'ow',
          4.5,
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
          28.6,
          14.9,
          function (items, config) {
            return items.canWestDeathMountain();
          },
          null,
          ['warp'],
          '',
          function (items, config) {
            return items.canWestDeathMountain(true);
          },
        ),
      );
      locations.push(
        new Location(
          'dm',
          38.1,
          22.9,
          function (items, config) {
            return items.canEastDeathMountain() && items.glove === 2;
          },
          null,
          ['warp'],
          '',
          function (items, config) {
            return items.canEastDeathMountain(true) && items.glove === 2;
          },
        ),
      );
      locations.push(
        new Location(
          'ow',
          23.5,
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
          1.7,
          96,
          function (items, config) {
            return items.canMire(config);
          },
          null,
          ['warp'],
        ),
      );
      locations.push(
        new Location(
          'ow',
          48.2,
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
          39.7,
          87,
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
          47,
          6,
          function (items, config) {
            return items.canEastDeathMountain() && items.glove === 2 && items.hammer;
          },
          null,
          ['warp'],
          '',
          function (items, config) {
            return items.canEastDeathMountain(true) && items.glove === 2 && items.hammer;
          },
        ),
      );
      locations.push(
        new Location(
          'ow',
          24.9,
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
