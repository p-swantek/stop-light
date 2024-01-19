import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { StopLightBulb } from './stop-light-bulb/stop-light-bulb.component';
import { MonoTypeOperatorFunction, interval, map, scan, startWith, tap, timer } from 'rxjs';

@Component({
  selector: 'stop-light',
  standalone: true,
  imports: [],
  templateUrl: './stop-light.component.html',
  styleUrl: './stop-light.component.scss'
})
export class StopLightComponent implements AfterContentInit{

  @ContentChildren(StopLightBulb) stopLightBulbs: QueryList<StopLightBulb>



  ngAfterContentInit(): void {
    interval(2000).pipe(
      this.getIlluminatedBulbIndex(this.stopLightBulbs.length)
    ).subscribe(bulbToLightIndex => {
      this.stopLightBulbs.forEach((bulb, index) => {
        if (index === bulbToLightIndex){
          bulb.activate();
        }
        else{
          bulb.deactivate();
        }
      })
    });
  }

  private getIlluminatedBulbIndex(numOfBulbs: number): MonoTypeOperatorFunction<number>{
    return source => {
      return source.pipe(
        scan((acc) => {
          let newIndex = acc - 1
          if (newIndex < 0){
            newIndex = numOfBulbs - 1
          }
          return newIndex
        }, numOfBulbs - 1),
      )

    }
  }

}
