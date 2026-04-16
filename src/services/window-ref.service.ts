import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {
  constructor() {}

  get nativeWindow(): Window {
    return window;
  }
}
