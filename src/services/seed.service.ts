import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SeedService {
  _apiUrl: string;
  webVersion: string;
  lastSeedTimestamp: number;
  lastSeedParams: { [key: string]: string };
  lastSeed: { [key: string]: any };

  constructor(private _http: Http) {
    this._apiUrl = 'https://lttp-rando-seed-api.glitch.me/';
    this.webVersion = '4.1';
    if (true /* environment.production */) {
      this._apiUrl = 'https://lttp-rando-seed-api.glitch.me/';
    } else {
      this._apiUrl = 'https://lttp-rando-seed-api-dev.glitch.me/';
    }
  }

  ping() {
    this._http.get(this._apiUrl);
  }

  getSeed(mode: string, params: any, isDaily = false, isQuals = false) {
    var url;
    var online = false;
    var seedHash = localStorage.getItem('seedHash');
    var seedStr = seedHash
      ? `${localStorage.getItem('seedHash')} -> https://alttpr.com/en/h/${seedHash}`
      : 'BrXZ47EgQR4Qq8A: (Using Default Seed)';
    const fakeObservable = {
      prefix:
        localStorage.getItem('seedMetadataPrefix') || '000001xXJAo0A0ebe3WP10000010022000000000',
      itemArray: localStorage.getItem('itemArray'),
      seedData: {
        seed: seedStr,
        logic: '',
        variation: 'none',
        goal: 'ganon',
        mode: 'open',
        data: '000001xXJAo0A0ebe3WP10000010022000000000017017015017006013120006013017153017016013101017013013014008015136017124128013014012118014014006121017014015015015017017015015013013126102132006014017154013151151213017017226013117106227201152240015109153228215013202241111007013102014152013017013153013008015017015242203009008229216112217217013013008017017154016150008017013127150019006119013152133100123016013013116122015218218218218231218244205008218008008135102131219232115014013017245017206125108207220246220220013233015113234221017208114015247006129017235222013248209017222110249223210236008223223017107211224015224224007104224015105250237130225251015153016007007014238014011012225225017008017016014018225017212017006102014',
        hints: [],
        silversHint: 'Did you find the silver arrows in Dark World?',
        bosses: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
        reqTower: '7',
        reqGanon: '7',
        error: null,
      },
      subscribe: (success, failure) => {
        if (fakeObservable.itemArray) {
          fakeObservable.seedData.data = fakeObservable.prefix + fakeObservable.itemArray;
        }
        this.lastSeedTimestamp = Date.now();
        this.lastSeedParams = {};
        this.lastSeed = fakeObservable.seedData;
        success(fakeObservable.seedData);
      },
    };
    var offlineResult = Object.create(fakeObservable);
    if (isQuals) {
      url = this._apiUrl + 'api/tseed?v=' + this.webVersion;
      Object.keys(params).forEach((key) => {
        url += '&' + key + '=' + params[key];
      });
    } else if (isDaily) {
      url = this._apiUrl + 'api/daily?v=' + this.webVersion + '&mode=' + mode;
    } else if (mode === 'mystery') {
      url = this._apiUrl + 'api/seed?v=' + this.webVersion + '&mode=mystery';
    } else {
      url = this._apiUrl + 'api/seed?v=' + this.webVersion;
      Object.keys(params).forEach((key) => {
        url += '&' + key + '=' + params[key];
      });
    }
    if (online) {
      return this._http
        .get(url)
        .map((response) => {
          var data = response.json();
          this.lastSeedTimestamp = Date.now();
          this.lastSeedParams = {};
          this.lastSeed = data;
          return data;
        })
        // Original bug: catch handler never calls handleError - it references but doesn't invoke it.
        // Original: .catch(() => { this.handleError })
        // Fixed: .catch((error) => this.handleError(error))
        .catch((error) => this.handleError(error));
    } else {
      return offlineResult;
    }
  }

  getStatus() {
    // Original bug: subscribe references bare `e` (undefined) instead of `this.e`.
    // Original: { e: {}, subscribe(success, failure) { success(e); } }
    // Fixed: renamed `e` to `data`, changed `success(e)` to `success(this.data)`
    const fakeStatusObservable = {
      data: {},
      subscribe(success, failure) {
        success(this.data);
      },
    };
    var statusUrl = this._apiUrl + 'api/status?v=' + this.webVersion;
    return fakeStatusObservable;
    // return this._http
    //     .get(statusUrl)
    //     .map(function (response) {
    //         return response.json();
    //     })
    //     .catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(
      error.json().error || 'Z3RSim seems to be offline. Please try again later.',
    );
  }
}
