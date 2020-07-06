import { Component, OnInit } from '@angular/core';
import { ColorAdapter } from '@angular-material-components/color-picker';
//declare const tinycolor: any;
var tinycolor = require("tinycolor2");

export interface ColorPalette {
  name: string;
  hex: string;
  darkContrast: boolean;
}

@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.scss']
})
export class FormDesignComponent implements OnInit {

  primaryColor = '#00ff00';

  primaryAdaptedColor = null;

  primaryColorPalette: ColorPalette[] = [];

  secondaryColor = '#0000ff';

  secondaryAdaptedColor = null;

  secondaryColorPalette: ColorPalette[] = [];

  foregroundColor = '#000000';

  foregroundAdapterColor = null;

  backgroundColor = '#ffffff';

  backgroundAdapterColor = null;

  constructor( colorAdapter:ColorAdapter ) {
    this.savePrimaryColor();
    this.primaryAdaptedColor = colorAdapter.parse(this.primaryColor);
    this.saveSecondaryColor();
    this.secondaryAdaptedColor = colorAdapter.parse(this.secondaryColor);
    this.saveForegroundColor();
    this.foregroundAdapterColor = colorAdapter.parse(this.foregroundColor);
    this.saveBackgroundColor();
    this.backgroundAdapterColor = colorAdapter.parse(this.backgroundColor);
  }

  ngOnInit(): void { }

  savePrimaryColor() {
    this.primaryColorPalette = computeColors(this.primaryColor);

    for (const color of this.primaryColorPalette) {
      const key1 = `--theme-primary-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-primary-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }
  }

  saveSecondaryColor() {
    this.secondaryColorPalette = computeColors(this.secondaryColor);

    for (const color of this.secondaryColorPalette) {
      const key1 = `--theme-secondary-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-secondary-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }
  }

  saveForegroundColor() {
    document.documentElement.style.setProperty('--theme-foreground', this.foregroundColor);
  }

  saveBackgroundColor() {
    console.log(this.backgroundColor);
    document.documentElement.style.setProperty('--theme-background', this.backgroundColor);
  }

  log(e){console.log(e.toHex());}

  updatePrimaryColor(color){
    this.primaryAdaptedColor = color;
    this.primaryColor = color.toHexString();
    this.savePrimaryColor();
  }

  updateSecondaryColor(color){
    this.secondaryAdaptedColor = color;
    this.secondaryColor = color.toHexString();
    this.saveSecondaryColor();
  }

  updateForegroundColor(color){
    this.foregroundAdapterColor = color;
    this.foregroundColor = color.toHexString();
    this.saveForegroundColor();
  }

  updateBackgroundColor(color){
    this.backgroundAdapterColor = color;
    this.backgroundColor = color.toHexString();
    this.saveBackgroundColor();
  }

}

function computeColors(hex: string): ColorPalette[] {
  return [
    getColorObject(tinycolor(hex).lighten(52), '50'),
    getColorObject(tinycolor(hex).lighten(37), '100'),
    getColorObject(tinycolor(hex).lighten(26), '200'),
    getColorObject(tinycolor(hex).lighten(12), '300'),
    getColorObject(tinycolor(hex).lighten(6), '400'),
    getColorObject(tinycolor(hex), '500'),
    getColorObject(tinycolor(hex).darken(6), '600'),
    getColorObject(tinycolor(hex).darken(12), '700'),
    getColorObject(tinycolor(hex).darken(18), '800'),
    getColorObject(tinycolor(hex).darken(24), '900'),
    getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
    getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
    getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
    getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
  ];
}

function getColorObject(value, name): ColorPalette {
  const c = tinycolor(value);
  return {
    name: name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  };
}