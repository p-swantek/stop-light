import { inject } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Component, Input } from '@angular/core';

export type BulbColor = 'red' | 'yellow' | 'green';

export abstract class StopLightBulb{
  abstract activate(): void
  abstract deactivate(): void;
}

@Component({
  selector: 'stop-light-bulb',
  standalone: true,
  imports: [],
  templateUrl: './stop-light-bulb.component.html',
  styleUrl: './stop-light-bulb.component.scss',
  providers: [{provide: StopLightBulb, useExisting: StopLightBulbComponent}]
})
export class StopLightBulbComponent implements StopLightBulb{
  @Input() color: BulbColor;

  @ViewChild('bulbElement', {read: ElementRef, static: true}) bulbElement: ElementRef;

  renderer2: Renderer2 = inject(Renderer2);

  activate(): void {
    this.renderer2.setStyle(this.bulbElement.nativeElement, 'box-shadow', `0px 0px 20px 10px ${this.color}`);
  }

  deactivate(): void {
    this.renderer2.removeStyle(this.bulbElement.nativeElement, 'box-shadow');
  }
}
