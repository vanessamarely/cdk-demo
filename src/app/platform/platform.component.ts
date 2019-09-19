import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {
  name = 'Angular';

  constructor( private _platform: Platform ) {
  }

  ngOnInit() {
    console.log(this._platform.ANDROID);
    console.log(this._platform.BLINK);
    console.log(this._platform.EDGE);
    console.log(this._platform.FIREFOX);
    console.log(this._platform.IOS);
    console.log(this._platform.isBrowser);
    console.log(this._platform.SAFARI);
    console.log(this._platform.TRIDENT);
    console.log(this._platform.WEBKIT);
  }

}
