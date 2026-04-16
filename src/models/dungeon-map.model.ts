import { Dungeon } from './dungeon.model';
import { DungeonNode } from './dungeon-node.model';
import { NodeStatus } from './node-status.enum';

export class DungeonMap {
  id: string;
  name: string;
  nodes: DungeonNode[];
  isIndoors: boolean;
  preloadedImages: HTMLImageElement[];

  private dungeonAbbrevs = [
    'ep', 'dp', 'toh', 'ct', 'pod', 'sp', 'sw', 'tt', 'ip', 'mm', 'tr', 'gt', 'lw', 'dw', 'hc',
  ];

  constructor(id: string, name: string, isIndoors = false) {
    this.id = id;
    this.name = name;
    this.nodes = [];
    this.isIndoors = isIndoors;
  }

  preloadImages(dungeonName: string) {
    var mapIds = [];
    this.preloadedImages = [];
    this.nodes.forEach(function (node) {
      if (
        node.content !== 'exit' &&
        (node.status === NodeStatus.BK_LOCKED ||
          node.status === NodeStatus.SK_LOCKED ||
          node.status === NodeStatus.OPEN_DOOR ||
          node.status === NodeStatus.HOLE ||
          node.status === NodeStatus.WATER_WARP ||
          node.status === NodeStatus.SQ_OPTION)
      ) {
        mapIds.push(node.content);
      }
    });
    if (this.id.substr(0, 2) === 'dw' && !this.isIndoors) {
      mapIds.push('lw-' + this.id.substr(3));
    }
    if (this.id.substr(0, 2) === 'lw' && !this.isIndoors) {
      mapIds.push('dw-' + this.id.substr(3));
    }
    if (Dungeon.pegMaps.indexOf(this.id) > -1) {
      mapIds.push(this.id + '-flipped');
    }
    if (Dungeon.floodMaps.indexOf(this.id) > -1) {
      mapIds.push(this.id + '-flooded');
      mapIds.push(this.id + '-flooded-flipped');
    }
    for (var i = 0; i < mapIds.length; i++) {
      this.preloadedImages[i] = new Image();
      var abbrevIndex = this.dungeonAbbrevs.indexOf(mapIds[i].split('-')[0]);
      var imageUrl = 'assets/maps/' + Dungeon.dungeonDataNames[abbrevIndex] + '/' + mapIds[i] + '.png';
      this.preloadedImages[i].src = imageUrl;

      this.preloadedImages[i].onerror = (function (failedUrl) {
        return function () {
          var deadUrls = JSON.parse(localStorage.getItem('deadUrls') || '{}');
          if (!deadUrls[failedUrl]) {
            deadUrls[failedUrl] = true;
            localStorage.setItem('deadUrls', JSON.stringify(deadUrls));
            console.log('Added dead URL to localStorage:', failedUrl);
          }
        };
      })(imageUrl);
    }
  }

  cleanPreload() {
    this.preloadedImages = null;
  }
}
