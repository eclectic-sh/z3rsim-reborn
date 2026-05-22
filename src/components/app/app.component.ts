import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { WindowRef } from '../../services/window-ref.service';
import { SeedService } from '../../services/seed.service';

let appRef: AppComponent;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  window: Window;
  isDarkTheme: boolean;
  buttonClass: string;
  colorMode: string;
  modalRef: { hide: () => void };

  // Offline integration state
  isGenerating: boolean;

  constructor(
    private _windowRef: WindowRef,
    private _modalService: BsModalService,
    private _router: Router,
    private _seedService: SeedService,
  ) {
    this.isGenerating = false;
    this.window = _windowRef.nativeWindow;
  }

  ngOnInit() {
    appRef = this;
    (window as any).appRef = this;
    this.buttonClass = 'fa fa-moon-o';
    if (localStorage.getItem('isDarkTheme')) {
      this.isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
    } else {
      localStorage.setItem('isDarkTheme', 'false');
    }
    this.onToggleTheme(false);
    this.setColorModeText();
  }

  openModal(template: any) {
    this.modalRef = this._modalService.show(template);
  }

  onToggleTheme(toggle = true) {
    if (toggle) {
      this.isDarkTheme = !this.isDarkTheme;
    }
    if (this.isDarkTheme) {
      this.buttonClass = 'fa fa-moon-o';
      localStorage.setItem('isDarkTheme', 'true');
    } else {
      this.buttonClass = 'fa fa-sun-o';
      localStorage.setItem('isDarkTheme', 'false');
    }
    this.setColorModeText();
  }

  setColorModeText() {
    if (this.isDarkTheme) {
      this.colorMode = 'Dark Theme';
    } else {
      this.colorMode = 'Light Theme';
    }
  }

  redirect(route: string) {
    this._router.navigate(['/' + route]);
  }

  // ---- Native Offline Integration Methods ----

  onGenerateNewSeed(settings?: any) {
    var me = this;
    me.isGenerating = true;

    var formValues = settings || me.getFormValues(document.querySelector('form.form-horizontal'));

    var seedParams = {
      glitches: 'none',
      item_placement: formValues && formValues.itemPlacementSelected || 'advanced',
      dungeon_items: formValues && formValues.dungeonItemsSelected || 'standard',
      accessibility: formValues && formValues.accessibilitySelected || 'items',
      goal: formValues && formValues.goalSelected || 'ganon',
      crystals: {
        ganon: formValues && formValues.openGanonSelected || '7',
        tower: formValues && formValues.openTowerSelected || '7'
      },
      mode: formValues && formValues.modeSelected || 'open',
      entrances: 'none',
      hints: formValues && formValues.hintsSelected || 'on',
      weapons: formValues && formValues.swordsSelected || 'randomized',
      item: { pool: 'normal', functionality: 'normal' },
      tournament: false,
      spoilers: 'on',
      lang: 'en',
      enemizer: {
        boss_shuffle: formValues && formValues.enemizerSelected || 'none',
        enemy_shuffle: 'none',
        enemy_damage: 'default',
        enemy_health: 'default'
      }
    };

    this._seedService.generateSeed(seedParams).then(function(spoilerData) {
      me._seedService.saveSpoilerLogToLocalStorage(spoilerData.spoiler);
      localStorage.setItem('seedHash', spoilerData && spoilerData.hash);

      me._seedService.loadAndGenerateItemArray().then(function(itemArray) {
        console.log('Item array generated:', itemArray && itemArray.length, 'locations');
        localStorage.setItem('itemArray', itemArray ? itemArray.join('') : '');
        me.showNotification('New seed generated successfully!', 'success');
        // setTimeout(function() { window.location.reload(); }, 1000);
      });
    }).catch(function(error) {
      console.error('Seed generation failed:', error);
      me.showNotification('Failed to generate seed: ' + error.message, 'error');
    }).then(function() {
      me.isGenerating = false;
    });
  }

  onSpoilerLogFileSelected(event: Event) {
    var me = this;
    var input = event.target as HTMLInputElement;
    var files = input.files;
    var file = (files && files.length > 0) ? files[0] : null;
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function() {
      try {
        var text = reader.result as string;
        var spoilerLogData = JSON.parse(text);
        var seed = me._seedService.extractSeedHash(file.name);
        if (seed) {
          localStorage.setItem('seedHash', seed);
        }
        me._seedService.saveSpoilerLogToLocalStorage(spoilerLogData);
        me._seedService.loadAndGenerateItemArray().then(function(itemArray) {
          if (itemArray) {
            localStorage.setItem('itemArray', itemArray.join(''));
          }
        });
        me.showNotification('Spoiler log successfully loaded! Reloading page...', 'success');
        setTimeout(function() { window.location.reload(); }, 1000);
      } catch (error) {
        console.error('Error loading spoiler log:', error);
        alert('Error loading spoiler log file. Please check the console for details.');
      }
    };
    reader.readAsText(file);
  }

  private getFormValues(form: Element): any {
    if (!form) return null;

    var getRadioValue = function(name: string): string | null {
      var radios = form.querySelectorAll('input[name="' + name + '"]:checked, label[name="' + name + '"].active');
      if (radios.length > 0) {
        var el = radios[0] as any;
        return el.value || el.getAttribute('btnradio');
      }
      return null;
    };

    var getSelectValue = function(id: string): string | null {
      var select = form.querySelector('#' + id) as HTMLSelectElement;
      return select ? select.value : null;
    };

    return {
      itemPlacementSelected: getRadioValue('basic-place-button') || getRadioValue('advanced-place-button') || 'advanced',
      dungeonItemsSelected: getRadioValue('no-di-button') || getRadioValue('mc-button') || getRadioValue('mcs-button') || getRadioValue('keysanity-button') || 'standard',
      accessibilitySelected: getRadioValue('full-inv-button') || getRadioValue('full-loc-button') || getRadioValue('beatable-button') || 'items',
      goalSelected: getRadioValue('ganon-button') || getRadioValue('fast-ganon-button') || getRadioValue('alldungeons-button') || getRadioValue('pedestal-button') || getRadioValue('triforce-button') || 'ganon',
      openTowerSelected: getSelectValue('open-tower-mode') || '7',
      openGanonSelected: getSelectValue('open-ganon-mode') || '7',
      modeSelected: getRadioValue('standard-button') || getRadioValue('open-button') || getRadioValue('inverted-button') || 'open',
      enemizerSelected: getRadioValue('no-enemy-button') || getRadioValue('simple-button') || getRadioValue('full-button') || getRadioValue('chaos-button') || 'none',
      hintsSelected: getRadioValue('with-hints-button') || getRadioValue('no-hints-button') || 'on',
      swordsSelected: getRadioValue('randomized-button') || getRadioValue('assured-button') || getRadioValue('swordless-button') || 'randomized'
    };
  }

  private showNotification(message: string, type: string) {
    var cls = type === 'success' ? 'alert-success' : 'alert-danger';
    var existing = document.querySelector('.' + cls + '-notification');
    if (existing) existing.remove();

    var notification = document.createElement('div');
    notification.className = 'alert ' + cls + ' ' + type + '-notification';
    notification.setAttribute('role', 'alert');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    notification.innerHTML = '<strong>' + (type === 'success' ? 'Success:' : 'Error:') + '</strong> ' + message;

    var closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'button');
    closeBtn.className = 'close';
    closeBtn.setAttribute('data-dismiss', 'alert');
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '<span aria-hidden="true">&times;</span>';
    closeBtn.onclick = function() { notification.remove(); };
    notification.appendChild(closeBtn);
    document.body.appendChild(notification);

    setTimeout(function() {
      if (notification.parentNode) notification.remove();
    }, type === 'success' ? 5000 : 8000);
  }
}
